import {Employee} from "../../src/birthday-greetings/domain/entities/employee";

type EmployeeConfiguration = {
    firstName?: string,
    lastName?: string,
    dateOfBirth?: Date,
    email?: string
}

export class EmployeeMother {
    static anEmployee({
        firstName,
        lastName,
        dateOfBirth,
        email
    }: EmployeeConfiguration) {
        return new Employee({
            firstName: firstName ?? 'Test',
            lastName: lastName ?? 'Employee',
            dateOfBirth: dateOfBirth ?? new Date(
                // A random number from 1901 to 2023
                Math.floor(Math.random() * (2024 - 1901)) + 1901,
                // A random number from 0 to 11
                Math.floor(Math.random() * 12),
                // A random number from 1 to 28
                Math.floor(Math.random() * 28) + 1
            ),
            email: email ?? 'email@example.com',
        })
    }
}