const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];

const openinghrs = {
    [weekdays[1]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[6]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhance property
    openinghrs,

    order(staterIndex, MainIndex) {
        return [this.staterMenu[staterIndex], this.mainMenu[MainIndex]];
    },

    orderDelivery({ starterIndex = 2,
        MainIndex = 1,
        time = 'in 20 min',
        Place }) {
        console.log(
            `Order Received ${this.starterMenu[starterIndex]} and
             ${this.mainMenu[MainIndex]} will be delivered to
              ${Place} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here's the pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza(mainIngrediant, ...otherIngreduad) {
        console.log(mainIngrediant, otherIngreduad);
    }
};

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('B345'[0]);

console.log('23wsd'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(-2));