import {Table} from "./Furniture"

export class TableManager {
    private tables: Table[];
    constructor(tables: Table[]){
        this.tables = tables;
    }

    add(table: Table) {
        this.tables.push(table);
    }

    remove(numberTable: number) {
        this.tables  = this.tables.filter(function(number) {
            return number.getNumber() !== numberTable;
        });
    }

    print() {
        console.log("");
        console.log("Tables");
        this.tables.forEach(function(element){
          console.log(element.print());
        })
        console.log(`Total number of tables: ${this.tables.length}`);
        console.log("");
    }
}