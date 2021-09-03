import { LineItem } from "../src/model/LineItem"

const UUID = 'sufhadsofafo9382r-fd'
const QUANTITY = 3
const PRODUCT = '456803-rth9rtu956iz-5g45t4f'
const SIZE = '521272394-995854'
const SELECTIONS = {
    '7798-28598254': '7982798423-829859',
    '9289034-84675': '384957934-32748324'
}
const UPGRADES = ['7989-2984892384932', '3249734905-9828349238']
test('if data is empty', () => {
    const datacheck = new LineItem()
    console.log(datacheck)
    expect(datacheck.size).toEqual()
})
test('create lineItem object and check values and check v4-generator', () => {
    const lineItem = new LineItem({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        uuid: UUID,
        quantity: QUANTITY
    })
    expect(lineItem.product).toBe(PRODUCT)
    expect(lineItem.size).toBe(SIZE)
    expect(lineItem.uuid).toBe(UUID)
    expect(lineItem.quantity).toBe(QUANTITY)
    expect(lineItem.selections).toEqual(SELECTIONS)
    expect(lineItem.upgrades).toEqual(UPGRADES)
})
test('create lineItem object and check values and check toPlainObject method', () => {
    const lineItem = new LineItem({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        uuid: UUID,
        quantity: QUANTITY
    })
    expect(lineItem.toPlainObject()).toEqual({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: UPGRADES,
        uuid: UUID,
        quantity: QUANTITY
    })
})
test('create lineItem object and check values and check addUpgrade', () => {
    const lineItem = new LineItem({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: ['7989-2984892384932', '3249734905-9828349238'],
        uuid: UUID,
        quantity: QUANTITY
    })
    lineItem.addUpgrade('abcds-isjfoisdh231')
    expect(lineItem.toPlainObject()).toEqual({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: ['7989-2984892384932', '3249734905-9828349238', 'abcds-isjfoisdh231'],
        uuid: UUID,
        quantity: QUANTITY
    })
})

test('create lineItem object and check values and check removeUpgrade', () => {
    const lineItem = new LineItem({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: ['7989-2984892384932', '3249734905-9828349238', 'abcds-isjfoisdh231'],
        uuid: UUID,
        quantity: QUANTITY
    })
    lineItem.removeUpgrade('abcds-isjfoisdh231')
    //console.log(lineItem.upgrades)
    expect(lineItem.toPlainObject()).toEqual({
        product: PRODUCT,
        size: SIZE,
        selections: SELECTIONS,
        upgrades: ['7989-2984892384932', '3249734905-9828349238'],
        uuid: UUID,
        quantity: QUANTITY
    })
})


test('create lineItem object and check values and check removeUpgrade', () => {
    const lineItem = new LineItem({
        product: 'sjadbalk',
        size: 'smalll',
        upgrades: ['sadf', 'asfag'],
        selections: {
            '9289034-84675': '384957934-32748324',
            '7798-28598254': '7982798423-829859',
            'sdaj': 'sadjn'
            
        },
        uuid: UUID,
        quantity: QUANTITY
    })
    expect(lineItem.equals(new LineItem({
        product: 'sjadbalk',
        size: 'smalll',
        upgrades: ['asfag', 'sadf'],
        selections: {
            '9289034-84675': '384957934-32748324',
            '7798-28598254': '7982798423-829859',
            'sdaj': 'sadjn'
            
        },
        uuid: UUID,
        quantity: QUANTITY
    })))
})