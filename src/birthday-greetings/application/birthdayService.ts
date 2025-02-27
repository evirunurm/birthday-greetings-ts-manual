import {EmailSender} from "../domain/ports/emailSender";
import {EmployeeRepository} from "../domain/ports/employeeRepository";
import {Employee} from "../domain/employee";
import {CustomDate} from "../domain/customDate";

type BirthdayServiceDependencies = {
    emailSender: EmailSender
    employeeRepository: EmployeeRepository
}

export class BirthdayService {
    private emailSender: EmailSender
    private employeeRepository: EmployeeRepository

    constructor({emailSender, employeeRepository}: BirthdayServiceDependencies) {
        this.emailSender = emailSender
        this.employeeRepository = employeeRepository
    }

    async sendGreetings(today: Date) {
        const employees: Employee[] = await this.employeeRepository.findEmployeesBornOn(new CustomDate(today))
        employees.forEach(employee => this.emailSender.sendEmail({
            to: employee.getEmail(),
            subject: 'Happy birthday!',
            body: 'Happy birthday, dear ' + employee.getFirstName() + '!'
        }))
    }
}