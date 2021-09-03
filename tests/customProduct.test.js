import { Media } from "../src/model/Media"
import { Product } from "../src/model/Product"
import { LineItem } from "../src/model/LineItem"
import { RenderedLineItem } from "../src/util/RenderedLineItem"
import { ProductSelection } from "../src/model/ProductSelection"
import { Size } from "../src/model/Size"
import { Upgrade } from "../src/model/Upgrade"
import { Availability } from "../src/model/Availability"

const STATE = 'TIMED'
const STATETIMEFRAME = {
    from: 'Fri Apr 09 2021 13:19:52 GMT+0200 (Mitteleuropäische Sommerzeit)',
    to: 'Fri Apr 09 2021 16:54:52 GMT+0200 (Mitteleuropäische Sommerzeit)'
}
const AVAILABLE = 'TIMED'
const AVAILABILITYTIMERULES = {
    cycle: 'weekly',
    availableOn: [1, 2, 4],
    timeFrames: [
        { from: [12, 30], to: [15, 30] },
        { from: [18, 30], to: [21, 30] }
    ]
}
const AVAILABILITY = {
    state: STATE,
    stateTimeFrame: STATETIMEFRAME,
    available: AVAILABLE,
    availabilityTimeRules: AVAILABILITYTIMERULES
}
const UUID = '1243124-4234-23442'
const TITLE = 'Pizza Salami'
const MEDIA = [{
    uuid: '238947923-293784923874',
    alt: 'Alt-Text',
    type: 'image/jpeg',
    url: 'test.jpg'
}]
const PROPERTIES = {
    vegan: false,
    vegetarian: true,
}
const DESCRIPTION = 'Leckere Pizza mit kunsprigem Rand. *Markdown* **Support**'
const SIZES = [{
    uuid: '4656-353425423424-42424',
    title: 'kleine Pizza',
    price: [{
        method: 'pick-up',
        amount: 790,
        currency: 'EUR'
    }]
}]
const SELECTIONS = [{
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
}]
const UPGRADES = [{
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
    }],
    availability: {
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: AVAILABILITYTIMERULES
    }
}]
const ADDITIVES = ['uuid1', 'uuid2']
test('Custom Product Price', () => {
    const customProduct = new Product({
        custom: true,
        properties: {
            myProperty: 2,
            priceCalculation: `
            ret(PRODUCT.properties.myProperty)
            `
        }
    })
    const lineItem = new LineItem({ product: customProduct.uuid})
    const renderedLineItem = new RenderedLineItem(lineItem, customProduct)
    console.log(renderedLineItem.price)
    expect(renderedLineItem.price).toEqual(2)
})
