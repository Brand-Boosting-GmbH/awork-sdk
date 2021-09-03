import { Media } from '../src/model/Media'
const UUID = 'sdnjsandlassjdnaljsdn'
const ALT = 'bild.png'
const TYPE = '.png'
const URL = 'http://www.testurl.de'
test('if data is empty', () => {
    const datacheck = new Media()
    console.log(datacheck)
    expect(datacheck.alt).toEqual()
})
test('create price object and check values', () => {
    const media = new Media({
        uuid: UUID,
        alt: ALT,
        type: TYPE,
        url: URL
    })
    expect(media.uuid).toBe(UUID)
    expect(media.alt).toBe(ALT)
    expect(media.type).toBe(TYPE)
    expect(media.url).toBe(URL)
})

test('create price object and check plain object', () => {
    const media = new Media({
        uuid: UUID,
        alt: ALT,
        type: TYPE,
        url: URL
    })
    expect(media.toPlainObject()).toEqual({
        uuid: UUID,
        alt: ALT,
        type: TYPE,
        url: URL
    })
})