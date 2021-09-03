import { Awork } from '../src/index'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiJhMjQ4NjgyMy05OTg2LWVhMTEtYTk0Yy0wMDE1NWQzMTRjNWEiLCJpaWQiOiI5YTM3NjVhNy0wMjBjLWVjMTEtYjU2My1kYzk4NDAyM2Q0N2UiLCJ1aWQiOiI5YTM3NjVhNy0wMjBjLWVjMTEtYjU2My1kYzk4NDAyM2Q0N2UiLCJuYW1lIjoiam9obm55LXRlc3QiLCJhenAiOiJqb2hubnktdGVzdCIsInNjb3BlIjoib2ZmbGluZV9hY2Nlc3MiLCJydGlkIjoiOWEzNzY1YTctMDIwYy1lYzExLWI1NjMtZGM5ODQwMjNkNDdlIiwibmJmIjoxNjMwNTk2NjE5LCJleHAiOjQ3NTQ3MzQyMTksImlzcyI6Imh0dHBzOi8vYXdvcmsuaW8vIiwiYXVkIjoiYXctYWNjb3VudHMifQ.hPPBLSFE9QZ32scMd_998c3EI8lsW-w0RRivK3RjRTI'
const awork = new Awork({ apiKey: API_KEY })

test('awork main', async () => {
    const resp1 = await awork.companies.list()
    const resp2 = await awork.companies.list()
    console.log(resp1)
    console.log(resp2)
    expect(resp1).toEqual(resp2)
})