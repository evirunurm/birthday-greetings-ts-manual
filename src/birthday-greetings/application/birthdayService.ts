import {EmailSender} from "../domain/ports/emailSender";
import {EmployeeRepository} from "../domain/ports/employeeRepository";
import {Employee} from "../domain/employee";

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

    sendGreetings(today: Date) {
        const employees: Employee[] = this.employeeRepository.findUsersBornOn(today)
        employees.forEach(employee => this.emailSender.sendEmail({
            to: employee.getEmail(),
            subject: 'Happy birthday!',
            body: 'Happy birthday, dear ' + employee.getFirstName() + '!'
        }))
    }
}