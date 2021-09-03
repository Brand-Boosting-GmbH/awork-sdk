import { v4 } from "uuid"
import { LineItem } from "../src/model/LineItem"
import { Order } from "../src/model/Order"
import { Shipping } from "../src/model/Shipping"

const Check = new Order({
    uuid: 'b390051b-6e57-415e-a1af-e0bb5b9c0fcd',
    createdAt: 'Thu Apr 29 2021 10:40:14 GMT+0200 (Mitteleuropäische Sommerzeit)',
    method: { method: 'delivery' },
    lineItems: [{
        uuid: '4c8866b8-a0af-4b45-b5c5-123b91e3c357',
        quantity: 1,
        product: '3c376b80-3db4-4b63-99e1-82321719582f',
        size: '8e651706-f967-41ca-8d0f-ddf1c5cf191d',
        selections: {},
        upgrades: []
    },
    {
        uuid: '8d344c23-ff1a-4b3d-b9a3-00b2386ffbd0',
        quantity: 1,
        product: '84247482-9621-4ad6-9081-c02775fdd362',
        size: 'small',
        selections: {
            beilagen: 'f2934ht8j4f',
            '4965d4c4-7d12-480c-8a4d-e6d5d1bbeca9': 'caf10987-ca4a-4d97-b112-7a36aabad445',
            '89j2394rf-f2r42wc4': '9384fjcaois',
            '0c67a2c7-dc1b-49ce-88ea-c8d0871d7817': '6a96d329-d259-4dbc-b592-787d42baa947',
            '7562bdb9-865f-4c8d-8d69-ccc9b34b4a7d': '95a4fb7c-45db-4f82-affa-0a57e3a4a361',
            'cb0ebe05-1bdf-4d86-ae60-efd1b9a9738f': 'aa515491-5c85-4df6-8360-0c107303a51f',
            'ed227cb5-d224-4bc6-816c-51da2d180663': 'afb93658-68c6-4489-8297-91f57ae18c3c',
            '54dd5f3d-aebc-4ed0-8912-5efa986652a3': '256b9bbe-32e5-4b19-b8ea-22581e721b51',
            '578825c1-28cc-43b1-b389-6b44dfe767bd': 'ec139a6d-3d53-4f38-87b9-5d197c7fac57',
            '0500a82e-2b0e-4f23-9455-b2a8e04a7d6b': 'bb40001e-8b6e-41bd-86ae-04e4fae4c67a'
        },
        upgrades: []
    }]
})
//UNCOMPLETE ask kevin?
const UUID = '834905689034hn-sdojfbh'
const SHOP = 'shop_uuid'
const QUANTITY = 3
const PRODUUID = 'naosngfoad'
const PRODUUID2 = 'naosngfoadqergdasfgdfsg'
const CATALOG = 'catalogue_uuid'
const CREATEDAT = new Date()
const PAYMENTMETHODS = 'stripe'
const DISCOUNT = {
    uuid: 'ahsiodghu',
    code: '',
    type: {
        amount: true,
        percentage: false
},
value: 400
}
const SHIPPING = {
    city: 'Albstadt',
    postalCode: '72458',
    street: 'Bahnhofstraße',
    streetNumber: '4',
    firstName: 'Kevin',
    name: 'Sieger',
    mail: 'test@mail.com',
    phoneNumber: '07156776521312',
    deliveryDate: 'Tue May 04 2021 10:57:44 GMT+0200 (Mitteleuropäische Sommerzeit)'
}
const METHOD = {
    method: 'method_uuid',
    selections: {
        'order-regions': 'option_uuid'
    }
}
const LINEITEMS = [{
    product: 'product_uuid',
    size: 'size_uuid',
    selections: {
        'selection_uuid': 'option_uid',
        'selection_uuid2': 'option_uid2'
    },
    upgrades: ['upgrade_uuid']
}]
test('if data is empty', () => {
    const datacheck = new Order()
    console.log(datacheck)
    expect(datacheck.shop).toEqual()
    console.log(Check)
})

