import { DataBaseConnection } from '../src/controller/DataBaseConnection'
import { Catalog } from '../src/model/Catalog'
import { Restaurant } from '../src/model/Restaurant'
require("regenerator-runtime/runtime")
const BetterMockFirebase = require('./util/BetterMockFirebase')
const RESTAURANT1_TITLE = 'Toller Imbiss'
    //Create all testobjects and check functions
    //copied data-model for testing purpose ->
const PRODUCT = {
    uuid: '78923749-293840234',
    title: 'Pizza Salami',
    media: [{
        uuid: '37485934-389495384',
        alt: 'Alt-Text',
        type: 'image/jpeg',
        url: 'test.jpg'
    }],
    properties: {
        vegan: false,
        vegetarian: true,
    },
    description: 'Leckere Pizza mit kunsprigem Rand. *Markdown* **Support**',
    sizes: [{
            uuid: 'small',
            title: 'kleine Pizza',
            price: [{
                    method: 'pick-up',
                    amount: 790,
                    currency: 'EUR'
                },
                {
                    method: 'delivery',
                    amount: 820,
                    currency: 'EUR'
                }
            ]
        },
        {
            uuid: 'big',
            title: 'große Pizza',
            price: [{
                    method: 'pick-up',
                    amount: 890,
                    currency: 'EUR'
                },
                {
                    method: 'delivery',
                    amount: 920,
                    currency: 'EUR'
                }
            ]
        }
    ],
    selections: [{
        uuid: '738490234ß923mgj8g-34fwa',
        title: 'Randfüllung',
        options: [{
                uuid: '74680720538664586390-98324jf',
                title: 'Normal',
                price: [{
                        method: 'pick-up',
                        amount: 0,
                        currency: 'EUR'
                    },
                    {
                        method: 'delivery',
                        amount: 0,
                        currency: 'EUR'
                    }
                ]
            },
            {
                uuid: '83975893erhf9-weratse48t',
                title: 'Käse',
                price: [{
                        method: 'pick-up',
                        amount: 200,
                        currency: 'EUR'
                    },
                    {
                        method: 'delivery',
                        amount: 210,
                        currency: 'EUR'
                    }
                ]
            },
        ]
    }],
    upgrades: [{
            uuid: 'anihgi4389539fwes-wef34fcwe',
            title: 'extra Knoblauch',
            properties: {
                vegan: false,
                vegetarian: true
            },
            price: [{
                    method: 'pick-up',
                    amount: 100,
                    currency: 'EUR'
                },
                {
                    method: 'delivery',
                    amount: 100,
                    currency: 'EUR'
                }
            ]
        },
        {
            uuid: 'ishergi89f-3faw3wrw',
            title: 'ohne Käse',
            properties: {
                vegan: false,
                vegetarian: true
            },
            price: [{
                    method: 'pick-up',
                    amount: -200,
                    currency: 'EUR'
                },
                {
                    method: 'delivery',
                    amount: -200,
                    currency: 'EUR'
                }
            ]
        }
    ],
    addidtives: ['uuid1', 'uuid2']
}


const CATALOG = {
    uuid: 'catalog1',
    publishedAt: new Date(),
    paymentMethods: ['cash', 'stripe', 'paypal'],
    upgrades: [],
    additives: [],
    methods: [{
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
                    uuid: 'f3894f93-3g535wbe6z43r',
                    title: 'Albstadt-Ebingen',
                    minOrderValue: 500,
                }]
            }]
        }
    ],
    products: [
        PRODUCT
    ],
    categories: [{
        uuid: 'w8934gjwfqv5-z3gfz5td1r3s4',
        title: 'Pizzen',
        availability: {
            state: 'ONLINE', // 'ONLINE', 'OFFLINE' or 'TIMED'
            stateTimeFrame: { // only if state == 'TIMED'
                from: new Date(),
                to: new Date()
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
            uuid: 'jq83ndt69453z-g5f39dwjtsr43',
            alt: 'xxxx',
            type: 'image/jpeg',
            url: 'test.jpg'
        }],
        products: ['uuid1', 'uuid2']
    }]
}
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
}, ]
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
const ORDER = {
    uuid: 'qnojeurgniwrugoir-45d3tw43sqeaw',
    shop: 'shop_uuid',
    catalog: 'catalogue_uuid',
    createdAt: new Date(),
    paymentMethods: 'stripe',
    method: {
        method: 'method_uuid',
        selections: {
            'order-regions': 'option_uuid'
        }
    },
    lineItems: [{
        product: 'product_uuid',
        size: 'size_uuid',
        selections: {
            'selection_uuid': 'option_uid',
            'selection_uuid2': 'option_uid'
        },
        upgrades: ['upgrade_uuid']
    }]
}

