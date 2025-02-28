import {EmailSender} from "../domain/ports/emailSender";
import {EmployeeRepository} from "../domain/ports/employeeRepository";
import {Employee} from "../domain/entities/employee";
import {BirthdayDate} from "../domain/value-objects/birthdayDate";
import {Email} from "../domain/value-objects/email";
import {BirthdayMessage} from "../domain/value-objects/birthdayMessage";

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
        const employees: Employee[] = await this.employeeRepository.findEmployeesBornOn(new BirthdayDate(today))
        employees.forEach(employee => {
            const email: Email = {
                to: employee.getEmail(),
                subject: 'Happy birthday!',
                body: new BirthdayMessage(employee).getMessage()
            }
            this.emailSender.sendEmail(email)
        })
    }
}