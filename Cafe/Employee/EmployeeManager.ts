import {Employee} from "./Employee"
import {printEmployee} from "./Employee"

export class EmployeesManager {
    private employees: Employee[];
    constructor(employees: Employee[]){
        this.employees = employees;
    }

    add(employee) {
        this.employees.push(employee);
    }

    remove(employee) {
        this.employees.splice(employee, 1);
    }

    print() {
        console.log("");
        console.log("Employees")
        this.employees.forEach(function(element){
            //console.log(element);
            printEmployee(element);
        })
        console.log(`Total number of employees: ${this.employees.length}`);
        console.log("");
    }
}