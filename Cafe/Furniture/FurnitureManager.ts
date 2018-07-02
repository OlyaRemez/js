import {Table} from "./Furniture"

export class TableManager {
    private tables: Table[];
    constructor(tables: Table[]){
        this.tables = tables;
    }

    add(table) {
        this.tables.push(table);
    }

    remove(Number) {
        this.tables  = this.tables.filter(function(number) {
            return number.getNumber() !== Number;
        });
    }

    print() {
        console.log("");
        console.log("Tables");
        this.tables.forEach(function(element){
          console.log(element.printTable());
        })
        console.log(`Total number of tables: ${this.tables.length}`);
        console.log("");
    }
}