export class Product {
  private name: string;
  private type: string;
  private count: number;
  constructor(name: string, type: string, count: number) {
    this.name = name;
    this.type = type;
    this.count = count;
  }

  printProduct() {
    console.log(`Product: ${this.name}, ${this.type}, ${this.count}`);
  }

  getName() {
    return this.name;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count = Math.floor(Math.random() * 4 + 1);
  }
}
