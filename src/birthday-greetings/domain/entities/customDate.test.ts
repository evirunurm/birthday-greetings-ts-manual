import {CustomDate} from "./customDate";

describe('Custom Date', () => {
    it('is the same day', () => {
        const customDate = new CustomDate(new Date('2002-01-01'))
        const dateOfBirth = new Date('2000-01-01')

        expect(customDate.isSameDay(dateOfBirth)).toBe(true)
    })

    it('is not the same day', () => {
        const customDate = new CustomDate(new Date('2000-01-01'))
        const dateOfBirth = new Date('2001-05-12')

        expect(customDate.isSameDay(dateOfBirth)).toBe(false)
    })
})