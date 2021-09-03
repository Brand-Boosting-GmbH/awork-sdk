import { Client } from '../src/client'
import { Companies } from '../src/endpoints/Companies'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiJhMjQ4NjgyMy05OTg2LWVhMTEtYTk0Yy0wMDE1NWQzMTRjNWEiLCJpaWQiOiI5YTM3NjVhNy0wMjBjLWVjMTEtYjU2My1kYzk4NDAyM2Q0N2UiLCJ1aWQiOiI5YTM3NjVhNy0wMjBjLWVjMTEtYjU2My1kYzk4NDAyM2Q0N2UiLCJuYW1lIjoiam9obm55LXRlc3QiLCJhenAiOiJqb2hubnktdGVzdCIsInNjb3BlIjoib2ZmbGluZV9hY2Nlc3MiLCJydGlkIjoiOWEzNzY1YTctMDIwYy1lYzExLWI1NjMtZGM5ODQwMjNkNDdlIiwibmJmIjoxNjMwNTk2NjE5LCJleHAiOjQ3NTQ3MzQyMTksImlzcyI6Imh0dHBzOi8vYXdvcmsuaW8vIiwiYXVkIjoiYXctYWNjb3VudHMifQ.hPPBLSFE9QZ32scMd_998c3EI8lsW-w0RRivK3RjRTI'

test('1=1t', async () => {
    const client = new Client(API_KEY)
    const companies = new Companies(client)
    const response = await companies.list()
    console.log(response.map(c => c.name))
    expect(1).toBe(1)
})