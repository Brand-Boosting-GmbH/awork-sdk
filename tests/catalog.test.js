import { Catalog } from '../src/model/Catalog'
import { Category } from '../src/model/Category'
import { Method } from '../src/model/Method'
import { Product } from '../src/model/Product'

const UUID = '2894823-234234-242342'
const PUBLISHEDAT = 'Fri Apr 09 2021 11:05:21 GMT+0200 (Mitteleuropäische Sommerzeit)'
const PAYMENTMETHODS = ['cash', 'stripe', 'paypal']
const METHODS = [{
        uuid: 'pick-up',
        title: 'Selbstabholung',
        price: {
            amount: 0,
            currency: 'EUR'
        }
    },
    {
        uuid: 'delivery',
        title: 'Lieferung',
        price: {
            amount: 290,
            currency: 'EUR'
        },
        selections: [{
            uuid: 'order-regions',
            title: 'Lieferregion',
            options: [{
                uuid: 'w98578934-3503495-345345',
                title: 'Albstadt-Ebingen',
                minOrderValue: 500,
            }]
        }]
    }
]
const PRODUCTS = [{
    uuid: '1243124-4234-23442',
    title: 'Pizza Salami',
    media: [{
        alt: 'Alt-Text',
        type: 'image/jpeg',
        url: 'test.jpg'
    }],
    properties: {
        vegan: false,
        vegetarian: true,
    },
    descripton: 'Leckere Pizza mit kunsprigem Rand. *Markdown* **Support**',
    sizes: [{
        uuid: '4656-353425423424-42424',
        title: 'kleine Pizza',
        price: [{
            method: 'pick-up',
            amount: 790,
            currency: 'EUR'
        }]
    }],
    selections: [{
        uuid: '235346-5346546546-645645',
        title: 'Randfüllung',
        options: [{
            uuid: '86057-56745634534-33454',
            title: 'Normal',
            price: [{
                method: 'pick-up',
                amount: 0,
                currency: 'EUR'
            }]
        }]
    }],
    upgrades: [{
        uuid: '45745-53453453-35345',
        title: 'extra Knoblauch',
        properties: {
            vegan: false,
            vegetarian: true
        },
        price: [{
            method: 'pick-up',
            amount: 100,
            currency: 'EUR'
        }]
    }],
    additives: ['uuid1', 'uuid2']
}]
const CATEGORIES = [{
    uuid: '2374639-1324923849-345603495',
    title: 'Pizzen',
    availability: {
        state: 'ONLINE', // 'ONLINE', 'OFFLINE' or 'TIMED'
        stateTimeFrame: { // only if state == 'TIMED'
            from: 'Fri Apr 09 2021 14:05:21 GMT+0200 (Mitteleuropäische Sommerzeit)',
            to: 'Fri Apr 09 2021 17:05:21 GMT+0200 (Mitteleuropäische Sommerzeit)'
        },
        available: 'ALWAYS', // 'ALWAYS', 'NEVER', 'TIMED'
        availabilityTimeRules: {
            cycle: 'weekly', // 'weekly', 'monthly',
            availableOn: [1, 2, 4], // for weekly getDay(), for monthly getDate()
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    },
    media: [{
        uuid: '8924358342-235u349534-45609460464',
        alt: 'xxxx',
        type: 'image/jpeg',
        url: 'test.jpg'
    }],
    products: ['uuid1', 'uuid2']
}]
import { DataBaseConnection } from '../src/controller/DataBaseConnection'
require("regenerator-runtime/runtime")
const BetterMockFirebase = require('./util/BetterMockFirebase')
const mockDatabaseData = {
    __collection__: {
        catalogs: {
            __doc__: {
                catalog1: {
                    uuid: UUID,
                    publishedAt: PUBLISHEDAT,
                    paymentMethods: PAYMENTMETHODS,
                    methods: METHODS,
                    products: PRODUCTS,
                    categories: CATEGORIES,
                }
            }
        }
    }
}

const firebase = new BetterMockFirebase(mockDatabaseData)

const firestore = firebase.firestore.bind(firebase)

//new test ->
test('get catalog from database', async() => {
    const db = firestore()
    const snap = await db.collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log(catalog)
    console.log(catalog._snap._data.uuid)
    expect(catalog._snap._data.uuid).toBe(UUID)
    expect(catalog._snap._data.publishedAt).toBe(PUBLISHEDAT)
    expect(catalog._snap._data.paymentMethods).toBe(PAYMENTMETHODS)
    expect(catalog._snap._data.methods).toBe(METHODS)
    expect(catalog._snap._data.products).toBe(PRODUCTS)
    expect(catalog._snap._data.categories).toBe(CATEGORIES)
})
test('check addMethod and add to database', async() => {
    const db = firestore()
    const snap = await db.collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)

    catalog.addMethod({
        uuid: 'testuuid',
        title: 'TestSelbstabholung',
        price: {
            amount: 100,
            currency: 'EUR'
        }
    })
    expect(catalog.toPlainObject().methods).toEqual([{
        uuid: 'pick-up',
        title: 'Selbstabholung',
        price: {
            amount: 0,
            currency: 'EUR'
        }
    }, {
        uuid: 'delivery',
        title: 'Lieferung',
        price: { amount: 290, currency: 'EUR' },
        selections: [{
            uuid: 'order-regions',
            title: 'Lieferregion',
            options: [{
                uuid: 'w98578934-3503495-345345',
                title: 'Albstadt-Ebingen',
                minOrderValue: 500,
            }]
        }]
    }, {
        uuid: 'testuuid',
        title: 'TestSelbstabholung',
        price: {
            amount: 100,
            currency: 'EUR'
        },
        selections: []
    }])
})
test('check removeMethod and remove from database', async() => {
    const db = firestore()
    const snap = await db.collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log(catalog._snap._data.methods)
    catalog.removeMethod('testuuid')
    console.log(catalog._snap._data.methods)
    expect(catalog._snap._data.methods).toEqual([{
        uuid: 'pick-up',
        title: 'Selbstabholung',
        price: {
            amount: 0,
            currency: 'EUR'
        }
    }, {
        uuid: 'delivery',
        title: 'Lieferung',
        price: { amount: 290, currency: 'EUR' },
        selections: [{
            uuid: 'order-regions',
            title: 'Lieferregion',
            options: [{
                uuid: 'w98578934-3503495-345345',
                title: 'Albstadt-Ebingen',
                minOrderValue: 500,
            }]
        }]
    }])
})

test('check getMethodbyUuid from database', async() => {
    const db = firestore()
    const snap = await db.collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log(catalog._snap._data.methods)
    console.log(catalog.getMethodByUuid('pick-up'))
    expect(catalog.getMethodByUuid('pick-up').toPlainObject()).toEqual({
        uuid: 'pick-up',
        title: 'Selbstabholung',
        price: {
            amount: 0,
            currency: 'EUR'
        },
        selections: []
    })
})
test('check removeProduct and add to database', async() => {
    const db = firestore()
    const snap = await db.collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    catalog.removeProduct('1243124-4234-23442')
    expect(catalog.toPlainObject().products).toEqual(
        []
    )

})