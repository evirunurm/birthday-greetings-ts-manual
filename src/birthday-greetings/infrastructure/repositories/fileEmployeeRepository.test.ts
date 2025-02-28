import {FileEmployeeRepository} from "./fileEmployeeRepository";
import {BirthdayDate} from "../../domain/value-objects/birthdayDate";
import fs from "fs";
import path from "path";

describe('File Employee Repository', () => {
    let fileEmployeeRepository: FileEmployeeRepository
    let fileName: string = path.resolve('data/test_employees.txt')

    beforeEach(() => {
        fileEmployeeRepository = new FileEmployeeRepository({
            fileName: 'test_employees.txt'
        })
    })

    afterEach(() => {
        fs.unlinkSync(fileName)
    })

    it('should load employees with given birthday', async () => {
        const testData = `last_name, first_name, date_of_birth, email\nTest, Employee, 1975-03-11, test@example.com`
        fs.writeFileSync(fileName, testData)

        const employees = await fileEmployeeRepository.findEmployeesBornOn(
            new BirthdayDate(new Date('1975-03-11'))
        )

        expect(employees).toHaveLength(1)
    })

    it('should not load employees with different birthday to given', async () => {
        const testData = `last_name, first_name, date_of_birth, email\nTest, Employee, 1975-03-11, test@example.com`
        fs.writeFileSync(fileName, testData)

        const employees = await fileEmployeeRepository.findEmployeesBornOn(
            new BirthdayDate(new Date('2000-05-21'))
        )

        expect(employees).toHaveLength(0)
    })
})