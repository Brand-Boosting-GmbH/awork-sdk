import { LineItem } from '../src/model/LineItem'
import { Method } from '../src/model/Method'
import { Catalog } from '../src/model/Catalog'
import { Product } from '../src/model/Product'
import { RenderedLineItem } from '../src/util/RenderedLineItem'

const PRODUCT = {
    uuid: '1243124-4234-23442',
    title: 'Pizza Salami',
    media: [{
        uuid: '238947923-293784923874',
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
        uuid: 'smalll',
        title: 'kleine Pizza',
        price: [{
            method: 'delivery',
            amount: 690,
            currency: 'EUR'
            },
            {
            method: 'pick-up',
            amount: 490,
            currency: 'EUR'
            }] 
        },
        { 
        uuid: 'biggg',
        title: 'große Pizza',
        price: [{
            method: 'pick-up',
            amount: 690,
            currency: 'EUR'
            },
            {
            method: 'delivery',
            amount: 890,
            currency: 'EUR'
            }
            ] 
        }],
    selections: [{
        uuid: '235346-5346546546-645645',
        title: 'Randfüllung',
        options: [{
            uuid: '86057-56745634534-33454',
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
            }]
        }]
    }],
    upgrades: ['45745-53453453-35345'],
    additives: ['uuid1', 'uuid2']
}

const Prod = new Product(PRODUCT)
const LINEITEM = {
    product: '1243124-4234-23442',
    size: 'smalll',
    selections: 
        {'235346-5346546546-645645': '86057-56745634534-33454'},
    upgrades: ['45745-53453453-35345']
}
const CATALOG = {
    uuid: '2894823-234234-242342',
    publishedAt: 'Fri Apr 09 2021 11:05:21 GMT+0200 (Mitteleuropäische Sommerzeit)',
    paymentMethods: ['cash', 'stripe', 'paypal'],
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
            amount: 250,
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
        }]
    }],
    products: [PRODUCT],
    categories: [{
        uuid: '2374639-1324923849-345603495',
        title: 'Pizzen',
        availability: {
            state: 'TIMED', // 'ONLINE', 'OFFLINE' or 'TIMED'
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
        products: ['1243124-4234-23442', 'snjdnakdnl']
    }]
}
const CAT = new Catalog(CATALOG)
const Line = new LineItem(LINEITEM)
const METHOD = {
        method: 'delivery',
        selections: {
            'order-regions': 'albi',
            'halli': 'hihi'
    }
}
test('create RenderedLineitem object and test getters', () => {
    const renderedLineItem = new RenderedLineItem(Line, Prod, METHOD, CAT)
    console.log(renderedLineItem)
    })