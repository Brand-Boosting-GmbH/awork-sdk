const admin = require("firebase-admin")
const db = admin.firestore() 
const paypal = require('@paypal/checkout-server-sdk')

exports.getClient = async (restaurantUuid) => {
    const snapshot = await db.collection('restaurants').doc(restaurantUuid).collection('data').doc('paypal').get()

    if (snapshot.exists){
        const { live, clientId, clientSecret } = snapshot.data()
        console.log({ live, clientId, clientSecret })
        let environment = live ? new paypal.core.LiveEnvironment(clientId, clientSecret) : new paypal.core.SandboxEnvironment(clientId, clientSecret)
        return new paypal.core.PayPalHttpClient(environment)
    }

    throw new Error('PAYPAL_NOT_AVAILABLE')
}