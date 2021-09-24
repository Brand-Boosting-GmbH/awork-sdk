import { Awork } from '../src/index'
import { API_KEY } from './credentials'
const awork = new Awork({ apiKey: API_KEY })
test('teams', async () => {
    const res = await awork.users.list()
    console.log(res.data())
})