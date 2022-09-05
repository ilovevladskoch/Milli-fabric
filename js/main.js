const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile__nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile__nav__active');
    navBtn.classList.toggle('nav__mobile__close');
})
