const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


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

/////////////////////



//TABBED COMPONENT

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

//Meanu fade anmation
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav')
            .querySelector('img');

        // console.log(link, siblings, logo);

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}

//ppassing argument into handler.

//scroll type alwasy fire when eve we r scrolling specially when using website on mobile

// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));


// // Sticky Navigation-----------------
// const intialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//     console.log(window.scrollY); //current scroll position.....

//     //make it sticky navigationn.......
//     if (window.scrollY > intialCoords.top) nav.classList.add('sticky')
//     else nav.classList.remove('sticky');
// });

// sticky navigation:  intersection observe API
// const obsCallBack =
//     function (entries/**array of threshold entries. */, observer) {
//         entries.forEach(entry => {
//             console.log(entry);
//         })
//     };
// const obsOptions = {
//     //root property:
//     root: null,
//     threshold: [0, 1, 0.2],//percentage Of intersection which observer call back will be called
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.
        isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
/** ----------CONSOLE LOG------------ */
// nav.classList
// DOMTokenList['nav', value: 'nav']
// script.js: 165 IntersectionObserverEntry { time: 173330.5, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, … }
// nav.classList
// DOMTokenList(2)['nav', 'sticky', value: 'nav sticky']
// script.js: 165 IntersectionObserverEntry { time: 181797.3999999985, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: true, … }
// nav.classList
// DOMTokenList['nav', value: 'nav']


//----------------------Reveal Section----------------------

//call back
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

//--------------------- lazy loading ----------------------
/**
 * .lazy-img {
    filter: blur(20px);
} really good for performance..... 
 */

const imgTaret = document.querySelectorAll('img[data-src]');
const loadImg = (entries, observe) => {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    //Replace src with data src  {--------happens behind the scene-----}
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '-200px',
});
imgTaret.forEach(img => imgObserver.observe(img));

//----------------------Slider component----------------------
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();

// /**
//  * ///////////////////////////////////////////////////////////////////////////////////////////////////////
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




//--------Life Cycle-------

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree Build', e);
});

window.addEventListener('load', function (e) {
    console.log('page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// })

