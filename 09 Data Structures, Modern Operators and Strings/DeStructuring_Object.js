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
    }

};

restaurant.orderDelivery({
    starterIndex: 0,
    MainIndex: 1,
    time: '12:30 PM',
    Place: '123 Main Street'
});

restaurant.orderDelivery({
    Place: '123 Main Street'
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;

console.log(restaurantName, hours, tags);


//Mutating Variable
let a = 111;
let b = 222;
const obj = { a: 23, b: 32, c: 23 };
({ a, b } = obj);
console.log(a, b);

//nested object
const { fri: { open, close } } = openingHours;
console.log(`open at:`, open, `close at:`, close);