test('create order object and check values and check v4-generator', () => {
    const order = new Order({
        uuid: UUID,
        shop: SHOP,
        catalog: CATALOG,
        createdAt: CREATEDAT,
        paymentMethods: PAYMENTMETHODS,
        method: METHOD,
        shipping: SHIPPING,
        lineItems: LINEITEMS
    })
    expect(order.uuid).toBe(UUID)
    expect(order.shop).toBe(SHOP)
    expect(order.catalog).toBe(CATALOG)
    expect(order.createdAt).toBe(CREATEDAT)
    expect(order.paymentMethods).toBe(PAYMENTMETHODS)
    expect(order.method).toEqual(METHOD)
    expect(order.shipping).toEqual(new Shipping(SHIPPING))
    expect(order.lineItems).toEqual(LINEITEMS.map(d => new LineItem(d)))
})
test('create order object and check values and check toPlainObject method', () => {
    const order = new Order({
        uuid: UUID,
        shop: SHOP,
        catalog: CATALOG,
        createdAt: CREATEDAT,
        shipping: SHIPPING,
        discount: DISCOUNT,
        paymentMethods: PAYMENTMETHODS,
        method: METHOD,
        lineItems: LINEITEMS
    })
    console.log(order.toPlainObject())
    expect(order.toPlainObject()).toEqual({
        uuid: '834905689034hn-sdojfbh',
        shop: 'shop_uuid',
        catalog: 'catalogue_uuid',
        paymentMethods: 'stripe',
        method: {
          method: 'method_uuid',
          selections: { 'order-regions': 'option_uuid' }
        },
        discount: {
            uuid: 'ahsiodghu',
            code: '',
            type: {
                amount: true,
                percentage: false
        },
        value: 400
        },
        shipping: {
            city: 'Albstadt',
            postalCode: '72458',
            street: 'Bahnhofstraße',
            streetNumber: '4',
            firstName: 'Kevin',
            name: 'Sieger',
            mail: 'test@mail.com',
            phoneNumber: '07156776521312',
            deliveryDate: 'Tue May 04 2021 10:57:44 GMT+0200 (Mitteleuropäische Sommerzeit)'
        },
        lineItems: [{
            product: 'product_uuid',
            size: 'size_uuid',
            selections: {
                'selection_uuid': 'option_uid',
                'selection_uuid2': 'option_uid2'
            },
            upgrades: ['upgrade_uuid']
        }]
      })
})
test('create order object and check values and check addLineItem', () => {
    const order = new Order({
        uuid: UUID,
        shop: SHOP,
        catalog: CATALOG,
        createdAt: CREATEDAT,
        paymentMethods: PAYMENTMETHODS,
        discount: DISCOUNT,
        shipping: SHIPPING,
        method: METHOD,
        lineItems: [{
            product: 'product_uuid',
            uuid: 'abc',
            quantity: QUANTITY,
            size: 'size_uuid',
            selections: {
                'selection_uuid': 'option_uid',
                'selection_uuid2': 'option_uid2'
            },
            upgrades: ['upgrade_uuid']
        }]
    })
    order.addLineItem({
        product: 'totest',
        quantity: QUANTITY,
        uuid: 'cba',
        size: 'testsizeuuid',
        selections: {
            'testselection1': 'testoptionuuid1',
            'testselection2': 'testoptionuuid2'
        },
        upgrades: ['testupgrade_uuid']
    })
    console.log(order._data.lineItems)
    expect(order.toPlainObject()).toEqual({
        uuid: '834905689034hn-sdojfbh',
        shop: 'shop_uuid',
        catalog: 'catalogue_uuid',
        paymentMethods: 'stripe',
        discount: DISCOUNT,
        shipping: SHIPPING,
        method: {
          method: 'method_uuid',
          selections: { 'order-regions': 'option_uuid' }
        },
        lineItems: [{
                product: 'product_uuid',
                uuid: 'abc',
                quantity: QUANTITY,
                size: 'size_uuid',
                selections: {
                    'selection_uuid': 'option_uid',
                    'selection_uuid2': 'option_uid2'
                },
                upgrades: ['upgrade_uuid']
            },
            {
                product: 'totest',
                uuid: 'cba',
                size: 'testsizeuuid',
                quantity: QUANTITY,
                selections: {
                    'testselection1': 'testoptionuuid1',
                    'testselection2': 'testoptionuuid2'
                },
                upgrades: ['testupgrade_uuid']
            }
        ]
    })
})