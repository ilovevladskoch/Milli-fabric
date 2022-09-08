const prev = document.querySelector('.btn__prev'),
        next = document.querySelector('.btn__next'),
        slides = document.querySelectorAll('.slider__item'),
        dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active__slide__item');
    }
    slides[n].classList.add('active__slide__item')
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active__dot');
    }
    dots[n].classList.add('active__dot');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length -1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
}) 

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);


const prevBtnCustomer = document.querySelector('.btn__prev__customer'),
        nextBtnCustomer = document.querySelector('.btn__next__customer'),
        slidesCustomer = document.querySelectorAll('.slider__item__customer'),
        dotsCustomer = document.querySelectorAll('.dot__customer');

let indexCustomer = 0;

const activeSlideCustomer = n => {
    console.log(n);
    for(slideCustomer of slidesCustomer) {
        slideCustomer.classList.remove('active__slider__item__customer');
    }
    slidesCustomer[n].classList.add('active__slider__item__customer')
}

const activeDotCustomer = n => {
    for(dot of dotsCustomer) {
        dot.classList.remove('active__dot__customer');
    }
    dotsCustomer[n].classList.add('active__dot__customer');
}

const prepareCurrentSlideCustomer = ind => {
    activeSlideCustomer(ind);
    activeDotCustomer(ind);
}

const nextSlideCustomer = () => {
    if(index == slidesCustomer.length -1) {
        index = 0;
        prepareCurrentSlideCustomer(index);
    } else {
        index++;
        prepareCurrentSlideCustomer(index);
    }
}

const prevSlideCustomer = () => {
    if(index == 0) {
        index = slidesCustomer.length -1;
        prepareCurrentSlideCustomer(index);
    } else {
        index--;
        prepareCurrentSlideCustomer(index);
    }
}

dotsCustomer.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlideCustomer(index);
    })
}) 

nextBtnCustomer.addEventListener('click', nextSlideCustomer);
prevBtnCustomer.addEventListener('click', prevSlideCustomer);

setInterval(nextSlideCustomer, 3000);