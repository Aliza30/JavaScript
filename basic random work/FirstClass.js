
let masks = [83, 43, 23, 45, 65, 21, 34];
let sum = 0;
for (let i = 0; i < masks.length; i++) {
    sum = sum + masks[i];
}
let avg = sum / masks.length;

console.log(`The average is = ${avg}`);

let cost = [230, 220, 300, 120, 260]
let idx = 0;

for (let val of cost) {
    console.log(`the value of item ${idx}= ${val}`);
    let offer = val / 10;
    cost[idx] = cost[idx] - offer;
    console.log(`new price = ${cost[idx]}`)
    idx++;
}
// /*---------------------------Function------------------*/
function sum(x, y) {
    console.log(x + y)
}
/*-----------------------------Arrow------------------*/
let multi = (a, b) => {
    // console.log(a * b);
}
multi(7, 8);

function countVowel(str) {
    let count = 0;
    for (const ch of str) {
        count++;
    }
    console.log(count);
}


let stud = {
    name: "Aliza",
    age: 20,
    cgpa: 8.5,
    isPass: true,
};

for (let i in stud) {
    console.log(i, "=", stud[i]);
}
// i : key eg.Name   ||  stud[i] : value of key eg.Aliza
// name = Aliza
// FirstClass.js: 48 age = 20
// FirstClass.js: 48 cgpa = 8.5
// FirstClass.js: 48 isPass = true

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) { console.log(i); }
}

/*------------------game------------------------*/


let gamenum = 25;

let usernum = prompt("guess the game number");

while (usernum != gamenum) {
    usernum = prompt("you enteres wrong number");
}
alert("wow u guess it write ", gamenum)
console.log("wow u guess it write", usernum);