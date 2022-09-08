document.querySelectorAll('.tab__item').forEach((item) => 
    item.addEventListener('click', function (e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tab__item').forEach(
            (child) => child.classList.remove('tab__item__active'));
        document.querySelectorAll('.product__tabs__block').forEach(
            (child) => child.classList.remove('product__tabs__block__active'));

        item.classList.add('tab__item__active');
        document.getElementById(id).classList.add('product__tabs__block__active');
    })
);

document.querySelector('.tab__item').click();