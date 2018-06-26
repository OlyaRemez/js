import {Employees} from "./Employee"
import {Employee} from "./Employee"
import {Product} from "./Products"
import {Products} from "./Products"
export class Kitchen {
    private products: Products;
    private employees: Employees;
    constructor(kitchenEmployee: Employee){
    }
}

export const kitEmployee = new Employee('four', 'name', 'chef');
export const kitchen = new Kitchen(kitEmployee);


