import { CatalogOption } from "../src/model/CatalogOption"

const UUID = '72346-243652-23452'
const TITLE = 'Albstadt'
const MINORDERVALUE = 500

test('if data is empty', () => {
    const datacheck = new CatalogOption()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create catalogOption object and check values', () => {
    const catalogOption = new CatalogOption({
        uuid: UUID,
        title: TITLE,
        minOrderValue: MINORDERVALUE
    })
    expect(catalogOption.uuid).toBe(UUID)
    expect(catalogOption.title).toBe(TITLE)
    expect(catalogOption.minOrderValue).toBe(MINORDERVALUE)
})
test('create catalogOption object and check plain object', () => {
    const catalogOption = new CatalogOption({
        uuid: UUID,
        title: TITLE,
        minOrderValue: MINORDERVALUE
    })
    expect(catalogOption.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        minOrderValue: MINORDERVALUE
    })
})