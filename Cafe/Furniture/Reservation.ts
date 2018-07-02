export class Reservation {
    private startTime: Date;
    private endTime: Date;
    constructor(startTime: Date, endTime: Date){
        this.startTime = startTime;
        this.endTime = endTime;
        return;   
    }

    getStartTime(){
        return this.startTime;
    }

    getEndTime(){
        return this.endTime;
    }

    print(){
        console.log(this.startTime, this.endTime);
    }
}