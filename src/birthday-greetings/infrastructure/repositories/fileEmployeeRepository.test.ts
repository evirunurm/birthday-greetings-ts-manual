import {FileEmployeeRepository} from "./fileEmployeeRepository";
import {CustomDate} from "../../domain/customDate";

describe('File Employee Repository', () => {
    let fileEmployeeRepository: FileEmployeeRepository

    beforeEach(() => {
        fileEmployeeRepository = new FileEmployeeRepository({
            fileName: 'employees.txt'
        })
    })

    it('should load employees with given birthday', async () => {
        const employees = await fileEmployeeRepository.findEmployeesBornOn(
            new CustomDate(new Date('1975-03-11'))
        )

        expect(employees).toHaveLength(1)
    })

    it('should not load employees without given birthday', () => {

    })
})