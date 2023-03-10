const openTuesday = document.querySelectorAll('.open-tuesday');
const openWednesday = document.querySelectorAll('.open-wednesday');
const closeModal = document.querySelectorAll('.close');
const modalContainer = document.getElementById('modal_container');
const modalTuesday = document.getElementById('modal_tuesday');
const modalWednesday = document.getElementById('modal_wednesday');


// Modal

function close() {
    modalContainer.classList.remove('show');
    modalTuesday.classList.remove('show');
}


openTuesday.forEach((item) => {
    item.addEventListener('click', function() {
        modalContainer.classList.add('show');
        modalTuesday.classList.add('show');
    });
});

openWednesday.forEach(function (item) {
    item.addEventListener('click', function() {
        modalContainer.classList.add('show');
        modalWednesday.classList.add('show');
    });
});

closeModal.forEach((item) => {
    item.addEventListener('click', close);
});


window.onclick = (e) => {
    if (e.target == modalContainer) {
        close();
    }
};


// Even / odd week

const wrapperEven = document.querySelector('.timetable__wrapper-even');
const wrapperOdd = document.querySelector('.timetable__wrapper-odd');


let DateTime = luxon.DateTime;
const week = DateTime.now().weekNumber;
console.log(week);


function setSelectValue (id, val) {
    document.getElementById(id).value = val;
}

if ( week % 2 == 0 ) {
    console.log('Четная');
    wrapperEven.classList.add('current');
    wrapperOdd.classList.remove('current');
    setSelectValue('week', 'even');
} else {
    console.log('Нечетная');
    wrapperOdd.classList.add('current');
    wrapperEven.classList.remove('current');
    setSelectValue('week', 'odd');
}

// Select odd / even 
const select = document.querySelector('select');


select.addEventListener('change', () => {
    if (select.value == 'even' ) {
        wrapperEven.classList.add('current');
        wrapperOdd.classList.remove('current');
    } else if (select.value == 'odd') {
        wrapperOdd.classList.add('current');
        wrapperEven.classList.remove('current');
    }
});

