import {Employees} from "./Employee"
import {Employee} from "./Employee"
import {Product} from "./Products"
import {Products} from "./Products"
import {firstEmployee, secondEmployee, thirdEmployee} from "./Employee"

export class Kitchen {
    private first_product: Product;
    private second_product: Product;
    private third_product: Product;
    private products: Products;
    private employees: Employees;
    constructor(kitchEmployee: Employee){
        this.first_product = new Product('first_product', 'first_type', 2);
        this.second_product = new Product('second_product', 'second_type', 3);
        this.third_product = new Product('third_product', 'third_type', 5);
    }

    addProduct(){
        this.products = new Products([this.first_product, this.second_product, this.third_product]);
        console.log(`Products`)
        console.log(this.products);
        console.log("")
    }

    addEmployee(){
        this.employees = new Employees([firstEmployee, secondEmployee, thirdEmployee, kitchenEmployee]);
        console.log(`New employee on the kitchen`);
        console.log(kitchenEmployee);
        console.log("");
    }
}

const kitchenEmployee = new Employee('four', 'name', 'chef');
const kitchen = new Kitchen(kitchenEmployee);
kitchen.addProduct();
kitchen.addEmployee();