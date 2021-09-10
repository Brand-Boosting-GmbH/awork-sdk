import { Awork } from '../src/index'
import { API_KEY } from './credentials'
const awork = new Awork({ apiKey: API_KEY })

test('awork teams integration test', async () => {
    const team = await awork.teams.create({ name: 'Best Team Evaaaaaa', color: 'yellow', icon: 'cloud' })
    const team2 = await awork.teams.update(team.id, { name: team.name, color: 'arctic', icon: 'brush' })
    const team3 = await awork.teams.get(team.id)
    expect(team2).toEqual(team3)
    const list = await awork.teams.list({ page: 1, pageSize: 500 })
    const teamIncluded = list.find(t => t.id == team.id)? true : false
    expect(teamIncluded).toBe(true)
    await awork.teams.delete(team.id)
    const list2 = await awork.teams.list({ page: 1, pageSize: 500 })
    const teamIncluded2 = list2.find(t => t.id == team.id)? true : false
    expect(teamIncluded2).toBe(false)
})