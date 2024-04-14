'use strict';

const Bookings = [];//to store all the enteries happening in booking.


const CreateBooking = function (flightNum,
    numPassager = 1,
    price = 199 * numPassager) {
    //ES5
    // numPassager = numPassager || 1;
    const Booking = {
        flightNum,
        numPassager,
        price
    }
    console.log(Booking);
    Bookings.push(Booking);
}

CreateBooking('LH231', 3, 444);


console.log(Bookings);




const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};

checkIn(flight, jonas);
console.log(checkIn);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
