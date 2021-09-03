import { Price } from '../src/model/Price'
const METHOD = 'the-method'
const AMOUNT = 100
const CURRENCY = 'EUR'

test('if data is empty', () => {
    const datacheck = new Price()
    console.log(datacheck)
    expect(datacheck.amount).toEqual()
})
test('create price object and check values', () => {
    const price = new Price({
        method: METHOD,
        amount: AMOUNT,
        currency: CURRENCY
    })
    expect(price.method).toBe(METHOD)
    expect(price.amount).toBe(AMOUNT)
    expect(price.currency).toBe(CURRENCY)
})

test('create price object and check plain object', () => {
    const price = new Price({
        method: METHOD,
        amount: AMOUNT,
        currency: CURRENCY
    })
    expect(price.toPlainObject()).toEqual({
        method: METHOD,
        amount: AMOUNT,
        currency: CURRENCY
    })
})