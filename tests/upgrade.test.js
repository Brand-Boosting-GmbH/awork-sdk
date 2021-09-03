import { Price } from '../src/model/Price'
import { Upgrade } from '../src/model/Upgrade'
const UUID = '3475-92703-48502'
const TITLE = 'Extra Käse'
const PROPERTIES = { vegan: false, vegetarian: true }
const PRICE = [{ method: 'pick-up', amount: 100, currency: 'EUR' }]

test('if data is empty', () => {
    const datacheck = new Upgrade()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create upgrade object and check values', () => {
    const upgrade = new Upgrade({
        uuid: UUID,
        title: TITLE,
        properties: PROPERTIES,
        price: PRICE
    })
    expect(upgrade.uuid).toBe(UUID)
    expect(upgrade.title).toBe(TITLE)
    expect(upgrade.properties).toEqual(PROPERTIES)
    expect(upgrade.price).toEqual([new Price({ method: 'pick-up', amount: 100, currency: 'EUR' })])
})

test('create upgrade object and check plain object', () => {
    const upgrade = new Upgrade({
        uuid: UUID,
        title: TITLE,
        properties: PROPERTIES,
        price: PRICE,
        availability: {}
    })
    expect(upgrade.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        properties: PROPERTIES,
        price: PRICE,
        availability: {}
    })
})