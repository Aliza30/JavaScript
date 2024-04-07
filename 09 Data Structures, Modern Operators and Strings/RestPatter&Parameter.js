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

// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// 1) Destructuriing...
const [Pizza, , pie, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(Pizza, pie, otherFood);

const { sta, ...wekdays } = restaurant.openingHours;
console.log(wekdays);

//2) Function

const add = function (...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++)
        sum += num[i];
    console.log(sum);
}
add(2, 3);
add(2, 3, 4, 5, 6, 7);
add(2, 3, 4, 523, 3, 11, 223, 4, 5);

const x = [23, 4, 33, 2];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'oliv');