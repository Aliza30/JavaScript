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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
    // console.log(e.target.getBoundingClientRect());


    //-----------------OLD SCHOOL STYLE-----------------
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });
    section1.scrollIntoView({ behavior: 'smooth' });
});

//-------------------------PAGE NAVIGATION-------------------


// document.querySelectorAll('.nav__link').forEach
//     (function (el) {
//         el.addEventListener('click', function (e) {
//             e.preventDefault();

//             const id = this.getAttribute('href');
//             console.log(id);
//             document.querySelector(id)
//                 .scrollIntoView({ behavior: 'smooth' });
//         });
//     });

//------------EVENT DELIGATION----- VERY IMORTANT----------
//ADD EVENT LISTENER TO COMMON PARENT ELEMENT
// DETERMIE WHAT ELEMENT ORIGINATED THE EVENT
document.querySelector('.nav__link').addEventListener('click', function (e) {
    console.log(e.target);
    //--------MAtching strategy------->
    if (e.target.classList.contains('nav__link')) {
        console.log('link');
        e.preventDefault();
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id)
            .scrollIntoView({ behavior: 'smooth' });
    }
});


//TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__tab--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');
    // console.log(clicked.dataset.tab);

    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});



// /**
//  * 
//  * ----------------------STUDY MATERIAL----------------------
//  * 
//  * 
//  * 
//  * SELECTION , CEATION AND DELETION
//  * 
//  */
// //-------------------------- SELECTION -------------------------------

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--1'));

// console.log(document.getElementsByTagName('button'));
// // return HTML collection .... if there is change in dom --> this html collection also changes ... 

// console.log(document.getElementsByClassName('btn'));
// // return HTML collection .... if there is change in dom --> this html collection also changes ...

// //-------------------------- CREATION -------------------------------

// const header = document.querySelector('header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//     'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //-------------------------- deletion -------------------------------

// document
//     .querySelector('.btn--close-cookie')
//     .addEventListener('click', function () {
//         message.remove();
//     });

// //only work for innline style
// message.style.background = '#32234';
// message.style.width = '120%';
// console.log(message.style.color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';


// // document.documentElement.style.setProperty(
// //     '--color-primary', 'orangered'
// // );

// // ATTRIBUTED 
// /**
//  * can access standard property.... like id, src,alt....
//  */
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// //we can define statement to these attributes
// logo.alt = 'beautiful logo';
// console.log(logo.alt);

// //if you want to access no standard attribute which is define by maker
// console.log(logo.getAttribute('designer'));
// // we can also set attribute
// logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));


// //Data ATTRIVBUTe
// console.log(logo.dataset.versionNumber);

// // Classes
// // logo.classList.add('c', 'j');
// // logo.classList.remove('c', 'j');
// // logo.classList.toggle('c');
// // logo.classList.contains('c'); // not includes

// // console.log(logo.classList);


//------------event and types of event-----------

const h1 = document.querySelector('h1');

const alerth1 = function (e) {
    alert(`addEventListener ! great it worling`);

    //    h1.removeEventListener('mouseenter', alerth1);
};

h1.addEventListener('mouseenter', alerth1);

setTimeout(() =>
    h1.removeEventListener('mouseenter', alerth1), 3000);

//old school----->
// h1.onmouseenter = function (e) {
//     alert(`addEventListener ! great it worling`);
// };

//why even lister is better boz it allow multiple event listener to a event


//----------EVENT BUBBLING------------

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//     `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor(0, 255));

// document.querySelector('.nav__link')
//     .addEventListener('click', function (e) {
//         this.style.backgroundColor = randomColor();
//         console.log('LINK', e.target, e.currentTarget);

//         //STOP PROPOPAGTION
//         // e.stopPropagation();

//     });

// document.querySelector('.nav__links')
//     .addEventListener('click', function (e) {
//         console.log('LINK');
//         this.style.backgroundColor = randomColor();
//         console.log('LINK', e.target, e.currentTarget);
//     });

// document.querySelector('.nav')
//     .addEventListener('click', function (e) {
//         console.log('LINK');
//         this.style.backgroundColor = randomColor();
//         console.log('Nav', e.target, e.currentTarget);
//     },
//         true,// capturing.... only for historical reasons
//     );

// const h1 = document.querySelector('h1');

//---------Going downward: child----->
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// console.log(h1.childNodes);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'green';

/**-----Going Upwards------ */
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.background = 'var(--gradient-primary)';
// // h1.closest('h1').style.background = 'var(--gradient-primary)';

// console.log(h1.previousElementSibling);
// console.log(h1.nextSibling);


