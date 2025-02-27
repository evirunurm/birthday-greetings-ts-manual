export interface EmployeeRepository {
    findUsersBornOn(today: Date): any[]
}