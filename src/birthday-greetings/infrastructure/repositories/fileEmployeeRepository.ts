import {EmployeeRepository} from "../../domain/ports/employeeRepository";
import fs from 'fs'
import path from 'path'
import {Employee} from "../../domain/entities/employee";
import {BirthdayDate} from "../../domain/value-objects/birthdayDate";

type FileEmployeeRepositoryDependencies = {
    fileName: string
}

export class FileEmployeeRepository implements EmployeeRepository {
    private readonly fileName: string
    private separator = ','
    private rowSeparator = /\r?\n/
    private header = 'last_name, first_name, date_of_birth, email'

    constructor({fileName}: FileEmployeeRepositoryDependencies) {
        this.fileName = fileName;
    }

    private async readDataFile(): Promise<string> {
        const dataPath = path.resolve(`data/${this.fileName}`)
        return new Promise((resolve, reject) => {
            fs.readFile(dataPath, 'utf-8', (err, data: string) => {
                if (err) {
                    reject()
                }
                resolve(data)
            }
        )})
    }

    async findEmployeesBornOn(today: BirthdayDate): Promise<Employee[]> {
        const data = await this.readDataFile()
        const employeeRows = data.split(this.rowSeparator).filter(line => line !== this.header)
        const employees = employeeRows.map(line => {
            const employeeData = line.split(this.separator)
            return new Employee({
                firstName: employeeData[0],
                lastName: employeeData[1],
                dateOfBirth: new Date(employeeData[2]),
                email: employeeData[3]
            })
        })

        return employees.filter(employee => employee.isBirthday(today))
    }
}