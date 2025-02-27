import {BirthdayService} from "./birthdayService";
import {EmployeeRepository} from "../domain/ports/employeeRepository";
import {EmployeeMother} from "../../../test/builders/employeeMother";
import {EmailSender} from "../domain/ports/emailSender";

describe('Birthday Service', () => {
    let birthdayService: BirthdayService
    let employeeRepository: EmployeeRepository
    let emailSender: EmailSender

    beforeEach(() => {
        employeeRepository = {} as EmployeeRepository
        emailSender = {} as EmailSender
        birthdayService = new BirthdayService({
            employeeRepository,
            emailSender
        })
    })

    it('should send an email to the user', async () => {
        emailSender.sendEmail = jest.fn()
        const employee = EmployeeMother.anEmployee({})
        employeeRepository.findUsersBornOn = jest.fn().mockReturnValue([
            employee
        ])


        birthdayService.sendGreetings(new Date())

        expect(emailSender.sendEmail).toHaveBeenCalledWith({
            to: employee.getEmail(),
            subject: 'Happy birthday!',
            body: 'Happy birthday, dear ' + employee.getFirstName() + '!'
        })
    })
})