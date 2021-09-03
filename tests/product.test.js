import { Media } from "../src/model/Media"
import { Product } from "../src/model/Product"
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
test('if data is empty', () => {
    const datacheck = new Product()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create product object and check values', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
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
            }],
            availability: {
                state: STATE,
                stateTimeFrame: STATETIMEFRAME,
                available: AVAILABLE,
                availabilityTimeRules: AVAILABILITYTIMERULES
            }
        }],
        additives: ADDITIVES,
        availability: AVAILABILITY
    })
    expect(product.uuid).toBe(UUID)
    expect(product.title).toBe(TITLE)
    expect(product.media).toEqual(MEDIA.map(d => new Media(d)))
    expect(product.properties).toEqual(PROPERTIES)
    expect(product.description).toBe(DESCRIPTION)
    expect(product.sizes).toEqual(SIZES.map(d => new Size(d)))
    expect(product.selections).toEqual(SELECTIONS.map(d => new ProductSelection(d)))
    expect(product.upgrades).toEqual(UPGRADES.map(d => new Upgrade(d).toPlainObject()))
    expect(product.additives).toEqual(ADDITIVES)
    expect(product.availability).toEqual(new Availability(AVAILABILITY))
})

test('create product object and check plain object', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        no: 1,
        additives: ADDITIVES,
        availability: AVAILABILITY
    })
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
        no: 1,
        upgrades: UPGRADES,
        additives: ADDITIVES,
        availability: AVAILABILITY
    })
})
test('create product object and check addMedia', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        no: 2,
        media: [{
            uuid: '238947923-293784923874',
            alt: 'Alt-Text',
            type: 'image/jpeg',
            url: 'test.jpg'
        }],
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    product.addMedia({
        uuid: '6798469267297484-4982384923',
        alt: 'Altalt-Text',
        type: 'imageimage/jpeg',
        url: 'testtest.jpg'
    })
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        availability: {},
        no: 2,
        media: [{
                uuid: '238947923-293784923874',
                alt: 'Alt-Text',
                type: 'image/jpeg',
                url: 'test.jpg'
            },
            {
                uuid: '6798469267297484-4982384923',
                alt: 'Altalt-Text',
                type: 'imageimage/jpeg',
                url: 'testtest.jpg'
            }
        ],
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
})
test('create product object and check removeMedia', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        no: 1,
        media: [{
                uuid: '238947923-293784923874',
                alt: 'Alt-Text',
                type: 'image/jpeg',
                url: 'test.jpg'
            },
            {
                uuid: '6798469267297484-4982384923',
                alt: 'Altalt-Text',
                type: 'imageimage/jpeg',
                url: 'testtest.jpg'
            }
        ],
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    product.removeMedia(
        '6798469267297484-4982384923'
    )
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        no: 1,
        availability: {},
        media: [{
            uuid: '238947923-293784923874',
            alt: 'Alt-Text',
            type: 'image/jpeg',
            url: 'test.jpg'
        }],
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
})
test('create product object and check addSize', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: [{
            uuid: '4656-353425423424-42424',
            title: 'kleine Pizza',
            price: [{
                method: 'pick-up',
                amount: 790,
                currency: 'EUR'
            }]
        }],
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    product.addSize({
        uuid: '99898972394-79274932',
        title: 'große Pizza',
        price: [{
            method: 'pick-up',
            amount: 1000,
            currency: 'EUR'
        }]
    })
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: [{
                uuid: '4656-353425423424-42424',
                title: 'kleine Pizza',
                price: [{
                    method: 'pick-up',
                    amount: 790,
                    currency: 'EUR'
                }]
            },
            {
                uuid: '99898972394-79274932',
                title: 'große Pizza',
                price: [{
                    method: 'pick-up',
                    amount: 1000,
                    currency: 'EUR'
                }]
            }
        ],
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
})
test('create product object and check removeSize', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: [{
                uuid: '4656-353425423424-42424',
                title: 'kleine Pizza',
                price: [{
                    method: 'pick-up',
                    amount: 790,
                    currency: 'EUR'
                }]
            },
            {
                uuid: '99898972394-79274932',
                title: 'große Pizza',
                price: [{
                    method: 'pick-up',
                    amount: 1000,
                    currency: 'EUR'
                }]
            }
        ],
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    product.removeSize(
        '99898972394-79274932'
    )
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        properties: PROPERTIES,
        no: 1,
        availability: {},
        description: DESCRIPTION,
        sizes: [{
            uuid: '4656-353425423424-42424',
            title: 'kleine Pizza',
            price: [{
                method: 'pick-up',
                amount: 790,
                currency: 'EUR'
            }]
        }],
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
})

