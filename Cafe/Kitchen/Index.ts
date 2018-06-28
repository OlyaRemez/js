import {Employee} from "../Employee/Employee"
import {Product} from "../Products/Products"
import {Kitchen} from "./Kitchen"

export const kitEmployeeOne = new Employee('four', 'name', 'chef');
export const kitEmployeeTwo = new Employee('five', 'name', 'assistant chef');

export const first_product = new Product('first_product', 'first_type', 2);
export const second_product = new Product('second_product', 'second_type', 3);
export const third_product = new Product('third_product', 'third_type', 5);

export const kitchen = new Kitchen([kitEmployeeOne],[first_product]);
kitchen.addEmployee(kitEmployeeTwo);
kitchen.addProduct(second_product);
kitchen.addProduct(third_product);
kitchen.printEmployees();
kitchen.printProducts();


