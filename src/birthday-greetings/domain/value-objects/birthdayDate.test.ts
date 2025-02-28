import {BirthdayDateMother} from "../../../../test/builders/birthdayDateMother";

describe('Birthday Date', () => {
    it('is the same day', () => {
        const aDay = BirthdayDateMother.aBirthdayDate('2002-01-01')
        const dateOfBirth = BirthdayDateMother.aBirthdayDate('2000-01-01')

        expect(dateOfBirth.isSameBirthdayDay(aDay)).toBe(true)
    })

    it('is not the same day', () => {
        const aDay = BirthdayDateMother.aBirthdayDate('2000-01-01')
        const dateOfBirth = BirthdayDateMother.aBirthdayDate('2001-05-12')

        expect(dateOfBirth.isSameBirthdayDay(aDay)).toBe(false)
    })

    it('should accept as birthday 28th February of a non-leap year, if the birthday is 29th (of a leap year)', () => {
        const aDay = BirthdayDateMother.aBirthdayDate('2025-02-28')
        const dateOfBirth = BirthdayDateMother.aBirthdayDate('2024-02-29')

        expect(dateOfBirth.isSameBirthdayDay(aDay)).toBe(true)
    })
})