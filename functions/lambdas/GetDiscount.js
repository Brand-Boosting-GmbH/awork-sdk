const functions = require('firebase-functions')
const admin = require("firebase-admin")
const cors = require('cors')({ origin: true })
const db = admin.firestore() 

exports.getDiscount = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        console.log(request.query)
        const discount = await db.collection('restaurants').doc(request.query.restaurant).collection('discount').where("code", "==", request.query.code).limit(1).get()
        console.log(discount.docs[0])
        if(!discount.empty){
            response.json(discount.docs[0].data())
        }else{
            response.json({})
        }
    })
})