const PAYMENT = {
    uuid: 'gwjoer9nagt-324td34rsq',
    method: 'stripe',
    status: 'paid' // 'open', 'failed'
}

const RESTAURANT = {
    uuid: 'vwu9gw4-gw4f5gd4ttsr4q3are3',
    general: {
        title: 'Pizza Express Albstadt',
        description: 'lorem ipsum blabla...',
        media: [{ //logo
            uuid: '42739r89j3fd-q9847ctwns',
            alt: 'xxxx',
            type: 'image/jpeg',
            url: 'test.jpg'
        }]
    },
    header: {
        title: 'test',
        description: 'lorem ipsum',
        media: [{ //bckgrnd-img
            uuid: 'amnuer973qd8t3-rq34dts4r34r',
            alt: 'xxxx',
            type: 'image/jpeg',
            url: 'test.jpg'
        }]
    },
    locations: [{
        uuid: '984wtfdot-wt54dt5trsadsfghjkhgd',
        general: {
            status: 'open', //'open' or 'closed'
            title: 'test',
            city: 'Albstadt',
            zip: '70835',
            street: 'Sonnenstraße',
            streetnum: '12',
            minOrderValue: 2400
        },
        openingHours: [{
            day: new Date().getDay(),
            from: [12, 30],
            to: [13, 30]
        }]

    }]
}

//Mocked Database data
const mockDatabaseData = {
    __collection__: {
        restaurants: {
            __doc__: {
                restaurant1: {
                    general: {
                        title: RESTAURANT1_TITLE,
                    },
                    __collection__: {
                        catalogs: {
                            __doc__: {
                                catalog1: CATALOG
                            }
                        },
                        orders: {
                            __doc__: {
                                order1: ORDER
                            }
                        }
                    }
                }
            }
        }
    }
}
const mockDatabaseData2 = {
    __collection__: {
        restaurants: {
            __doc__: {
                restaurant1: {
                    general: {
                        title: RESTAURANT1_TITLE,
                    },
                    __collection__: {
                        catalogs: {
                            __doc__: {

                            }
                        },
                        orders: {
                            __doc__: {
                                order1: ORDER
                            }
                        }
                    }
                }
            }
        }
    }
}

//Test-Functions
const firebase = new BetterMockFirebase(mockDatabaseData)
const firestore = firebase.firestore.bind(firebase)
new DataBaseConnection(firestore)
    //get restaurant1
    //erstelle catalog hinzufügen produkt / extra
