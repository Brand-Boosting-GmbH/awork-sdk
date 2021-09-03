import { Price } from "../src/model/Price"
import { ProductOption } from "../src/model/ProductOption"

const UUID = '72834-234532454-1412'
const TITLE = 'Normal'
const PRICE = [{
    method: 'pick-up',
    amount: 0,
    currency: 'EUR'
}]
test('if data is empty', () => {
    const datacheck = new ProductOption()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create productOption object and check values', () => {
    const productOption = new ProductOption({
        uuid: UUID,
        title: TITLE,
        price: PRICE
    })
    expect(productOption.uuid).toBe(UUID)
    expect(productOption.title).toBe(TITLE)
    expect(productOption.price).toEqual(PRICE.map(d => new Price(d)))
})
test('create method object and check plain object', () => {
    const productOption = new ProductOption({
        uuid: UUID,
        title: TITLE,
        price: PRICE,
        properties: {}
    })
    expect(productOption.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        price: PRICE,
        properties: {}
    })
})