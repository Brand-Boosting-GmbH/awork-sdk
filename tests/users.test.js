import { Awork } from '../src/index'
import { API_KEY } from './credentials'
const awork = new Awork({ apiKey: API_KEY })

test('awork users integration test', async () => {
    const users = await awork.client.get('/me')
    console.log(users.data())
})