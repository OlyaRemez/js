class Employees {
    constructor(numbEmployeesOfPosition, positions, totalNumberEmployees) {
      this.numbEmployeesOfPosition = numbEmployeesOfPosition;
      this.positions = positions; 
      this.totalNumberEmployees = totalNumberEmployees;
    }

    sayNumber() {
      console.log(`Number employees on the position: ${this.numbEmployeesOfPosition}`);
    }

    sayPositions() {
      console.log(`Positions: ${this.positions}`);
    }

    countingEmployees(){
      this.totalNumberEmployees = this.numbEmployeesOfPosition.reduce(function(sum, current) {
        return sum + current;
      }, 0);
      console.log(`Total number of employees: ${this.totalNumberEmployees}`);
    }
};

class Kitchen extends Employees {
    constructor(numbEmployeesOfPosition, positions, totalNumberEmployeesOnKitchen, positionsOnKitchen, products) {
      super(numbEmployeesOfPosition, positions);
      this.totalNumberEmployeesOnKitchen = totalNumberEmployeesOnKitchen;
      this.positionsOnKitchen = positionsOnKitchen;
      this.products = products;
    }

    sayProducts() {
      console.log(`Products: ${this.products}`);
    }

    workWithPositionsOnKitchen(){
      this.positionsOnKitchen = this.positions.slice(3,5);
      console.log(`Positions on the kitchen: ${this.positionsOnKitchen}`);
    }

    workWithTotalEmployeesOnKitchen(){
      let positions = this.numbEmployeesOfPosition.slice(3,5);
      this.totalNumberEmployeesOnKitchen = positions.reduce(function(sum, current) {
        return sum + current;
      }, 0);
      console.log(`Total number employees on the kitchen: ${this.totalNumberEmployeesOnKitchen}`);
    }
};

  const workWithEmployees = new Employees([2, 4, 8, 4, 2, 3, 1], ['hostesses', 'bartender', 'waiter', 'assistant chef', 'chef', 'manager', 'director'], 0);
  const workWithKitchen = new Kitchen([2, 4, 8, 4, 2, 3, 1], this.positions, 0, 0, 'some products');

  console.log("---");
  console.log("Cafe");
  console.log("---");
  console.log("Work with Employees");
  console.log("");
  workWithEmployees.sayPositions();
  workWithEmployees.sayNumber();
  workWithEmployees.countingEmployees();

  console.log("");
  console.log("Work with Kitchen");
  console.log("");
  workWithKitchen.workWithPositionsOnKitchen();
  workWithKitchen.workWithTotalEmployeesOnKitchen();
  workWithKitchen.sayProducts();