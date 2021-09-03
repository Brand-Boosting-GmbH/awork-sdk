const functions = require('firebase-functions')
const admin = require("firebase-admin")
const firebase = require("firebase")
const cors = require('cors')({ origin: true })
const db = admin.firestore() 
const appBucket = admin.storage().bucket('delivery-boosting-2021-apps')
const {NodeVM} = require('vm2')
const { DataBaseConnection, RenderedMail } = require('delivery-boosting-2021-model')
const dbc = new DataBaseConnection(admin.firestore)
require("firebase/auth")
require("firebase/firestore")
const firebaseConfig = {
    apiKey: 'AIzaSyCLCtzhT21PR_5NQMYhQv-jsstMrU7s-8Q',
    authDomain: 'delivery-boosting-2021.firebaseapp.com',
    projectId: 'delivery-boosting-2021',
    storageBucket: 'delivery-boosting-2021.appspot.com',
    // messagingSenderId: '464687358441',
    appId: '1:464687358441:web:e3c5ebcb9a4eebf7eaab78'
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()


exports.callLambda = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        
        const { restaurant: restaurantUuid, app: appPackage, lambda: lambdaName, context } = request.body

        const restaurant = await dbc.getRestaurant(restaurantUuid)
        const app = await restaurant.getApp(appPackage)
        const lambda = app.lambdas.find(l => l.name === lambdaName)

        const lambdaFile = await appBucket.file(`restaurants/${restaurant.uuid}/apps/${app.package}/lambdas/${lambda.filename}`).download()
        const lambdaCode = lambdaFile.toString()
        console.log(lambdaCode)

        await auth.signInAnonymously()
        const uid = auth.currentUser.uid
        await restaurant._ref.collection('admins').doc(uid).set({
            uid: uid,
            type: 'app',
            package: appPackage,
            createdAt: new Date()
        })

        const returnCall = async (success, data) => {
            await restaurant._ref.collection('admins').doc(uid).delete()
            response.json(
                {
                    success,
                    data: data || {}
                }
            )
        }

        const clientDBC = new DataBaseConnection(firebase.firestore)
        DataBaseConnection.firestore = firebase.firestore
        firebase.firestore().settings({
            ignoreUndefinedProperties: true
        })
        

        const vm = new NodeVM({
            console: 'inherit',
            sandbox: {
                DB_API: {
                    restaurant: await clientDBC.getRestaurant(restaurant.uuid)
                },
                _return: (a) => returnCall(true, a),
                _fail: (a) => returnCall(false, a)
            },
            require: {
                external: false
            }
        })

        await vm.run(`
            ${lambdaCode}
            ;(async () => {
                try {
                    _return(await exports.default(${JSON.stringify(context)}));
                } catch (err) {
                    _fail(err.message);
                }
            })()
        `)
    })
})
