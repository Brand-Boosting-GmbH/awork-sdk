const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const nodemailer = require("nodemailer")
const admin = require("firebase-admin")
const { DataBaseConnection, RenderedMail } = require('delivery-boosting-2021-model')
const dbc = new DataBaseConnection(admin.firestore)

let transporter = nodemailer.createTransport({
    host: 'w0198602.kasserver.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'info@delivery-boosting.de', // generated ethereal user
        pass: 'G688xTmY59psLgKn', // generated ethereal password
    },
})

exports.sendMail = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const data = request.body
        const restaurant = await dbc.getRestaurant(data.restaurant)
        const renderedOrder = await restaurant.getRenderedOrder(data.order)
        const mailTemplate = await restaurant.getMailTemplate(data.mailTemplate)
        const mail = new RenderedMail(mailTemplate, restaurant, renderedOrder)
        const res = await transporter.sendMail({
            from: '"🛵 Delivery Boosting" <info@delivery-boosting.de>', // sender address
            to: mail.reciver, // list of receivers
            subject: mail.title, // Subject line
            text: mail.markup, // plain text body
            html: mail.markup, // html body
        })
        response.json({ success: true })
    })
})
