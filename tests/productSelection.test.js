import { ProductOption } from "../src/model/ProductOption"
import { ProductSelection } from "../src/model/ProductSelection"

const UUID = '23423-2411-6787532'
const TITLE = 'Randfüllung'
const OPTIONS = [{
    uuid: '235624-23624-w456324',
    title: 'Normal',
    price: [{
        method: 'pick-up',
        amount: 0,
        currency: 'EUR'
    }]
}]
test('if data is empty', () => {
    const datacheck = new ProductSelection()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create productSelection object and check values', () => {
    const productSelection = new ProductSelection({
        uuid: UUID,
        title: TITLE,
        options: OPTIONS
    })
    expect(productSelection.uuid).toBe(UUID)
    expect(productSelection.title).toBe(TITLE)
    expect(productSelection.options).toEqual(OPTIONS.map(d => new ProductOption(d)))
})
test('create method object and check plain object', () => {
    const productSelection = new ProductSelection({
        uuid: UUID,
        title: TITLE,
        options: OPTIONS
    })
    expect(productSelection.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        options: OPTIONS
    })
})