import {Product} from "./Products"

export class ProductsManager {
    private products: Product[];
    constructor(products: Product[]){
        this.products = products;
    }

    add(product) {
        this.products.push(product);
    }

    remove(Name) {
        this.products  = this.products.filter(function(name) {
            return name.getName() !== Name;
        });
    }

    print() {
        console.log("");
        console.log("Products")
        this.products.forEach(function(element){
            console.log(element.printProduct());
          })
        console.log(`Total number of products: ${this.products.length}`);
        console.log("");
    }
}