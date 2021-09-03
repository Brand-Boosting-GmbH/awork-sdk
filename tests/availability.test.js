import { Availability } from '../src/model/Availability'

const STATE = 'TIMED'
const STATETIMEFRAME = {
    from: 'Fri Apr 09 2021 13:19:52 GMT+0200 (Mitteleuropäische Sommerzeit)',
    to: 'Fri Apr 09 2021 16:54:52 GMT+0200 (Mitteleuropäische Sommerzeit)'
}
const AVAILABLE = 'TIMED'
const AVAILABILITYTIMERULES = {
    cycle: 'weekly',
    availableOn: [1, 2, 4],
    timeFrames: [
        { from: [12, 30], to: [15, 30] },
        { from: [18, 30], to: [21, 30] }
    ]
}
test('if data is empty', () => {
    const availability = new Availability()
    console.log(availability)
    expect(availability.state).toEqual()
})
test('create availability object and check values', () => {
    const availability = new Availability({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: AVAILABILITYTIMERULES
    })
    expect(availability.state).toBe(STATE)
    expect(availability.stateTimeFrame).toBe(STATETIMEFRAME)
    expect(availability.available).toBe(AVAILABLE)
    expect(availability.availabilityTimeRules).toEqual(AVAILABILITYTIMERULES)
})


test('create availability object and check addTimeFrame', () => {
    const availability = new Availability({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    })
    availability.addTimeFrame(12, 40, 19, 55)
    console.log(availability.timeRulesTimeFrames)
    expect(availability.toPlainObject()).toEqual({ // warum fehler ohne console.log?
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [12, 40], to: [19, 55] },
                { from: [18, 30], to: [21, 30] }

            ]
        }
    })
})

test('create availability object and check removeTimeFrame', () => {
    const availability = new Availability({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    })
    availability.removeTimeFrame(1)
    console.log(availability.timeRulesTimeFrames)
    expect(availability.toPlainObject()).toEqual({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4],
            timeFrames: [
                { from: [12, 30], to: [15, 30] }
            ]
        }
    })
})

test('create availability object and check addAvailableOn', () => {
    const availability = new Availability({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    })
    availability.addAvailableOn(7)
    console.log(availability.timeRulesAvailableOn)
    expect(availability.toPlainObject()).toEqual({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4, 7],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    })
})

test('create availability object and check removeAvailableOn', () => {
    const availability = new Availability({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2, 4],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    })
    availability.removeAvailableOn(4)
    console.log(availability.timeRulesAvailableOn)
    expect(availability.toPlainObject()).toEqual({
        state: STATE,
        stateTimeFrame: STATETIMEFRAME,
        available: AVAILABLE,
        availabilityTimeRules: {
            cycle: 'weekly',
            availableOn: [1, 2],
            timeFrames: [
                { from: [12, 30], to: [15, 30] },
                { from: [18, 30], to: [21, 30] }
            ]
        }
    })
})