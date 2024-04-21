'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////////////////

// //there Multiple ways to call an API, 
// //--------oldest school way---------
// //Get information about countries via a RESTful API

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
  // countriesContainer.style.opacity = 1;
}


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}

// const getCountryandNeighbors = function (country) {

//   //AJAX call country 1
//   const request = new XMLHttpRequest(); //they still exist
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//   request.send();
//   // console.log(request.responseText);
//   //regester a call back
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country------
//     renderCountry(data);

//     //Get neighbour country-----
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;

//     // AJAX country 2
//     const request2 = new XMLHttpRequest(); //they still exist
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     })
//   });

// };
// getCountryandNeighbors('germany');


// //----------call back hell------>

// setTimeout(() => {
//   console.log('1 secound pass');
//   setTimeout(() => {
//     console.log('2 secound pass');
//     setTimeout(() => {
//       console.log('3 secound pass');
//       setTimeout(() => {
//         console.log('4 secound pass');
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000);



const request = fetch('https://restcountries.com/v3.1/name/india')
console.log(request);

// In the method, we have to pass a callback.... 
//As the promise fulfilled as soon as then Call back, will be executed.


// const getCOuntryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     console.log(response);
//     return response.json(); // JSON method is available on all the response onject
//     //but it is also syncronous....
//   }).then(function (data) {
//     console.log(data);
//     renderCountry(data[0]);
//   })
// };

const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json(),
      // err => alert(err)
    )
    // JSON method is available on all the response onject //but it is also syncronous....
    .then(data => {
      renderCountry(data[0]);

      //country 2
      const neighbour = data[0].borders?.[0];//optional chaining
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response =>
      response.json(),
      // err => alert(err)
    )
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 🧨`),
        renderError(`somthing went wrong!!! ${err.message}.Try again`);
    })// will catch any kind of error through out this page
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })// only work on promises.....
};

btn.addEventListener('click', () => {
  getCountryData('uae');
});

getCountryData('dasnkaskdk');
