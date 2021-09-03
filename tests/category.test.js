import { Availability } from '../src/model/Availability'
import { Category } from '../src/model/Category'
import { Media } from '../src/model/Media'

const UUID = 'pick-up'
const TITLE = 'Selbstabholung'
const AVAILABILITY = {
    state: 'ONLINE', // 'ONLINE', 'OFFLINE' or 'TIMED'
    stateTimeFrame: { // only if state == 'TIMED'
        from: 'Thu Apr 08 2021 17:08:44 GMT+0200 (Mitteleuropäische Sommerzeit)',
        to: 'Thu Apr 08 2021 18:08:44 GMT+0200 (Mitteleuropäische Sommerzeit)'
    },
    available: 'ALWAYS', // 'ALWAYS', 'NEVER', 'TIMED'
    availabilityTimeRules: {
        cycle: 'weekly', // 'weekly', 'monthly',
        availableOn: [1, 2, 4], // for weekly getDay(), for monthly getDate()
        timeFrames: [
            { from: [12, 30], to: [15, 30] },
            { from: [18, 30], to: [21, 30] }
        ]
    }
}
const MEDIA = [{
    uuid: '61379412-902394-293042',
    alt: 'xxxx',
    type: 'image/jpeg',
    url: 'test.jpg'
}]
const PRODUCTS = ['uuid1', 'uuid2']
test('if data is empty', () => {
    const datacheck = new Category()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create method object and check values', () => {
    const category = new Category({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: PRODUCTS
    })
    expect(category.uuid).toBe(UUID)
    expect(category.title).toBe(TITLE)
    expect(category.availability).toEqual(new Availability(AVAILABILITY))
    expect(category.media).toEqual(MEDIA.map(d => new Media(d)))
    expect(category.products).toEqual(PRODUCTS)
})
test('create category object and check plain object', () => {
    const category = new Category({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: PRODUCTS
    })
    expect(category.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: PRODUCTS
    })
})
test('create category object and check addProduct object', () => {
    const category = new Category({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: PRODUCTS
    })
    const addprod = 'uuid5'
    category.addProduct(addprod)
    expect(category.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: ['uuid1', 'uuid2', 'uuid5']
    })
})
test('create category object and check REMOVEProduct object', () => {
    const category = new Category({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: ['uuid1', 'uuid2', 'uuid5']
    })
    const removeprod = 'uuid5'
    category.removeProduct(removeprod)
    console.log(category)
    expect(category.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: ['uuid1', 'uuid2']
    })
})

test('create category object and check addmedia', () => {
    const category = new Category({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: MEDIA,
        products: PRODUCTS
    })
    const newmedia = {
        uuid: '3u49534-3453454-34535',
        alt: 'OLLDLD-Text',
        type: 'imageimage/jpeg',
        url: 'testtest.jpg'
    }
    category.addMedia(newmedia)
    expect(category.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: [{
                uuid: '61379412-902394-293042',
                alt: 'xxxx',
                type: 'image/jpeg',
                url: 'test.jpg'
            },
            {
                uuid: '3u49534-3453454-34535',
                alt: 'OLLDLD-Text',
                type: 'imageimage/jpeg',
                url: 'testtest.jpg'
            }
        ],
        products: PRODUCTS
    })
})

test('create category object and check removemedia', () => {
    const category = new Category({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: [{
            uuid: '3u49534-3453454-34535',
            alt: 'OLLDLD-Text',
            type: 'imageimage/jpeg',
            url: 'testtest.jpg',
        }, {
            uuid: '61379412-902394-293042',
            alt: 'xxxx',
            type: 'image/jpeg',
            url: 'test.jpg'
        }],
        products: PRODUCTS
    })
    category.removeMedia('3u49534-3453454-34535') //why do u work without parameter
    console.log(category.media)
    expect(category.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        availability: AVAILABILITY,
        media: [{
            uuid: '61379412-902394-293042',
            alt: 'xxxx',
            type: 'image/jpeg',
            url: 'test.jpg'
        }],
        products: PRODUCTS
    })
})