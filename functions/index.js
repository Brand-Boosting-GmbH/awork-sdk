const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require('./db_key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.createOrder = require('./lambdas/CreateOrder').createOrder
exports.getOrder = require('./lambdas/GetOrder').getOrder
exports.payOrder = require('./lambdas/PayOrder').payOrder
exports.paypalReturn = require('./lambdas/PaypalReturn').paypalReturn
exports.sendMail = require('./lambdas/SendMail').sendMail
exports.CSVOrders = require('./lambdas/CSVOrders').CSVOrders
exports.callLambda = require('./lambdas/CallLambda').callLambda
exports.getDiscount = require('./lambdas/GetDiscount').getDiscount
