import {BirthdayDate} from "./birthdayDate";

type EmployeeConstructor = {
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    email: string
}

export class Employee {
    private readonly firstName: string
    private readonly lastName: string
    private readonly dateOfBirth: BirthdayDate
    private readonly email: string

    constructor({firstName, lastName, dateOfBirth, email}: EmployeeConstructor) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = new BirthdayDate(dateOfBirth)
        this.email = email
    }

    isBirthday = (ourDate: BirthdayDate) => ourDate.isSameBirthdayDay(this.dateOfBirth)

    getEmail = () => this.email


    getFirstName = () => this.firstName

    getLastName = () => this.lastName

    getDateOfBirth = () => this.dateOfBirth
}