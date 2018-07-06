import { Employee } from "../Employee/Employee";
import { Product } from "../Products/Products";
import { Order } from "../Order/Order";
import { Kitchen } from "./Kitchen";

export const kitEmployeeOne = new Employee("four", "name", "chef", 'free');
export const kitEmployeeTwo = new Employee("five", "name", "assistant chef", 'free');
export const kitEmployeeThree = new Employee("six", "name", "chef", 'free');
export const kitEmployeeFour = new Employee("seven", "name", "assistant chef", 'free');

export const first_product = new Product("first_product", "first_type", 2);
export const second_product = new Product("second_product", "second_type", 3);
export const third_product = new Product("third_product", "third_type", 5);

export const orderOne = new Order(1, "soup", [first_product, second_product]);

export const kitchen = new Kitchen([kitEmployeeOne], [first_product], [orderOne]);
kitchen.addEmployee(kitEmployeeTwo);
kitchen.addEmployee(kitEmployeeThree);
kitchen.addEmployee(kitEmployeeFour);

kitchen.addProduct(second_product);
kitchen.addProduct(third_product);

kitchen.printEmployees();

kitchen.countProducts();
kitchen.printProducts();

kitchen.newOrder('busy');

kitchen.statusFree('free');
kitchen.statusBusy('busy');