test('get restaurant1 from database', async() => {
    const dbc = new DataBaseConnection(firestore)
    const restaurant1 = await dbc.getRestaurant('restaurant1')
    expect(restaurant1.generalTitle).toBe(RESTAURANT1_TITLE)
})
test('add new catalog to restaurant1 to database', async() => {
    const firebase = new BetterMockFirebase(mockDatabaseData2)
    const firestore = firebase.firestore.bind(firebase)
    const db = firestore()
    const snap = await db.collection('restaurants').doc('restaurant1').get()
    const restaurant = new Restaurant(snap)

    const testcatalog = await restaurant.getCatalog()

    console.log(testcatalog)
    testcatalog.publishedAt = PUBLISHEDAT
    testcatalog.paymentMethods = PAYMENTMETHODS
    testcatalog.addMethod(METHODS)
    testcatalog.addProduct(PRODUCTS)
    testcatalog.addCategory(CATEGORIES)
    testcatalog.commit()

    restaurant.commit()
    const testsnap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').get()
    console.log(testsnap._data)
})
test('get catalog from database', async() => {
    const db = firestore()
    const snap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log(snap)
    console.log(catalog.toPlainObject())
    console.log(CATALOG)
    expect(catalog.toPlainObject()).toEqual(CATALOG)

})
test('check commit after adding another object', async() => {
    const db = firestore()
    const snap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log(snap)

    console.log(snap)
    expect(catalog.toPlainObject()).toEqual(CATALOG)

})
test('check addProduct and add to database', async() => {
    const db = firestore()
    const snap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').doc('catalog1').get()

    const catalog = new Catalog(snap)
    console.log(snap.data().products)
    catalog.addProduct({
        uuid: 'snjdnakdnl',
        title: 'Pizza Thunfisch mit Zwiebeln',
        media: [{
            uuid: '238sdsf947923-293784fa923874',
            alt: 'Alt-Text',
            type: 'image/jpeg',
            url: 'test1.jpg'
        }],
        properties: {
            vegan: false,
            vegetarian: true,
        },
        description: 'Leckere Pizza mit kunsprigem Rand. *Markdown* **Support**',
        sizes: [{
                uuid: 'smalll',
                title: 'kleine Pizza',
                price: [{
                        method: 'delivery',
                        amount: 590,
                        currency: 'EUR'
                    },
                    {
                        method: 'pick-up',
                        amount: 390,
                        currency: 'EUR'
                    }
                ]
            },
            {
                uuid: 'biggg',
                title: 'große Pizza',
                price: [{
                        method: 'delivery',
                        amount: 790,
                        currency: 'EUR'
                    },
                    {
                        method: 'pick-up',
                        amount: 590,
                        currency: 'EUR'
                    }
                ]
            }
        ],
        selections: [{
            uuid: '235346-534652352546546-645645',
            title: 'Randfüllung',
            options: [{
                uuid: '86057-5674563626264534-33454',
                title: 'Normal',
                price: [{
                        method: 'pick-up',
                        amount: 100,
                        currency: 'EUR'
                    },
                    {
                        method: 'delivery',
                        amount: 240,
                        currency: 'EUR'
                    }
                ]
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
                },
                {
                    method: 'delivery',
                    amount: 220,
                    currency: 'EUR'
                }
            ]
        }],
        additives: ['uuid1', 'uuid2']
    })
    await catalog.commit()
    const testsnap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').get()
    console.log(testsnap._data[1]._data.products)
})

test('check addCategory and add to database', async() => {
    const db = firestore()
    const snap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log(snap.data().categories)
    catalog.addCategory({
        uuid: 'w89344646gjwfqv5-z3gfz5td1r3s4',
        title: 'Pasta',
        availability: {
            state: 'TIMED', // 'ONLINE', 'OFFLINE' or 'TIMED'
            stateTimeFrame: { // only if state == 'TIMED'
                from: new Date(),
                to: new Date()
            },
            available: 'ALWAYS', // 'ALWAYS', 'NEVER', 'TIMED'
            availabilityTimeRules: {
                cycle: 'weekly', // 'weekly', 'monthly',
                availableOn: [1, 2, 3, 4, 5], // for weekly getDay(), for monthly getDate()
                timeFrames: [
                    { from: [12, 30], to: [15, 30] },
                    { from: [18, 30], to: [21, 30] }
                ]
            }
        },
        media: [{
            uuid: 'jq83ndsdafadt69453z-g5f39dwjtsr43',
            alt: 'xxxx',
            type: 'image/jpeg',
            url: 'test.jpg'
        }],
        products: ['uuid1', 'uuid2']
    })
    catalog.commit()
    const testSnap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').get()
    console.log(testSnap._data[1]._data.categories)
})

test('check removeProduct and add to database', async() => {
    const db = firestore()
    const snap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').doc('catalog1').get()
    const catalog = new Catalog(snap)
    console.log('snap: ', snap.data())
    catalog.removeProduct('78923749-293840234')
    catalog.commit()
    const testSnap = await db.collection('restaurants').doc('restaurant1').collection('catalogs').get()
    console.log('testSnap: ',testSnap._data)
})