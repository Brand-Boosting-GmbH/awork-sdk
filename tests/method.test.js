import { CatalogSelection } from '../src/model/CatalogSelection'
import { Method } from '../src/model/Method'
const UUID = 'pick-up'
const TITLE = 'Selbstabholung'
const PRICEAMOUNT = 333
const PRICECURRENCY = 'EUR'
const SELECTIONS = [{
    uuid: 'order-regions',
    title: 'Lieferregion',
    options: [{
        uuid: 'sndnaoidsnaoi',
        title: 'Albstadt-Ebingen',
        minOrderValue: 500,
        properties: {
            vegan: true,
            vegetarian: false
        }

    }]
}]
test('if data is empty', () => {
    const datacheck = new Method()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})

test('create method object and check values', () => {
    const method = new Method({
        uuid: UUID,
        title: TITLE,
        price: {
            amount: PRICEAMOUNT,
            currency: PRICECURRENCY
        },
        selections: SELECTIONS
    })
    expect(method.uuid).toBe(UUID)
    expect(method.title).toBe(TITLE)
    expect(method.priceAmount).toBe(PRICEAMOUNT)
    expect(method.priceCurrency).toBe(PRICECURRENCY)
    expect(method.selections).toEqual(SELECTIONS.map(d => new CatalogSelection(d)))
})
test('create method object and check plain object', () => {
    const method = new Method({
        uuid: UUID,
        title: TITLE,
        price: {
            amount: PRICEAMOUNT,
            currency: PRICECURRENCY
        },
        selections: SELECTIONS
    })
    expect(method.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        price: {
            amount: PRICEAMOUNT,
            currency: PRICECURRENCY
        },
        selections: SELECTIONS
    })
})