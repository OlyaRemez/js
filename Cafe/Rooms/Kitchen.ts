import { Employee } from "../Employee/Employee";
import { Product } from "../Products/Products";
import { Order } from "../Order/Order";

export class Kitchen {
  private products: Product[];
  private employees: Employee[];
  private orders: Order[];
  private freeEmployees: Employee[];
  private busyEmployees: Employee[];
  constructor(employees: Employee[], products: Product[], orders: Order[]) {
    this.employees = employees;
    this.products = products;
    this.orders = orders;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  removeEmployeeByName(nameEmp: string) {
    this.employees = this.employees.filter(function(name) {
      return name.getFirstName() !== nameEmp;
    });
  }

  removeProductByName(nameEmp: string) {
    this.products = this.products.filter(function(name) {
      return name.getName() !== nameEmp;
    });
  }

  removeOrder(order: Order) {
    this.orders = this.orders.filter(function(element) {
      return element !== order;
    });
  }

  printEmployees() {
    console.log("");
    console.log("Employees on kitchen: ");
    this.employees.forEach(function(element) {
      console.log(element.printEmployee());
    });
    console.log("");
  }

  printProducts() {
    console.log("");
    console.log("Products: ");
    this.products.forEach(function(element) {
      console.log(element.printProduct());
    });
    console.log("");
  }

  statusFree(statusEmpl: string) {
    this.freeEmployees = this.employees.filter(function(status) {
      return status.getStatus() == statusEmpl;
    });
  }

  statusBusy(statusEmpl: string) {
    this.busyEmployees = this.employees.filter(function(status) {
      return status.getStatus() == statusEmpl;
    });
  }

  countProducts() {
    this.products.forEach(function(element) {
      if (element.getCount() > 0) {
        return;
      }
      if (element.getCount() <= 0) {
        element.increaseCount();
      }
    });
  }

  newOrder(statusEmpl: string) {
    let randEmpl = Math.floor(Math.random() * this.employees.length);
    if (this.employees[randEmpl].getStatus() == "free") {
      this.employees[randEmpl].setStatus(statusEmpl);
    }
  }
}
