const open_tuesday = document.getElementById('open-tuesday');
const open_wednesday = document.getElementById('open-wednesday');
const close = document.querySelectorAll('.close');
const modal_container = document.getElementById('modal_container');
const modal_tuesday = document.getElementById('modal_tuesday');
const modal_wednesday = document.getElementById('modal_wednesday');
const wrapper_even = document.querySelector('.timetable__wrapper-even');
const wrapper_odd = document.querySelector('.timetable__wrapper-odd');


// Modal

open_tuesday.onclick = function () {
    modal_container.classList.add('show');
    modal_tuesday.classList.add('show');
};

close.forEach(function (item) {
    item.addEventListener('click', function() {
        modal_container.classList.remove('show');
        modal_tuesday.classList.remove('show');
        modal_wednesday.classList.remove('show');
    });
});

open_wednesday.onclick = function () {
    modal_container.classList.add('show');
    modal_wednesday.classList.add('show');
};

window.onclick = function (e) {
    if (e.target == modal_container) {
        modal_container.classList.remove('show');
        modal_tuesday.classList.remove('show');
        modal_wednesday.classList.remove('show');
    };
};


// Even / odd week

let elm = document.createElement('input');

elm.type = 'week';

elm.valueAsDate = new Date();

let week = elm.value.split('W').pop();

console.log(week);

/* var date = new Date();
console.log(date.getDate()) */


if ( week % 2 == 0 ) {
    console.log('Четная')
    wrapper_even.classList.add('current');
    wrapper_odd.classList.remove('current');
} else {
    console.log('Нечетная')
    wrapper_odd.classList.add('current');
    wrapper_even.classList.remove('current');
};