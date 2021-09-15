import { Awork } from '../src/index'
import { API_KEY } from './credentials'
import fs from 'fs'
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

const MAX_MM_UID = 'bc32b5df-b910-ec11-b563-dc984023d47e'

test('awork project lifecycle', async () => {
    const project = await awork.projects.create({ name: 'Test Projekt', description: 'Project Lifecycle Test'  })
    await awork.projects.members(project.id).create({ projectRoleId: '87232828-ba10-ec11-b563-dc984023d47e', isResponsible: true, userId: MAX_MM_UID})
    await awork.projects.members(project.id).update(MAX_MM_UID, { projectRoleId: '82232828-ba10-ec11-b563-dc984023d47e', isResponsible: true})
    const file = await awork.projects.files(project.id).byUrl({ url: 'https://placekitten.com/500/500', name: 'Cat.jpg' })
    const dl = await awork.projects.files(project.id).download(file.id)
    const file2 = await awork.projects.files(project.id).create(fs.readFileSync('./tests/kitten.jpg'), {  })
    await awork.projects.update(project.id, { name: 'Test Name Changed 5' })
    await awork.projects.delete(project.id)
}, 60000)


test('awork webhooks WiP', async () => {
    const res = await awork.client.get('/autopilot/availablealerts')
    console.log(res.data())   
})

