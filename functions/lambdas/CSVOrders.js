const functions = require('firebase-functions')
const admin = require("firebase-admin")
const db = admin.firestore() 

const cors = require('cors')({ origin: true })
const { DataBaseConnection } = require('delivery-boosting-2021-model')
const dbc = new DataBaseConnection(admin.firestore)


exports.CSVOrders = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {

        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer ')) &&
        !(request.cookies && request.cookies.__session)) {
            functions.logger.error(
            'No Firebase ID token was passed as a Bearer token in the Authorization header.',
            'Make sure you authorize your request by providing the following HTTP header:',
            'Authorization: Bearer <Firebase ID Token>',
            'or by passing a "__session" cookie.'
            )
            response.status(403).send('Unauthorized')
            return
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            functions.logger.log('Found "Authorization" header')
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1]
        } else if (request.cookies) {
            functions.logger.log('Found "__session" cookie')
            // Read the ID Token from cookie.
            idToken = request.cookies.__session
        } else {
            // No cookie
            response.status(403).send('Unauthorized')
            return
        }

        try {
            const decodedIdToken = await admin.auth().verifyIdToken(idToken)
            functions.logger.log('ID Token correctly decoded', decodedIdToken)
            request.user = decodedIdToken
        } catch (error) {
            functions.logger.error('Error while verifying Firebase ID token:', error)
            response.status(403).send('Unauthorized')
            return
        }

        console.log('auth: ', request.headers.authorization)

        const restaurantUuid = request.query.restaurantUuid
        const startDate = request.query.startDate
        const endDate = request.query.endDate || new Date().toISOString()
        const locationUuid = request.query.locationUuid

        const restaurant = await dbc.getRestaurant(restaurantUuid)
        
        var startTime = new Date(startDate).getTime()
        var endTime = new Date(endDate).getTime()

        const orderList = await restaurant.getAllOrders(locationUuid)
        const renderedOrderList = await Promise.all(orderList.orders.map(o => restaurant.getRenderedOrder(o.uuid)))
        const ordersInTimePeriod = []

        console.log('orderList awaited', renderedOrderList.length)

        for (const o of renderedOrderList) {
            if ((new Date(o.postedAt).getTime() >= startTime) && (new Date(o.postedAt).getTime() <= endTime)) {
                ordersInTimePeriod.push(o)
            }
        }

        const createCSVWriter = require('csv-writer').createObjectCsvStringifier

        const head = [
            {id: 'name', title: 'Bestellnummer' },
            {id: 'postedAt', title: 'Bestellzeitpunkt' },
            {id: 'firstName', title: 'Vorname' },
            {id: 'lastName', title: 'Nachname' },
            {id: 'postalCode', title: 'PLZ' },
            {id: 'city', title: 'Stadt' },
            {id: 'street', title: 'Strasse' },
            {id: 'mail', title: 'E-Mail' },
            {id: 'phoneNumber', title: 'Nummer' },
            {id: 'terminated', title: 'Terminiert' },
            {id: 'deliveryTime', title: 'Lieferzeitpunkt' },
            {id: 'method', title: 'Methode' },
            {id: 'paymentMethod', title: 'Zahlungsart' },
            {id: 'price', title: 'Bestellpreis' },
            {id: 'state', title: 'Status' },
        ]

        const csvWriter = createCSVWriter({
            fieldDelimiter: ";",
            header: head
        })

        const records = ordersInTimePeriod.map(order => {
            return {
                name: order.name,
                postedAt: order.postedAt.toString(),
                firstName: order.shipping.firstName,
                lastName: order.shipping.name,
                postalCode: order.shipping.postalCode,
                city: order.shipping.city,
                street: order.shipping.street + ' ' + order.shipping.streetNumber,
                mail: order.shipping.mail,
                phoneNumber: order.shipping.phoneNumber,
                terminated: (typeof order.timeType.timed !== 'undefined' && order.timeType.timed !== false) ? 'terminiert' : 'sofort',
                deliveryTime: order.deliveryTime || '-',
                method: order.method.method === "delivery" ? 'Lieferung' : 'Abholung',
                paymentMethod: order.paymentMethod,
                price: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(order.orderPrice / 100),
                state: order.state
            } 
        })
        
        const string = csvWriter.stringifyRecords(records)
        var csvContent =  "\uFEFF" + string;

        response.setHeader('Content-type', "text/csv;charset=utf-8")

        response.setHeader('Content-disposition', 'attachment; filename=orders.csv')

        response.send(csvContent)

        console.log('done')
    })
})