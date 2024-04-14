

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upparFristWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformation = function (str, fn) {
    console.log(`original Dtring${str}`);
    console.log(`transform string: ${fn(str)}`);
    console.log(`Transform using the Function ${fn.name}`);
}

transformation('JavaScript is the best', upparFristWord);
transformation('JavaScript is the best', oneWord);

//upparFristWord and oneword is call back funtion.

const high5 = function () {
    console.log('✋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'.forEach(high5)]


//-----------------------Function returning function--------------------------------

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greetHey = greet('hey');
greetHey('aliza');
greetHey('pizza');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hi')('aliza');


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
// b\possible because javascript has first class funtion

// book(12, 'pizza'); ---does not work--->//this keyword depend how funtion is call ..
// if we wanna use this keyword in lufthans ..... then we have to define it...


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
book.call(eurowings, 23, 'Sarah Williams');

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

//----------------IMMEDIATELY INVOKED FUNCTIONS--------

//only executed once..... this will never run again

const runOnce = () => {
    console.log('this will never run again');
};

runOnce();


// //IMMEDIATELY INVOKED FUNCTIONS : 2 ways.....
// (function () {
//     console.log('this will never run again')
// })
//     ();

// (() => {
//     console.log('this will never run again');
// })
//     ();

// why it was invented
/**
 * 
 * There are several reasons why IIFEs became popular:

1) Encapsulation and Isolation: IIFEs allow developers to encapsulate their code within a function scope, preventing variables and functions from polluting the global namespace. This helps avoid naming collisions and unintended side effects.

2) Data Privacy: By wrapping code in an IIFE, variables declared inside it are not accessible from outside the function scope. This provides a level of data privacy and prevents unintentional modification of variables by external code.

3) Immediate Execution: IIFEs execute immediately after they are defined. This is useful for executing initialization code or bootstrapping applications without needing to call the function explicitly.

4) Module Pattern: Before JavaScript had native support for modules, developers used IIFEs to create module-like structures. By returning an object or function from the IIFE, developers could create modules with public and private members.
 
*/

// variable created using let and var

{
    const isPrivate = 23; // can not be access out side block
    var notPrivate = 23;/// can  be access out side block
}

console.log(notPrivate);

//------------------------------------------------------------------------------------------------------------------------------------


// ----------------clousures----------------
// --------------VERY IMPORTANT------------------
/**
 * simplay happens automatically in some sitution...
 * 
 */


const secureBooking = () => {
    let passangerCount = 0;

    return function () {
        passangerCount++;
        console.log(`${passangerCount} passenger`);
    };
};
// secureBooking();
// secureBooking();
const booker = secureBooking();
booker();
booker();


document.querySelector('.poll').addEventListener('click', booker.bind());

// a funtion has acces to the variable environment of the execution context in which it was created
// clousure:--- VE attached tp the funtion , exactly as it was at the time and place the function was created.

console.dir(booker);

//-------Example 1 of clousre

let f;
const g = () => {
    const a = 23;
    f = () => {
        console.log(a * 2);
    }
};

const h = () => {
    const b = 777;
    f = () => {
        console.log(b * 2);
    }
}

g();
f();


// f function is reasign by h
h();
f();
console.dir(f);
// clouser : Always, make sure that the value does not lose its original birth place


//Example 2:
const boardPassanger = (n, wait) => {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`we are all bording all at ${n} passagener`);
        console.log(`there are 3 groups ${perGroup}`);
    }, 1000)
    console.log(`will start boarind in ${wait} second`);
};

// setTimeout(function () {
//     console.log('timer');
// }, 1000) // executes after one secouf....

/**
 * 
 * (function () {
    console.log();
} =======> this is ca call back funtion......
 */

const perGroup = 1000;
boardPassanger(180, 3);
