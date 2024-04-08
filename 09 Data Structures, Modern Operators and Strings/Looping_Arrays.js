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

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here's the pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza: function (mainIngrediant, ...otherIngreduad) {
        console.log(mainIngrediant, otherIngreduad);
    }
};


//console.log(menu.entries());



// KEYWORD: -----Key-----

for (const day of Object.keys(restaurant.openingHours)) {
    console.log(day);
}

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openstr = `we are open on ${properties.length} days: `;
for (const day of properties) {
    openstr += `${day} ,`;
}
console.log(openstr);

const value = Object.values(restaurant.openingHours);
console.log(value);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`on ${key} we are open at ${open} and close at ${close}`);
}

//------ DATA STRUCTURE:  "Set"----------------

const staff = new Set([
    'Waiter',
    'Manager',
    'Owner',
    'Waiter',
    'Manager',
    'Cook'
]);

console.log(staff);
staff.add('customer')
console.log(staff);

//------ DATA STRUCTURE:  "Map"----------------