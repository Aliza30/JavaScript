const age = prompt("enter age");
const isold = age >= 18;

/*----------------a control structure-------------------*/

if (isold) {
    console.log("can strt driving ✅ ")
}
else {
    console.log("underage", 18 - age);
}


const mark = 95;
const markheight = 1.8;
const john = 85;
const johnheight = 1.74;

const markBMI = mark / markheight ** 2;
const johnBMI = john / johnheight ** 2;

if (markBMI > johnBMI) {
    console.log("Marks BMI is heigh", markBMI);
}
else {
    console.log("John BMI is heigh", johnBMI);
}