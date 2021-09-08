import { Awork } from '../src/index'
import { API_KEY } from './credentials'
const awork = new Awork({ apiKey: API_KEY })

test('awork main', async () => {
    const resp1 = await awork.companies.list()
    const resp2 = await awork.companies.list()
    console.log(resp1)
    console.log(resp2)
    expect(resp1).toEqual(resp2)
})


test('awork main 2', async () => {
    const files = await awork.projects.files('518a7e68-fd0b-ec11-b563-dc984023d47e').list()
    
    console.log(files.map(file => file.fileName))
    const res = await awork.projects.create({ name: 'Test 123456', description: '<b>Bold</b>' })
    await awork.projects.files(res.id).byUrl({ name: 'JFrakes.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jonathan_Frakes_Photo_Op_GalaxyCon_Minneapolis_2019.jpg/1200px-Jonathan_Frakes_Photo_Op_GalaxyCon_Minneapolis_2019.jpg' })
    console.log(res)
    expect(1).toEqual(1)
})

test('awork main 3', async () => {
    const projects = await awork.projects.list({ filterBy: "startswith(name,'Best')" })
    const project = await awork.projects.members('1fdc53dc-ce10-ec11-b563-dc984023d47e').
    console.log(projects.map(project => project.id))
})