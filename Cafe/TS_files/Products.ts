export class Product {
    private name: string;
    private type: string;
    private count: number;
    constructor(name: string, type: string, count: number){
        this.name = name;
        this.type = type;
        this.count = count;
    }
};

export class Products {
    private products: Product[];
    constructor(products: Product[]){
        this.products = products;
    }

    printProducts() {
        console.log(this.products);
        console.log(`Total number of products: ${this.products.length}`);
    }
};


