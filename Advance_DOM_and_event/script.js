const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//used CALLBACK funtion to add event listener to the btn.
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


/**
 * 
 * SELECTION , CEATION AND DELETION
 * 
 */
//-------------------------- SELECTION -------------------------------

console.log(document.documentElement);
console.log(document.body);
console.log(document.querySelectorAll('.section'));
console.log(document.getElementById('section--1'));

console.log(document.getElementsByTagName('button'));
// return HTML collection .... if there is change in dom --> this html collection also changes ... 

console.log(document.getElementsByClassName('btn'));
// return HTML collection .... if there is change in dom --> this html collection also changes ...

//-------------------------- CREATION -------------------------------

const header = document.querySelector('header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
    'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//-------------------------- deletion -------------------------------

document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.remove();
    });

//only work for innline style
message.style.background = '#32234';
message.style.width = '120%';
console.log(message.style.color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';


// document.documentElement.style.setProperty(
//     '--color-primary', 'orangered'
// );

// ATTRIBUTED 
/**
 * can access standard property.... like id, src,alt....
 */
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//we can define statement to these attributes
logo.alt = 'beautiful logo';
console.log(logo.alt);

//if you want to access no standard attribute which is define by maker
console.log(logo.getAttribute('designer'));
// we can also set attribute
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));


//Data ATTRIVBUTe
console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// console.log(logo.classList);
