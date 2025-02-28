import {Employee} from "../entities/employee";
import {BirthdayDate} from "../entities/birthdayDate";

export interface EmployeeRepository {
    findEmployeesBornOn(today: BirthdayDate): Promise<Employee[]>
}