import {Employee} from "./Employee"
import {EmployeesManager} from "./EmployeeManager"

export const firstEmployee = new Employee('first', 'name', 'manager');
export const secondEmployee = new Employee('second', 'name', 'boss');
export const thirdEmployee = new Employee('third', 'name', 'bartender');

export const employees = new EmployeesManager([firstEmployee, secondEmployee, thirdEmployee]);

employees.print();