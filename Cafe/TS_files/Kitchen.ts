import {Employees} from "./Employee"
import {Employee} from "./Employee"
import {first_employee, second_employee, third_employee} from "./Employee"

class Kitchen extends Employees{
    private products: string;
    constructor(employees: Employee[], products:string){
        super(employees);
        this.products = products;
    }

    sayInformationAboutKithchen(){
        console.log(this.products);
    }
}

const information = new Kitchen([first_employee, second_employee, third_employee], 'some products');

information.sayInformationAboutKithchen();