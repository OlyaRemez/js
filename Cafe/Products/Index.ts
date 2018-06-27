import {Product} from "./Products"
import {ProductsManager} from "./ProductsManager"

export const first_product = new Product('first_product', 'first_type', 2);
export const second_product = new Product('second_product', 'second_type', 3);
export const third_product = new Product('third_product', 'third_type', 5);

const products = new ProductsManager([first_product, second_product]);

products.add(third_product);
products.print();