const functions = require('firebase-functions')
const admin = require("firebase-admin")
const cors = require('cors')({ origin: true })
const db = admin.firestore() 
const paypal = require('../util/paypal')
const { OrdersCreateRequest } = require('@paypal/checkout-server-sdk').orders
const { DataBaseConnection, RenderedOrder } = require('delivery-boosting-2021-model')
const { generateAscIdAndEnsureUniqueness } = require('../util/dau-readable-id-util')
const dbc = new DataBaseConnection(admin.firestore)






exports.payOrder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const { restaurant: restaurantUuid, order: orderUuid } = request.query
        // await db.collection('restaurants').doc(request.query.restaurant).collection('orders').doc(order.uuid).set(order)

        const restaurant = await dbc.getRestaurant(restaurantUuid)
        const order = await restaurant.getOrder(orderUuid)
        const catalog = await restaurant.getCatalog(order.catalog)
        const renderedOrder = new RenderedOrder(order, catalog)

        if(renderedOrder.paymentMethod === 'cash'){
            let orderName = await generateAscIdAndEnsureUniqueness(restaurant._ref.collection('orders'), 5, 'BE-', 'name')
            await restaurant._ref.collection('orders').doc(order.uuid).set({
                state: 'POSTED',
                name: orderName,
                postedAt: new Date()
            }, { merge: true })
            response.json({ actionsRequired: false })
            return
        }else if(renderedOrder.paymentMethod === 'paypal'){
            const client = await paypal.getClient(restaurantUuid)
            const createRequest = new OrdersCreateRequest()
            createRequest.requestBody({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: "EUR",
                            value: parseInt(renderedOrder.orderPrice) / 100.0
                        }
                    }
                ],
                application_context: {
                    brand_name: restaurant.generalTitle || 'Delivery Boosting',
                    landing_page: 'BILLING',
                    shipping_preference: 'NO_SHIPPING',
                    user_action: 'PAY_NOW',
                    return_url: `https://delivery-boosting-2021-model.web.app/paypal-return?restaurant=${encodeURIComponent(restaurant.uuid)}&order=${encodeURIComponent(order.uuid)}`,          
                    cancel_url: `https://delivery-boosting-2021-model.web.app/cancel?restaurant==${encodeURIComponent(restaurant.uuid)}&restaurant=${encodeURIComponent(order.uuid)}`           
                }
            })
            const paypalResponse = await client.execute(createRequest)
            await restaurant._ref.collection('orders').doc(order.uuid).collection('_paypal').doc(paypalResponse.result.id).set({
                id: paypalResponse.result.id,
                status: paypalResponse.result.status
            }, { merge: true })
            response.json({ actionRequired: true, actionURL: paypalResponse.result.links.find(link => link.rel === 'approve').href })
            return
        }

        response.json({ price: renderedOrder.orderPrice })
    })
})
