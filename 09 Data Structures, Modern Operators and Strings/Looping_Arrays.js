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


const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

// rest.clear();

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);

console.log(question);


const hourmap = new Map(Object.entries(restaurant.openingHours));
console.log(hourmap);


for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}:${value}`);
    }
}

//const ans = Number(prompt('Your answer'));
// console.log(ans);
const ans = 3;
console.log(question.get(question.get('correct') === ans));


//convet map to array
console.log([...question]);
