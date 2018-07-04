import { Product } from "../Products/Products";

export class Order {
    private number: number;
    private food: string;
    private product: Product[];
    constructor(number: number, food: string, product: Product[]){
        this.number = number;
        this.food = food;
        this.product = product;
    }

    getProduct(){
        return this.product;
    }
}