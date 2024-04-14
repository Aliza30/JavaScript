

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upparFristWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformation = function (str, fn) {
//     console.log(`original Dtring${str}`);
//     console.log(`transform string: ${fn(str)}`);
//     console.log(`Transform using the Function ${fn.name}`);
// }

// transformation('JavaScript is the best', upparFristWord);
// transformation('JavaScript is the best', oneWord);

// //upparFristWord and oneword is call back funtion.

// const high5 = function () {
//     console.log('✋');
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'.forEach(high5)]


//-----------------------Function returning function--------------------------------

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greetHey = greet('hey');
// greetHey('aliza');
// greetHey('pizza');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('hi')('aliza');


//----------------------the call and apply method-------------------------------

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swissAirline = {
    airline: 'Swiss Airline',
    iataCode: 'SA',
    bookings: [],
}

const book = lufthansa.book;
//b\possible because javascript has first class funtion

//book(12, 'pizza'); ---does not work--->//this keyword depend how funtion is call ..
//if we wanna use this keyword in lufthans ..... then we have to define it...


// function is a object n object has method ... call is method too

// --------call Method--------
book.call(eurowings, 23, 'Sarah Williams');
// we called the call method which automatically  gave direction to this method.
console.log(eurowings);


book.call(lufthansa, 32, 'marry cooper');
console.log(lufthansa);

book.call(swissAirline, 32, 'marry cooper');
console.log(swissAirline);

//---------Appply Method--------
// generally not use now
const flightData = [532, 'george cooper'];
book.apply(swissAirline, flightData);
console.log(flightData);

//better way to use this
book.call(swissAirline, ...flightData);

//------------BIND METHOD---------
// book.call(eurowings, 23, 'Sarah Williams');

const bookew = book.bind(eurowings);
const bookLu = book.bind(lufthansa);
const bookSw = book.bind(swissAirline);

bookew(23, 'aliza razi');

const bookEW23 = book.bind(eurowings, 23); // is flight_no is pree set here... now it only need name
// new we have to only pass passanger name 
// this is called partial application.
bookEW23('aliza');
bookEW23('aksn');

// with event listener
lufthansa.planes = 300;
lufthansa.buyPlan = function () {
    // console.log(this);
    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlan.bind(lufthansa));
// this key word is dynamic


const addTAx = (rate, value) => value + value * rate;
console.log(addTAx(0.1, 200));

const addVat = addTAx.bind(null, 0.3);// rate is fix at 0.3

console.log(addVat(22));

//---------challenge------------

const addTaxRate = (rate) => {
    return function (value) {
        return value + value * rate;
    }
};
const addVatat = addTaxRate(0.23);
console.log(addVatat(23));
console.log(addVatat(2300));
console.log(addVatat(55));
