export class Product {
    private name: string;
    private type: string;
    private count: number;
    constructor(name: string, type: string, count: number){
        this.name = name;
        this.type = type;
        this.count = count;
    }
}

export class Products {
    private products: Product[];
    constructor(products: Product[]){
        this.products = products;
    }

    add(k) {
        this.products.push(k);
    }

    remove(n) {
        this.products.splice(n, 1);
    }

    print() {
        console.log("");
        console.log("Products")
        this.products.forEach(function(element){
            console.log(element);
        })
        console.log(`Total number of products: ${this.products.length}`);
        console.log("");
    }
}

export const first_product = new Product('first_product', 'first_type', 2);
export const second_product = new Product('second_product', 'second_type', 3);
export const third_product = new Product('third_product', 'third_type', 5);

const products = new Products([first_product, second_product]);

products.add(third_product);
products.print();