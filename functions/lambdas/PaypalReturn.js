const functions = require('firebase-functions')
const admin = require("firebase-admin")
const cors = require('cors')({ origin: true })
const db = admin.firestore() 
const paypal = require('../util/paypal')
const { generateAscIdAndEnsureUniqueness } = require('../util/dau-readable-id-util')
const { OrdersCaptureRequest } = require('@paypal/checkout-server-sdk').orders
const { DataBaseConnection, RenderedOrder } = require('delivery-boosting-2021-model')
const dbc = new DataBaseConnection(admin.firestore)






exports.paypalReturn = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const { restaurant: restaurantUuid, order: orderUuid, token } = request.query
        // await db.collection('restaurants').doc(request.query.restaurant).collection('orders').doc(order.uuid).set(order)

        const restaurant = await dbc.getRestaurant(restaurantUuid)
        const order = await restaurant.getOrder(orderUuid)
        const catalog = await restaurant.getCatalog(order.catalog)
        const renderedOrder = new RenderedOrder(order, catalog)

        const orderSnap = await restaurant._ref.collection('orders').doc(order.uuid).collection('_paypal').doc(token).get()

        if(orderSnap.exists && orderSnap.data().status === 'CREATED'){
            const client = await paypal.getClient(restaurantUuid)
            const captureRequest = new OrdersCaptureRequest(token)
            const paypalResponse = await client.execute(captureRequest)
            
            await restaurant._ref.collection('orders').doc(order.uuid).collection('_paypal').doc(paypalResponse.result.id).set({
                id: paypalResponse.result.id,
                status: paypalResponse.result.status
            }, { merge: true })
            let orderName = await generateAscIdAndEnsureUniqueness(restaurant._ref.collection('orders'), 5, 'BE-', 'name')
            await restaurant._ref.collection('orders').doc(order.uuid).set({
                state: 'POSTED',
                name: orderName,
                postedAt: new Date()
            }, { merge: true })
            response.redirect(`https://delivery-boosting-2021.web.app/restaurant/${restaurantUuid}/order-complete/${order.uuid}`)
            return
        }

        response.json({ success: false })
    })
})
