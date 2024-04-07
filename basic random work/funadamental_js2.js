/**-----------------------Functions---------------------------- */

// function fruiteJuicer(apple, oranges) {
//     const quant = `Juice with ${apple} apple and ${oranges} oranges `;
//     return quant;
// }

// console.log(fruiteJuicer(3, 5));

/**-----------------------Functions Expression--------------------------- */
/**-------------------Arrow(=>)Functions---------------------------- */


const age = birthyear => 2024 - birthyear;

// console.log(age(1991));

// retirement functon
const retirement = (birthyear, name) => {
    const age = 2037 - birthyear;
    const reiretmentyear = 65 - age;
    return `${name} have ${reiretmentyear} until retirement`;
}

// console.log(retirement(1980, 'pizza'));




function fruiteJuicer(apple, oranges) {
    const quant = `Juice with ${apple} apple and ${oranges} oranges `;
    return quant;
}