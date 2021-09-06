import { Client } from '../src/client'
import { Projects } from '../src/endpoints/Projects'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiJhMjQ4NjgyMy05OTg2LWVhMTEtYTk0Yy0wMDE1NWQzMTRjNWEiLCJpaWQiOiI5YTM3NjVhNy0wMjBjLWVjMTEtYjU2My1kYzk4NDAyM2Q0N2UiLCJ1aWQiOiI5YTM3NjVhNy0wMjBjLWVjMTEtYjU2My1kYzk4NDAyM2Q0N2UiLCJuYW1lIjoiam9obm55LXRlc3QiLCJhenAiOiJqb2hubnktdGVzdCIsInNjb3BlIjoib2ZmbGluZV9hY2Nlc3MiLCJydGlkIjoiOWEzNzY1YTctMDIwYy1lYzExLWI1NjMtZGM5ODQwMjNkNDdlIiwibmJmIjoxNjMwNTk2NjE5LCJleHAiOjQ3NTQ3MzQyMTksImlzcyI6Imh0dHBzOi8vYXdvcmsuaW8vIiwiYXVkIjoiYXctYWNjb3VudHMifQ.hPPBLSFE9QZ32scMd_998c3EI8lsW-w0RRivK3RjRTI'

test('1=1t', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    const response = await projects.list()
    console.log(response.map(c => c.name))
    //console.log(response.map(c => c.members('7495fdd5-4f07-ec11-b563-dc984023d47e')))

    // console.log(await companies.contactInfo(response[5].id).list())
    expect(1).toBe(1)
})

test('test get members of a project', async () => {
    const client = new Client(API_KEY)
    const projects = new Projects(client)
    const members = projects.members('7495fdd5-4f07-ec11-b563-dc984023d47e') // Kontra K Project
    console.log(await members.list())

    expect(1).toBe(1)
})