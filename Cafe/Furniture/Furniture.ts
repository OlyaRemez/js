import { Reservation } from "./Reservation"

export class Table {
    private number: number;
    private places: number;
    private reservation: Reservation[];
    constructor(number: number, places: number) {
        this.number = number;
        this.places = places;
    }

    print() {
        console.log(this.number, this.places, this.reservation);
    }

    getNumber() {
        return this.number;
    }

    canReserve(reservation: Reservation) {
        if (!this.reservation) {
            return;
        }
        this.reservation.forEach(function (reserve) {
            if (!(reserve.getStartTime() >= reservation.getEndTime() ||
                reserve.getEndTime() >= reservation.getStartTime())) {
                return false;
            }
        })
        return true;
    }

    addReservation(reservation: Reservation) {
        if (!this.reservation) {
            this.reservation = [reservation];
            return;
        }
        if (this.canReserve(reservation)) {
            this.reservation.push(reservation);
        }
    }

    removeReservation(reservation: Reservation) {
        this.reservation = this.reservation.filter(function (element) {
            return element !== reservation;
        });
    }
}