test('create product object and check getSizebyUuid', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: [{
                uuid: '4656-353425423424-42424',
                title: 'kleine Pizza',
                price: [{
                    method: 'pick-up',
                    amount: 790,
                    currency: 'EUR'
                }]
            },
            {
                uuid: '99898972394-79274932',
                title: 'große Pizza',
                price: [{
                    method: 'pick-up',
                    amount: 1000,
                    currency: 'EUR'
                }]
            }
        ],
        selections: SELECTIONS,
        upgrades: UPGRADES,
        additives: ADDITIVES
    })

    expect(product.getSizeByUuid('99898972394-79274932').toPlainObject()).toEqual({
        uuid: '99898972394-79274932',
        title: 'große Pizza',
        price: [{
            method: 'pick-up',
            amount: 1000,
            currency: 'EUR'
        }]
    })
})
test('create product object and check addSelection', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
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
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    product.addSelection({
        uuid: '908098-823942-9898gjsj',
        title: 'Ohne Käse',
        options: [{
            uuid: '988797356-345345-346534',
            title: 'Unnormal',
            price: [{
                method: 'pick-down',
                amount: 500,
                currency: 'EUR'
            }]
        }]
    })
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
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
            },
            {
                uuid: '908098-823942-9898gjsj',
                title: 'Ohne Käse',
                options: [{
                    uuid: '988797356-345345-346534',
                    title: 'Unnormal',
                    price: [{
                        method: 'pick-down',
                        amount: 500,
                        currency: 'EUR'
                    }]
                }]
            }
        ],
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
})
test('create product object and check removeSelection', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
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
        }, {
            uuid: '908098-823942-9898gjsj',
            title: 'Ohne Käse',
            options: [{
                uuid: '988797356-345345-346534',
                title: 'Unnormal',
                price: [{
                    method: 'pick-down',
                    amount: 500,
                    currency: 'EUR'
                }]
            }]
        }],
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    product.removeSelection('908098-823942-9898gjsj')
    expect(product.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        no: 1,
        availability: {},
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
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
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
})
test('create product object and check getSelectionbyUuid', () => {
    const product = new Product({
        uuid: UUID,
        title: TITLE,
        media: MEDIA,
        properties: PROPERTIES,
        description: DESCRIPTION,
        sizes: SIZES,
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
        }, {
            uuid: '908098-823942-9898gjsj',
            title: 'Ohne Käse',
            options: [{
                uuid: '988797356-345345-346534',
                title: 'Unnormal',
                price: [{
                    method: 'pick-down',
                    amount: 500,
                    currency: 'EUR'
                }]
            }]
        }],
        upgrades: UPGRADES,
        additives: ADDITIVES
    })
    expect(product.getSelectionByUuid('908098-823942-9898gjsj').toPlainObject()).toEqual({
        uuid: '908098-823942-9898gjsj',
        title: 'Ohne Käse',
        options: [{
            uuid: '988797356-345345-346534',
            title: 'Unnormal',
            price: [{
                method: 'pick-down',
                amount: 500,
                currency: 'EUR'
            }]
        }]
    })
})
