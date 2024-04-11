
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log('B345'[0]);

// console.log('23wsd'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(-2));

// const checkmiddleseat = function (seat) {
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log(`u got middle sear`)
//     }
// }

// checkmiddleseat('11B');
// checkmiddleseat('34E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// const sent = 'the emergency doors are in middle front and end';
// console.log(sent.replace(/door/g, 'gate')); // Output: 'the emergency gates are in middle front and end'

// console.log(sent.includes('door')); // Output: true
// console.log(sent.startsWith('door')); // Output: false


// const loginemail = '    aliza@gmail.com  \n';
// const checkemail = loginemail.toLowerCase().trim();
// console.log(checkemail);

// console.log('a+very+nice+string'.split('+'));
// console.log('Johnas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Johnas Schmedtmann'.split(' ');

// const text = "pio";
// console.log(text.padStart(14, "x"));
// console.log(text.padEnd(14, "x"));
const getcode = str => str.slice(0, 3).toUpperCase();


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));
for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    // console.log(type, from, to, time);
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${getcode(from)} to ${getcode(to)} ${time.replaceAll(':', 'h')}`.padStart(48);
    console.log(output);
}