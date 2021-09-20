import { Client } from '../src/client'
import { Projects } from '../src/endpoints/Projects'
import { API_KEY } from './credentials'
import { Companies } from '../src/endpoints/Companies'


/**
 * @todo TODO: rewrite these tests to be real value
 */

test('1=1t', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    const response = await projects.list()
    console.log(response.map(c => c.name))
    console.log(response.find(c => c.name === 'Awork Schnittstelle'))

    // console.log(await companies.contactInfo(response[5].id).list())
    expect(1).toBe(1)
})

test('test get members of a project', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    const members = projects.members('7495fdd5-4f07-ec11-b563-dc984023d47e') // Kontra K Project
    console.log(await members.list())
    console.log(await members.get('b4486823-9986-ea11-a94c-00155d314c5a'))

    expect(1).toBe(1)
})


test('test get projectstatuses of a project', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    const statuses = projects.projectStatus()
    console.log(await statuses.get('518a7e68-fd0b-ec11-b563-dc984023d47e'))
    // console.log(await members.get('b4486823-9986-ea11-a94c-00155d314c5a'))

    expect(1).toBe(1)
})

test('test get files of a project', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    const files = projects.files('518a7e68-fd0b-ec11-b563-dc984023d47e')
    console.log(await files.list())
    // console.log(await members.get('b4486823-9986-ea11-a94c-00155d314c5a'))

    expect(1).toBe(1)
})

test('test get filesss of a project', async () => {
    const client = new Client(API_KEY)
    const company = new Companies(client)
    const test = await company.create({name:'hallo',description:'testeteete'})
    console.log(test)
    // console.log(await members.get('b4486823-9986-ea11-a94c-00155d314c5a'))

    expect(1).toBe(1)
})