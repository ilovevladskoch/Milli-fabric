const loginOpen = document.querySelector('.login__popup'),
        loginBlock = document.querySelector('.login__block');

loginOpen.addEventListener('click', function (){
    loginBlock.classList.toggle('login__block__active');
});

const registerOpen = document.querySelector('.btn__register'),
        registerBlock = document.querySelector('.register__block');

    registerOpen.addEventListener('click', function (){
    registerBlock.classList.toggle('register__block__active');
    loginBlock.classList.remove('login__block__active');
});

const navBtn = document.querySelector('.toggle__btn');
const mobileNav = document.querySelector('.toggle__nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('toggle__nav__active');
    navBtn.classList.toggle('toggle__btn__close');
});

const catalogBtn = document.querySelector('.catalog');
const accordion = document.querySelector('.accordion');

catalogBtn.addEventListener('click', function (){
    accordion.classList.toggle('accordion__active');
});

const accordions = document.querySelectorAll('.accordion__item');
for(item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('accordion__item__active')){
            this.classList.remove('accordion__item__active');
        } else {
            for(el of accordions) {
                el.classList.remove('accordion__item__active');
            }
            this.classList.add('accordion__item__active');
        }
    })
};

const popBtn = document.querySelector('.btn__pay-2');
const popCont = document.querySelector('.pay__one__click');

popBtn.addEventListener('click', function () {
    popCont.classList.toggle('pay__one__click__active');
});

const popClose = document.querySelector('.btn__close');

popClose.addEventListener('click', function () {
    popCont.classList.toggle('pay__one__click__active');
});



