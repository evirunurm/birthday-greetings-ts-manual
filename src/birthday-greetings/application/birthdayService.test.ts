import {BirthdayService} from "./birthdayService";
import {EmployeeRepository} from "../domain/ports/employeeRepository";
import {EmployeeMother} from "../../../test/builders/employeeMother";
import {EmailSender} from "../domain/ports/emailSender";
import {BirthdayMessage} from "../domain/value-objects/birthdayMessage";

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

    it("should send an email to an employee during it's birthday", async () => {
        const today = new Date();
        emailSender.sendEmail = jest.fn()
        const employee = EmployeeMother.anEmployee({
            dateOfBirth: today
        })
        employeeRepository.findEmployeesBornOn = jest.fn().mockReturnValue([employee])

        await birthdayService.sendGreetings(today)

        expect(emailSender.sendEmail).toHaveBeenCalledWith({
            to: employee.getEmail(),
            subject: 'Happy birthday!',
            body: new BirthdayMessage(employee).getMessage()
        })
    })
})