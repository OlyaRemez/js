export class Employee {
    private firstName: string;
    private lastName: string;
    private position: string;
    constructor(firstName: string, lastName: string, position: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
}

export function printEmployee(){
    console.log(this.firstName, this.lastName, this.position);
}