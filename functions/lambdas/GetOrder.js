const functions = require('firebase-functions')
const admin = require("firebase-admin")
const cors = require('cors')({ origin: true })
const db = admin.firestore() 

exports.getOrder = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        // console.log(request.query)
        const order = await db.collection('restaurants').doc(request.query.restaurant).collection('orders').doc(request.query.order).get()
        if(order.exists){
            response.json(order.data())
        }else{
            response.json({})
        }
    })
})
