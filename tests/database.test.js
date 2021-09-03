import { DataBaseConnection } from '../src/controller/DataBaseConnection'
require("regenerator-runtime/runtime")
const BetterMockFirebase = require('./util/BetterMockFirebase')
const RESTAURANT1_TITLE = 'Toller Imbiss'
const mockDatabaseData = {
    __collection__: {
        restaurants: {
            __doc__: {
                restaurant1: {
                    general: {
                        title: RESTAURANT1_TITLE,
                    },
                    __collection__: {
                        catalog: {
                            __doc__: {
                            }
                        }
                    }
                }
            }
        }
    }
}

const firebase = new BetterMockFirebase(mockDatabaseData)

const firestore = firebase.firestore.bind(firebase)

test('get restaurant from database', async () => {
    const dbc = new DataBaseConnection(firestore)
    const restaurant1 = await dbc.getRestaurant('restaurant1')
    expect(restaurant1.generalTitle).toBe(RESTAURANT1_TITLE)
})

test('throw error when not finding restaurant', async () => {
    expect(await (async () => {
        const dbc = new DataBaseConnection(firestore)
        await dbc.getRestaurant('restaurant2')
    })).rejects.toThrow()
})

test('throw error when restaurant already exists', async () => {
    expect(await (async () => {
        const dbc = new DataBaseConnection(firestore)
        await dbc.createRestaurant('restaurant1')
    })).rejects.toThrow()
})

test('create new restaurant and save to database', async () => {
    const dbc = new DataBaseConnection(firestore)
    const restaurant2 = await dbc.createRestaurant('restaurant2')
    restaurant2.generalTitle = 'Imbiss'
    await restaurant2.commit()
    expect((await dbc.getRestaurant('restaurant2')).generalTitle).toBe('Imbiss')
})