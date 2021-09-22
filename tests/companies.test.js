import { Client } from '../src/client'
import { API_KEY } from './credentials'
import { Companies } from '../src/endpoints/Companies'
import { Projects } from '../src/endpoints/Projects'
import { Users } from '../src/endpoints/Users'



test('create', async () => {
    const client = new Client(API_KEY)
    const companies = new Companies(client)
    /*await companies.create({
        name: 'Brand Boosting',
        description: 'Beschreibung von Brand Boosting'
    })*/
    //console.log(await companies.list())
    // CompanyId = 'c63c1f36-271a-ec11-ae72-0050f26748f5'
    /*await companies.contactInfo('c63c1f36-271a-ec11-ae72-0050f26748f5').update('dab299e9-2a1a-ec11-ae72-0050f26748f5',{
        "label": null,
        "value": "000000000",
        "type": "phone",
        "subType": "central",
        "addressLine1": null,
        "addressLine2": null,
        "zipCode": "72458",
        "city": "Albstadt",
        "state": null,
        "country": null,
        "isAddress": false
    })*/
    // await companies.contactInfo('c63c1f36-271a-ec11-ae72-0050f26748f5').delete('f1db95fb-2a1a-ec11-ae72-0050f26748f5')
    console.log(await companies.list())
})

test('create project', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    /*await projects.create({
        companyId: 'c63c1f36-271a-ec11-ae72-0050f26748f5',
        name: 'Test Project'
    })
    await projects.members().create({

    })*/
    console.log(await projects.list())
})

test('create user', async () => {
    const client = new Client(API_KEY)
    const users = new Users(client)
    const user1 = await users.create({
        "firstName": 'John',
        "lastName": 'Smith',
        "birthDate": "2021-09-21T08:30:26.7764709+00:00",
        "gender": "Male",
        "title": "Dr.",
        "position": "Manager",
        "language": "de-DE",
        "capacityPerWeek": null,
        "accountId": null
    })
    console.log(await users.get(user1.id))
})