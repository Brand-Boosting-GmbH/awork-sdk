const functions = require('firebase-functions')
const admin = require("firebase-admin")
const cors = require('cors')({ origin: true })
const db = admin.firestore() 
const { DataBaseConnection } = require('delivery-boosting-2021-model')
const dbc = new DataBaseConnection(admin.firestore)



exports.createOrder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const order = request.body
        order.state = 'DRAFT'
        await db.collection('restaurants').doc(request.query.restaurant).collection('orders').doc(order.uuid).set(order)
        response.json({ order })
    })
})
