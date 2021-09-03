import { Price } from '../src/model/Price'
import { Size } from '../src/model/Size'

const UUID = '77f966d5-22f8-4502-bc71-e60a6e2fe1bf'
const TITLE = 'groß'
const PRICE = [{
    method: 'pick-up',
    amount: 100,
    currency: 'EUR'
}]
test('if data is empty', () => {
    const datacheck = new Size()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create size object and check values and check v4-generator', () => {
    const size = new Size({
        title: TITLE,
        price: PRICE
    })
    console.log('uuid', size.uuid)
    expect(size.title).toBe(TITLE)
    expect(size.price).toEqual(PRICE.map(d => new Price(d)))
})

test('create size object and check toPlainObject', () => {
    const size = new Size({
        uuid: UUID,
        title: TITLE,
        price: PRICE
    })
    expect(size.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        price: PRICE
    })
})

test('create size object and check removePrice()', () => {
    const size = new Size({
        uuid: UUID,
        title: TITLE,
        price: PRICE
    })
    size.removePrice('pick-up')
    expect(size.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        price: []
    })
})

test('create size object and check getPriceByMethod()', () => {
    const size = new Size({
        uuid: UUID,
        title: TITLE,
        price: [{
            method: 'pick-up',
            amount: 100,
            currency: 'EUR'
        }]
    })
    expect(size.getPriceByMethod('pick-up')).toEqual({
        method: 'pick-up',
        amount: 100,
        currency: 'EUR'
    })
})

test('create size object and check addPrice()', () => {
    const size = new Size({
        uuid: UUID,
        title: TITLE,
        price: [{
            method: 'pick-up',
            amount: 100,
            currency: 'EUR'
        }]
    })
    size.addPrice({
        method: 'delivery',
        amount: 300,
        currency: 'EUR'
    })
    expect(size.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        price: [{
                method: 'pick-up',
                amount: 100,
                currency: 'EUR'
            },
            {
                method: 'delivery',
                amount: 300,
                currency: 'EUR'
            }
        ]
    })
})