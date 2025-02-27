import {CustomDate} from "./customDate";

type EmployeeConstructor = {
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    email: string
}

export class Employee {
    private readonly firstName: string
    private readonly lastName: string
    private dateOfBirth: CustomDate
    private readonly email: string

    constructor({firstName, lastName, dateOfBirth, email}: EmployeeConstructor) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = new CustomDate(dateOfBirth)
        this.email = email
    }

    isBirthday(ourDate: CustomDate) {
        return ourDate.isSameDay(this.dateOfBirth.getDate())
    }

    getEmail() {
        return this.email
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }
}