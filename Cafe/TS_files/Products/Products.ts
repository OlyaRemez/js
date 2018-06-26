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

export function printProduct(){
    console.log(this.name, this.type, this.number);
}