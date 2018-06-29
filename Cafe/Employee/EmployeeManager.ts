import {Employee} from "./Employee"

export class EmployeesManager {
    private employees: Employee[];
    constructor(employees: Employee[]){
        this.employees = employees;
    }

    add(employee) {
        this.employees.push(employee);
    }

    remove(FirstName) {
        this.employees  = this.employees.filter(function(name) {
            return name.getFirstName() !== FirstName;
        });
    }

    print() {
        console.log("");
        console.log("Employees");
        this.employees.forEach(function(element){
          console.log(element.printEmployee());
        })
        console.log(`Total number of employees: ${this.employees.length}`);
        console.log("");
    }
}