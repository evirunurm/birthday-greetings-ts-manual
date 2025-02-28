import {Employee} from "../entities/employee";

export class BirthdayMessage {
    private readonly message: string

    getMessage = () => this.message

    constructor(private employee: Employee) {
        this.message = `Happy Birthday, dear ${employee.getFirstName()}!`
    }
}