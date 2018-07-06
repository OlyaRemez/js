export class Employee {
    private firstName: string;
    private lastName: string;
    private position: string;
    private workStatus: string;
    constructor(firstName: string, lastName: string, position: string, workStatus: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.workStatus = workStatus;
    }

    printEmployee(){
        console.log(`Employee: ${this.firstName} ${this.lastName}, ${this.position}, ${this.workStatus}`);
    }

    getFirstName(){
        return this.firstName;
    }

    getStatus(){
        return this.workStatus;
    }

    setStatus(status: string){
        this.workStatus = status;
    }
}