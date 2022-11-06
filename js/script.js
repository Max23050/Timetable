const open_tuesday = document.querySelectorAll('.open-tuesday');
const open_wednesday = document.querySelectorAll('.open-wednesday');
const close = document.querySelectorAll('.close');
const modal_container = document.getElementById('modal_container');
const modal_tuesday = document.getElementById('modal_tuesday');
const modal_wednesday = document.getElementById('modal_wednesday');
const wrapper_even = document.querySelector('.timetable__wrapper-even');
const wrapper_odd = document.querySelector('.timetable__wrapper-odd');
const saturday_monday = document.querySelector('.timetable__block-mon');
const saturday_tuesday = document.querySelector('.timetable__block-tue');
const saturday_wednesday = document.querySelector('.timetable__block-wed');
const saturday_thursday = document.querySelectorAll('.timetable__block-thu');
const saturday_friday = document.querySelectorAll('.timetable__block-fri');
const select = document.querySelector('select');



// Modal


open_tuesday.forEach(function (item) {
    item.addEventListener('click', function() {
        modal_container.classList.add('show');
        modal_tuesday.classList.add('show');
    });
});

close.forEach(function (item) {
    item.addEventListener('click', function() {
        modal_container.classList.remove('show');
        modal_tuesday.classList.remove('show');
        modal_wednesday.classList.remove('show');
    });
});


open_wednesday.forEach(function (item) {
    item.addEventListener('click', function() {
        modal_container.classList.add('show');
        modal_wednesday.classList.add('show');
    });
});

window.onclick = function (e) {
    if (e.target == modal_container) {
        modal_container.classList.remove('show');
        modal_tuesday.classList.remove('show');
        modal_wednesday.classList.remove('show');
    };
};


// Even / odd week


let DateTime = luxon.DateTime;
const week = DateTime.now().weekNumber;
console.log(week)


if ( week % 2 == 0 ) {
    console.log('Четная');
    wrapper_even.classList.add('current');
    wrapper_odd.classList.remove('current');
    select.value == 'even';
} else {
    console.log('Нечетная');
    wrapper_odd.classList.add('current');
    wrapper_even.classList.remove('current');
    select.value == 'odd';
};


// Saturday script


switch(week) {
    case 44: 
    saturday_monday.classList.add('current_sat');
    saturday_thursday.forEach(function (item) {
        item.classList.remove('current_sat');
    });
      break;
    case 45:
      saturday_tuesday.classList.add('current_sat');
      saturday_friday.forEach(function (item) {
        item.classList.remove('current_sat');
    });
    saturday_thursday.forEach(function (item) {
        item.classList.remove('current_sat');
    });
    saturday_monday.classList.add('current_sat');
      break;
    case 46: 
      saturday_wednesday.classList.add('current_sat');
      break;
    case 47: 
    saturday_friday.forEach(function (item) {
        item.classList.remove('current_sat');
    });
    saturday_thursday.forEach(function (item) {
        item.classList.add('current_sat');
    });
      break;
    case 48: 
    saturday_thursday.forEach(function (item) {
        item.classList.remove('current_sat');
    });
    saturday_friday.forEach(function (item) {
        item.classList.add('current_sat');
    });
      break;
};


// Select odd / even 
/* const select = document.querySelector('select'); */


select.addEventListener('change', function() {
    if (select.value == 'even' ) {
        wrapper_even.classList.add('current');
        wrapper_odd.classList.remove('current');
    } else if (select.value == 'odd') {
        wrapper_odd.classList.add('current');
        wrapper_even.classList.remove('current');
    };
});

