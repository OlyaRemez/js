import {Product, printProduct} from "./Products"

export class ProductsManager {
    private products: Product[];
    constructor(products: Product[]){
        this.products = products;
    }

    add(product) {
        this.products.push(product);
    }

    remove(product) {
        this.products.splice(product, 1);
    }

    print() {
        console.log("");
        console.log("Products")
        this.products.forEach(function(){
            printProduct();
        })
        console.log(`Total number of products: ${this.products.length}`);
        console.log("");
    }
}