const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (staterIndex, MainIndex) {
        return [this.staterMenu[staterIndex], this.mainMenu[MainIndex]];
    },

    orderDelivery: function ({ starterIndex = 2,
        MainIndex = 1,
        time = 'in 20 min',
        Place }) {
        console.log(
            `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[MainIndex]} will be delivered to ${Place} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here's the pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
};


//const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
//  console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


//object: real world problem

const newRestur = {
    founded: 1999,
    ...restaurant
};

console.log(newRestur)


const arr = [7, 8, 9];
//console.log(arr);

const newArr = [1, 2, 3, 4, ...arr];
// console.log(newArr);
// console.log(...newArr);

const newarr = [1, 2, 3, 4, arr];
//console.log(newarr);

const newMenu = [...restaurant.mainMenu, 'fish curry'];
console.log(newMenu);


//copy array
const MainMenuCopy = [...restaurant.mainMenu];

//join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//Iterables are: arrays, string , map, set not object
const str = 'Aliza';
const letter = [...str, '', 'A.'];
console.log(letter);






