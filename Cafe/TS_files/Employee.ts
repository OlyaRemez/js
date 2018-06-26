export class Employee {
    private firstName: string;
    private lastName: string;
    private position: string;
    constructor(firstName: string, lastName: string, position: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
};

export class Employees {
    private employees: Employee[];
    constructor(employees: Employee[]){
        this.employees = employees;
    }

    printEmployees() {
        console.log("Employees")
        console.log(this.employees);
        console.log("");
    }
};

export const firstEmployee = new Employee('first', 'name', 'manager');
export const secondEmployee = new Employee('second', 'name', 'boss');
export const thirdEmployee = new Employee('third', 'name', 'bartender');

const employees = new Employees([firstEmployee, secondEmployee, thirdEmployee]);

employees.printEmployees();