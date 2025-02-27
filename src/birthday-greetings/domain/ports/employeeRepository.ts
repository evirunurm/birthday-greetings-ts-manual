import {Employee} from "../employee";
import {CustomDate} from "../customDate";

export interface EmployeeRepository {
    findEmployeesBornOn(today: CustomDate): Promise<Employee[]>
}