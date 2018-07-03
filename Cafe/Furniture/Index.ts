import {Table} from "./Furniture"
import {TableManager} from "./FurnitureManager"
import {Reservation} from "./Reservation";

export const dateStartOne = new Date(2018, 0, 1, 3, 3, 4, 53);
export const dateEndOne = new Date(2018, 0, 1, 5, 3, 4, 56);

export const dateStartTwo = new Date(2018, 2, 2, 3, 3, 4, 53);
export const dateEndTwo = new Date(2018, 2, 2, 5, 3, 4, 56);

export const reservationOne = new Reservation(dateStartOne, dateEndOne);
export const reservationTwo = new Reservation(dateStartTwo, dateEndTwo);

export const firstTable = new Table(1, 4);
export const tables = new TableManager([firstTable]);

firstTable.addReservation(reservationOne);
firstTable.addReservation(reservationTwo);
firstTable.removeReservation(reservationTwo);
tables.print();


