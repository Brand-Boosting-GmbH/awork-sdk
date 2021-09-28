import { Awork } from '../src/index'
import { API_KEY } from './credentials'
const awork = new Awork({ apiKey: API_KEY })
test('teams', async () => {
    console.log(await awork.typesOfWork.list())
})