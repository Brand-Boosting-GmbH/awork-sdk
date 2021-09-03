import { Location } from '../src/model/Location'
import { Media } from '../src/model/Media'

const UUID = 'SDAUDBUKASDBKBDSJK'
const GENERALSTATUS = 'open'
const GENERALTITLE = 'test'
const GENRALCITY = 'Albstadt'
const GENERALZIP = '72458'
const GENERALSTREET = 'Sonnenstraße'
const GENERALSTREETNUM = '93'
const MINORDERVALUE = 2400
const MEDIA = [{
    uuid: '61379412-902394-293042',
    alt: 'xxxx',
    type: 'image/jpeg',
    url: 'test.jpg'
}]

const GENERAL = {
    status: GENERALSTATUS,
    title: GENERALTITLE,
    city: GENRALCITY,
    zip: GENERALZIP,
    street: GENERALSTREET,
    streetnum: GENERALSTREETNUM,
    minOrderValue: MINORDERVALUE
}

const OPENINGHOURS = [{
    day: new Date().getDay(),
    from: [12, 30],
    to: [13, 30]
}]
test('if data is empty', () => {
    const location = new Location()
    console.log(location)
    expect(location.general).toEqual({})
})
test('create location object and check values', () => {
    const location = new Location({
        uuid: UUID,
        general: GENERAL,
        openingHours: OPENINGHOURS,
        media: MEDIA
    })
    expect(location.general).toBe(GENERAL)
    expect(location.openingHours).toBe(OPENINGHOURS)
    console.log(location.openingHours)
})

test('create location object and check toPlainObject', () => {
    const location = new Location({
        uuid: UUID,
        general: GENERAL,
        openingHours: OPENINGHOURS,
        media: []
        
    })
    expect(JSON.stringify(location)).toMatchObject(JSON.stringify({
        uuid: UUID,
        general: {
            status: GENERALSTATUS,
            title: GENERALTITLE,
            city: GENRALCITY,
            zip: GENERALZIP,
            street: GENERALSTREET,
            streetnum: GENERALSTREETNUM,
            minOrderValue: MINORDERVALUE
        },
        media: [],
        openingHours: [{
            day: new Date().getDay(),
            from: [12, 30],
            to: [13, 30]
        }]
    }))
})

test('create location object and check addOpeningHours', () => {
    const location1 = new Location({
        uuid: UUID,
        general: GENERAL,
        openingHours: OPENINGHOURS
    })
    location1.addOpeningHours(2, 15, 30, 22, 30)
    location1.addOpeningHours(1, 8, 0, 12, 0)
    console.log(location1.openingHours)
    expect(location1.toPlainObject()).toEqual({
        uuid: UUID,
        general: {
            status: GENERALSTATUS,
            title: GENERALTITLE,
            city: GENRALCITY,
            zip: GENERALZIP,
            street: GENERALSTREET,
            streetnum: GENERALSTREETNUM,
            minOrderValue: MINORDERVALUE
        },
        openingHours: [{
                day: 1,
                from: [8, 0],
                to: [12, 0]
            },
            {
                day: 2,
                from: [15, 30],
                to: [22, 30]
            },
            {
                day: new Date().getDay(),
                from: [12, 30],
                to: [13, 30]
            }
        ]
    })
})

test('create location object and check removeOpeningHours', () => {
    const location2 = new Location({
        uuid: UUID,
        general: GENERAL,
        openingHours: [{
            day: new Date().getDay(),
            from: [12, 30],
            to: [13, 30]
        }]
    })
    location2.removeOpeningHours(0)
    expect(location2.toPlainObject()).toBe({
        uuid: UUID,
        general: GENERAL,
        openingHours: [],
        media: []
    })
})