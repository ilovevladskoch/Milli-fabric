const navBtn = document.querySelector('.toggle__btn');
const mobileNav = document.querySelector('.toggle__nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('toggle__nav__active');
    navBtn.classList.toggle('toggle__btn__close');
})
