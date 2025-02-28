import {Employee} from "./employee";
import {BirthdayDateMother} from "../../../../test/builders/birthdayDateMother";

describe('Employee', () => {
    it('knows it its birthday', () => {
        const customDateOfBirth = BirthdayDateMother.aBirthdayDate('2000-01-01')
        const employee = new Employee({
            firstName: 'Test',
            lastName: 'Employee',
            dateOfBirth: customDateOfBirth.getCurrentDate(),
            email: 'email@example.com',
        })

        expect(employee.isBirthday(customDateOfBirth)).toBe(true)
    })

    it("knows it's not its birthday", () => {
        const dateOfBirth = new Date('2000-01-01')
        const customDateOfBirth = BirthdayDateMother.aBirthdayDate('2001-05-12')
        const employee = new Employee({
            firstName: 'Test',
            lastName: 'Employee',
            dateOfBirth: dateOfBirth,
            email: 'email@example.com',
        })

        expect(employee.isBirthday(customDateOfBirth)).toBe(false)
    })
})