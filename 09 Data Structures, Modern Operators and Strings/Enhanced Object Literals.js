
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


//in ES6 optional channing 
console.log(restaurant.openinghrs.mon?.open);
// if its empty then it will return undefine.


const days = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openinghrs[day]?.open ?? 'close';
    console.log(`open on ${day} at ${open}`);
}

// if (restaurant.openinghrs.mon) {
//     console.log(restaurant.openinghrs.mon.open);
// };

// if (restaurant.openinghrs.fri) {
//     console.log(restaurant.openinghrs.fri.open);
// };

