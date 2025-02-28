import {Employee} from "./employee";
import {CustomDate} from "./customDate";

describe('Employee', () => {
    it('knows it its birthday', () => {
        const customDateOfBirth = new CustomDate(new Date('2000-01-01'))
        const employee = new Employee({
            firstName: 'Test',
            lastName: 'Employee',
            dateOfBirth: customDateOfBirth.getDate(),
            email: 'email@example.com',
        })

        expect(employee.isBirthday(customDateOfBirth)).toBe(true)
    })

    it("knows it's not its birthday", () => {
        const dateOfBirth = new Date('2000-01-01')
        const customDateOfBirth = new CustomDate(new Date('2001-05-12'))
        const employee = new Employee({
            firstName: 'Test',
            lastName: 'Employee',
            dateOfBirth: dateOfBirth,
            email: 'email@example.com',
        })

        expect(employee.isBirthday(customDateOfBirth)).toBe(false)
    })
})