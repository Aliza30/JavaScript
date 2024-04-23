'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // ///////////////////////////////////////////////////

// // //there Multiple ways to call an API, 
// // //--------oldest school way---------
// // //Get information about countries via a RESTful API

const renderCountry = function (data, className = ' ') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data?.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data?.name?.official}</h3>
      <h4 class="country__region">${data?.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data?.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data?.languages.eng}</p>
      <p class="country__row"><span>💰</span>${data?.currencies}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

// // const getCountryandNeighbors = function (country) {

// //   //AJAX call country 1
// //   const request = new XMLHttpRequest(); //they still exist
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
// //   request.send();
// //   // console.log(request.responseText);
// //   //regester a call back
// //   request.addEventListener('load', function () {
// //     // console.log(this.responseText);
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     //render country------
// //     renderCountry(data);

// //     //Get neighbour country-----
// //     const neighbour = data.borders?.[0];
// //     if (!neighbour) return;

// //     // AJAX country 2
// //     const request2 = new XMLHttpRequest(); //they still exist
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);
// //       renderCountry(data2, 'neighbour');
// //     })
// //   });

// // };
// // getCountryandNeighbors('germany');


// // //----------call back hell------>

// // setTimeout(() => {
// //   console.log('1 secound pass');
// //   setTimeout(() => {
// //     console.log('2 secound pass');
// //     setTimeout(() => {
// //       console.log('3 secound pass');
// //       setTimeout(() => {
// //         console.log('4 secound pass');
// //       }, 1000)
// //     }, 1000)
// //   }, 1000)
// // }, 1000);



// const request = fetch('https://restcountries.com/v3.1/name/india')
// console.log(request);

// // In the method, we have to pass a callback.... 
// //As the promise fulfilled as soon as then Call back, will be executed.


// // const getCOuntryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
// //     console.log(response);
// //     return response.json(); // JSON method is available on all the response onject
// //     //but it is also syncronous....
// //   }).then(function (data) {
// //     console.log(data);
// //     renderCountry(data[0]);
// //   })
// // };
const getJSON = (url, errorMsg = `something went wrong`) => {
  return fetch(url).then(response => {
    if (!response) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

// // const getCountryData = function (country) {
// //   //country 1
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(response => {
// //       console.log(response);

//   if (!response.ok) {
//     throw new Error(`country not found ${response.status}`);
//   } //  Stating our own error message, if the country is not found
//   // this match search goes to the catch message, which will display on the page
//   return response.json();
// }
// //       // err => alert(err)
// //     )
// //     // JSON method is available on all the response onject //but it is also syncronous....
// //     .then(data => {
// //       renderCountry(data[0]);

// //       //country 2
// //       const neighbour = data[0].borders?.[0];//optional chaining
// //       if (!neighbour) return;
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response =>
// //       response.json(),
// //       // err => alert(err)
// //     )
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => { //alway use catch
// //       console.log(`${err} 🧨`),
// //         renderError(`somthing went wrong!!! ${err.message}.Try again`);
// //     })// will catch any kind of error through out this page
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     })// only work on promises.....
// // };
const getCountryData = function (country) {
  //country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')

    // JSON method is available on all the response onject //but it is also syncronous....
    .then(data => {
      renderCountry(data[0]);

      //country 2
      const neighbour = data[0].borders?.[0];//optional chaining
      if (!neighbour) throw new Error('no neighbour country');
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => { //alway use catch
      // console.log(`${err} 🧨`),
      renderError(`somthing went wrong!!! ${err.message}.Try again`);
    })// will catch any kind of error through out this page
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })// only work on promises.....
};

// btn.addEventListener('click', () => {
//   getCountryData('australia');
// });


///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
//fetch(`https://geocode.xyz/${lng},${lat}?geoit=json`)
// return fetch(`https://restcountries.com/v3.1/name/${data.country}`)

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};


// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);



// console.log('Test start');
// setTimeout(() => console.log(`o sec timer`), 0);
// Promise.resolve(`Resolved Promise1`).then(
//   res => console.log(res)
// );
// Promise.resolve(`Resolve promise 2`).then(res => {
//   for (let i = 0; i < 100; i++) { }
//   console.log(res)
// })
// console.log(`Test end`);


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lotty draw is happening`) //Micro task....
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won the lottery!');
    } else {
      reject(new Error('You lost the lottery'));
    }
  }, 2000);
})// executer funtion 
lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

//promisifiyinf SetTimeOut
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};


wait(2).then(() => {
  console.log(`I waited for 2 seconds`);
  return wait(1);
}).then(() => console.log(`I waited for 1 secoud`))


Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').then(x => console.log(x));

