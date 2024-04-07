'use strict';
const restaurant = {
    name: 'pizzaria',
    location: 'London , France , Italy',
    categories: ['Italian', 'Indian', 'Chinise', 'Turkish'],
    staterMenu: ['Bread', 'cheese', 'grill chicken', 'garlic bread'],
    mainMenu: ['Pizza', 'Butter Chicken', 'tandoori Roti'],

    order: function (staterIndex, MainIndex) {
        return [this.staterMenu[staterIndex], this.mainMenu[MainIndex]];
    }
};

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];


const [x, y, z] = arr; // de-structuring arrau
console.log(x, y, z);
console.log(arr); //does not effect the original array.


const [first, , , secound] = restaurant.categories;
console.log(first, secound);


const [start, maincource] = restaurant.order(2, 1);
console.log(start, maincource);

//nested destruturing.
const nestedArray = [1, 3, [4, 5]];
const [i, , [k, l]] = nestedArray;
console.log(i, k, l);

//Default Values
const [p, q, r = 1] = [9, 8];
console.log(p, q, r);