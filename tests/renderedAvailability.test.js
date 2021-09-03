import { RenderedAvailability } from "../src/util/RenderedAvailability"

const AVAILABILITY = {
    state: 'ONLINE',
    stateTimeFrame: {
        from: 'Mon Apr 26 2021 10:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)',
        to: 'Fri Apr 30 2021 20:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)'
    },
    available: 'ALWAYS',
    availabilityTimeRules: {
        cycle: 'weekly',
        availableOn: [1, 2, 4],
        timeFrames: [
            { from: [12, 30], to: [15, 30] },
            { from: [18, 30], to: [21, 30] }
        ]
    }
}
const AVAILABILITY2 = {
    state: 'OFFLINE',
    stateTimeFrame: {
        from: 'Mon Apr 26 2021 10:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)',
        to: 'Fri Apr 30 2021 20:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)'
    },
    available: 'NEVER',
    availabilityTimeRules: {
        cycle: 'weekly',
        availableOn: [1, 2, 4],
        timeFrames: [
            { from: [12, 30], to: [15, 30] },
            { from: [18, 30], to: [21, 30] }
        ]
    }
}
const AVAILABILITY3 = {
    state: 'TIMED',
    stateTimeFrame: {
        from: 'Mon Apr 26 2021 10:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)',
        to: 'Fri Apr 30 2021 20:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)'
    },
    available: 'TIMED',
    availabilityTimeRules: {
        cycle: 'weekly',
        availableOn: [1, 2, 4],
        timeFrames: [
            { from: [12, 30], to: [15, 30] },
            { from: [18, 30], to: [21, 30] }
        ]
    }
}
const DATE = 'Mon Apr 26 2021 11:21:14 GMT+0200 (Mitteleuropäische Sommerzeit)'
const DATE2 = 'Mon Apr 26 2021 15:31:00 GMT+0200 (Mitteleuropäische Sommerzeit)'
const DATE3 = 'Fri Apr 30 2021 20:01:00 GMT+0200 (Mitteleuropäische Sommerzeit)'
test('checkAvailability method for AVAILABILITY1', () => {
    RenderedAvailability.checkAvailability(AVAILABILITY, DATE)
    console.log(RenderedAvailability.checkAvailability(AVAILABILITY, DATE) )
    expect(RenderedAvailability.checkAvailability(AVAILABILITY, DATE).state).toBe(true)
    expect(RenderedAvailability.checkAvailability(AVAILABILITY, DATE).available).toBe(true)
})
test('checkAvailability method for AVAILABILITY2', () => {
    RenderedAvailability.checkAvailability(AVAILABILITY2, DATE)
    console.log(RenderedAvailability.checkAvailability(AVAILABILITY2, DATE) )
    expect(RenderedAvailability.checkAvailability(AVAILABILITY2, DATE).state).toBe(false)
    expect(RenderedAvailability.checkAvailability(AVAILABILITY2, DATE).available).toBe(false)
})
test('checkAvailability methoddd for AVAILABILITY3', () => {
    RenderedAvailability.checkAvailability(AVAILABILITY3, DATE)
    console.log(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE) )
    expect(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE).state).toBe(true)
    expect(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE).available).toBe(false)
})

test('checkAvailability method for AVAILABILITY3 DATE2', () => {
    RenderedAvailability.checkAvailability(AVAILABILITY3, DATE2)
    console.log(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE2) )
    expect(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE2).state).toBe(true)
    expect(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE2).available).toBe(false)
})
test('checkAvailability method for AVAILABILITY3 DATE3', () => {
    RenderedAvailability.checkAvailability(AVAILABILITY3, DATE3)
    console.log(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE3) )
    expect(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE3).state).toBe(false)
    expect(RenderedAvailability.checkAvailability(AVAILABILITY3, DATE3).available).toBe(false)
})