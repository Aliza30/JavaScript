'use strict';

// const temp = [3, -2, -6, -1, 'error', 9, 4, 12, 33, 43, 2, 14];
// const calTemp = function (temp) {
//     let max = temp[0];
//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] > max)
//             max = temp[i];
//     }
//     console.log(max);
// };
// calTemp([3, 4, 5, 6, 23]);

const data = [12, 32, 44, 11, 23];


const print_forcast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]} is the temp on ${i + 1} day...`
    }
    console.log(str);
}

print_forcast(data);