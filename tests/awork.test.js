import { Awork } from '../src/index'
import { API_KEY } from './credentials'
const awork = new Awork({ apiKey: API_KEY })
test('awork', async () => {
    await awork.users.create({
        firstName: 'John', 
        lastName: 'Smith',
        birthDate: "2021-09-21T08:30:26.7764709+00:00",
        gender: "Male",
        title: "Dr.",
        position: "Manager",
        language: "de-DE",
        capacityPerWeek: null,
        accountId: null
    })
    console.log(await awork.users.list())
})

test('teams', async () => {
    const res = await awork.client.get(`tasks/tags`)
    console.log(res.data())
})