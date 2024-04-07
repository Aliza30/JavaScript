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
    orderPizza: function (mainIngrediant, ...otherIngreduad) {
        console.log(mainIngrediant, otherIngreduad);
    }
};

// restaurant.orderPizza('mushroom', 'onion', 'oliv');

// && and || operator

// console.log(3 || 'aliza');
// console.log('' || 'aliza');
// console.log(true || 'aliza');
// console.log(undefined || null);

// restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('----And----');

// console.log(3 && 'aliza');
// console.log(0 && 'aliza');
// console.log(undefined && null);


// //demo

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushroom', 'onion', 'oliv');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'onion', 'oliv');

// //restaurant.numGuest = 0;
// const guest = restaurant.numGuest ?? 10;
// console.log(guest);

const rest1 = {
    name: 'capri',
    numGuest: 20,
};

const rest2 = {
    name: 'la Pizzaria',
    owner: 'giovenr',
};

// rest1.numGuest = rest1.numGuest || 10;
rest1.numGuest ||= 10;

rest2.numGuest = rest2.numGuest || 10;
rest2.numGuest ||= 10;

console.log(rest1, rest2);