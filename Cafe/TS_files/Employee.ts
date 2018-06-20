export class Employee{
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
    protected employees: Employee[];
    constructor(employees: Employee[]){
        this.employees = employees;
    }

    sayInformationAboutEmployees() {
        console.log(this.employees);
        console.log(`Total number of employees: ${this.employees.length}`);
    }

    
};

export const first_employee = new Employee('first', 'name', 'manager');
export const second_employee = new Employee('second', 'name', 'chef');
export const third_employee = new Employee('third', 'name', 'bartender');

const employees = new Employees([first_employee, second_employee, third_employee]);

employees.sayInformationAboutEmployees();