import {Employee} from "../entities/employee";
import {BirthdayDate} from "../value-objects/birthdayDate";

export interface EmployeeRepository {
    findEmployeesBornOn(today: BirthdayDate): Promise<Employee[]>
}