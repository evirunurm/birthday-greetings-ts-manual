import {Employee} from "../entities/employee";
import {CustomDate} from "../entities/customDate";

export interface EmployeeRepository {
    findEmployeesBornOn(today: CustomDate): Promise<Employee[]>
}