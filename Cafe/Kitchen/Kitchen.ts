import {Employee} from "../Employee/Employee"
import {Product} from "../Products/Products"

export class Kitchen {
    private products: Product[];
    private employees: Employee[];
    constructor(employees: Employee[], products: Product[]){
        this.employees = employees;
        this.products = products;
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    addProduct(product){
        this.products.push(product);
    }

    removeEmployeeByName(Name){
        this.employees = this.employees.filter(function(name){
            return name.getFirstName() !== Name;
        })
    }

    removeProductByName(Name){
        this.products = this.products.filter(function(name){
            return name.getName() !== Name;
        })
    }

    printEmployees() {
        console.log("");
        console.log("Employees on kitchen: ");
        this.employees.forEach(function(element){
          console.log(element.printEmployee());
        })
        console.log("");
    }

    printProducts() {
        console.log("");
        console.log("Products: ");
        this.products.forEach(function(element){
          console.log(element.printProduct());
        })
        console.log("");
    }
}


