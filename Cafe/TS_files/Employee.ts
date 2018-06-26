export class Employee {
    private firstName: string;
    private lastName: string;
    private position: string;
    constructor(firstName: string, lastName: string, position: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
}

export class Employees {
    private employees: Employee[];
    constructor(employees: Employee[]){
        this.employees = employees;
    }

    add(k) {
        this.employees.push(k);
    }

    remove(n) {
        this.employees.splice(n, 1);
    }

    print() {
        console.log("");
        console.log("Employees")
        this.employees.forEach(function(element){
            console.log(element);
        })
        console.log(`Total number of employees: ${this.employees.length}`);
        console.log("");
    }
}

export const firstEmployee = new Employee('first', 'name', 'manager');
export const secondEmployee = new Employee('second', 'name', 'boss');
export const thirdEmployee = new Employee('third', 'name', 'bartender');

export const employees = new Employees([firstEmployee, secondEmployee, thirdEmployee]);

employees.print();