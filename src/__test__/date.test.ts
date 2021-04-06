import {dateTimeWithZone} from '../util/date'

test('dateTimeWithZone', () => {
    expect(dateTimeWithZone(['2021-03-21T06:14:52.022Z'])).toEqual(['2021-03-21 14:14:52'])
})