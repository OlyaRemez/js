import {Reservation} from "./Reservation"

export class Table {
    private number: string;
    private places: string;
    private reservation: object[];
    constructor(number: string, places: string){
        this.number = number;
        this.places = places;
    }

    printTable(){
        console.log(this.number, this.places, this.reservation);
    }

    getNumber(){
        return this.number;
    }
   
    addReservation(reservations){
        this.reservation = reservations;
    }

    removeReservation(){
    }

    canReserve(){
    }
}