import {Employee} from "./Employee"
import {EmployeesManager} from "./EmployeeManager"
import {kitEmployeeOne, kitEmployeeTwo} from "../Kitchen/Index"

export const firstEmployee = new Employee('first', 'name', 'manager', 'none');
export const secondEmployee = new Employee('second', 'name', 'boss', 'none');
export const thirdEmployee = new Employee('third', 'name', 'bartender', 'none');

export const employees = new EmployeesManager([firstEmployee, secondEmployee, thirdEmployee]);

employees.add(kitEmployeeOne);
employees.add(kitEmployeeTwo);
employees.print();
