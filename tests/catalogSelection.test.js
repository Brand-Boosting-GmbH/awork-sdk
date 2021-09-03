import { CatalogSelection } from "../src/model/CatalogSelection"

const UUID = 'order-regions'
const TITLE = 'Lieferregion'
const OPTIONS = [{
    uuid: '9238479238-0294293',
    title: 'Albstadt-Ebingen',
    minOrderValue: 500
}]
test('if data is empty', () => {
    const datacheck = new CatalogSelection()
    console.log(datacheck)
    expect(datacheck.title).toEqual()
})
test('create catalogSelection object and check values', () => {
    const catalogSelection = new CatalogSelection({
        uuid: UUID,
        title: TITLE,
        options: OPTIONS
    })
    expect(catalogSelection.uuid).toBe(UUID)
    expect(catalogSelection.title).toBe(TITLE)
    expect(catalogSelection.options).toEqual(OPTIONS.map(d => new CatalogSelection(d)))
})
test('create catalogSelection object and check plain object', () => {
    const catalogSelection = new CatalogSelection({
        uuid: UUID,
        title: TITLE,
        options: OPTIONS
    })
    expect(catalogSelection.toPlainObject()).toEqual({
        uuid: UUID,
        title: TITLE,
        options: OPTIONS
    })
})