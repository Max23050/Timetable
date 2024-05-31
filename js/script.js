// Firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, deleteDoc, onSnapshot, query, where, orderBy, serverTimestamp, updateDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCqLCTgNjizV7udpyksjPT1haI8OEsrovU",
    authDomain: "timetable-ai222.firebaseapp.com",
    projectId: "timetable-ai222",
    storageBucket: "timetable-ai222.appspot.com",
    messagingSenderId: "689466657001",
    appId: "1:689466657001:web:7469fd66ff6e2ac9250878",
    measurementId: "G-F74HXQY49L"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

const colME = collection(db, 'monday-even'),
      colTE = collection(db, 'tuesday-even'),
      colWE = collection(db, 'wednesday-even'),
      colThE = collection(db, 'thursday-even'),
      colFE = collection(db, 'friday-even'),
      colMO = collection(db, 'monday-odd'),
      colTO = collection(db, 'tuesday-odd'),
      colWO = collection(db, 'wednesday-odd'),
      colThO = collection(db, 'thursday-odd'),
      colFO = collection(db, 'friday-odd');
                 

const mondayEven = document.querySelector('#monday-even'),
      tuesdayEven = document.querySelector('#tuesday-even'),
      wednesdayEven = document.querySelector('#wednesday-even'),
      thursdayEven = document.querySelector('#thursday-even'),
      fridayEven = document.querySelector('#friday-even'),
      mondayOdd = document.querySelector('#monday-odd'),
      tuesdayOdd = document.querySelector('#tuesday-odd'),
      wednesdayOdd = document.querySelector('#wednesday-odd'),
      thursdayOdd = document.querySelector('#thursday-odd'),
      fridayOdd = document.querySelector('#friday-odd');


function addElement(col, wrapper) {
    onSnapshot(col, (snapshot) => {  // colRef to q Queries
        let books = [];
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id });
        });
        books.sort((a, b) => {
            const [startHourA, startMinuteA] = a.time.split(' - ')[0].split(':').map(Number);
            const [startHourB, startMinuteB] = b.time.split(' - ')[0].split(':').map(Number);
            const [endHourA, endMinuteA] = a.time.split(' - ')[1].split(':').map(Number);
            const [endHourB, endMinuteB] = b.time.split(' - ')[1].split(':').map(Number);
      
            const startTimeA = startHourA * 60 + startMinuteA;
            const startTimeB = startHourB * 60 + startMinuteB;
            const endTimeA = endHourA * 60 + endMinuteA;
            const endTimeB = endHourB * 60 + endMinuteB;
      
            return startTimeA - startTimeB || endTimeA - endTimeB;
          });
        console.log(books);
        // Update the HTML with the current book list
        function waitEl() {
            const openWednesday = document.querySelectorAll('.open-wednesday');
            console.log(openWednesday);
            openWednesday.forEach((item) => {
                item.addEventListener('click', function() {
                    modalContainer.classList.add('show');
                    modalWednesday.classList.add('show');
                });
            });
        }
        wrapper.innerHTML = '';
        books.forEach((book) => {
            let typeClass = "timetable__block-type-lection";
            if (book.type === "Практика") {
                typeClass = "timetable__block-type-practice";
            } else if (book.type === "Лабораторная") {
                typeClass = "timetable__block-type-lab";
            } 
            if(book.modal == true) {
                wrapper.innerHTML += `
                    <div class="timetable__block-item">
                        <div class="timetable__block-title">${book.name}</div>
                        <div class="timetable__block-subtitle">${book.teacher}</div>
                        <div class="${typeClass}">${book.type}</div>
                        <div class="timetable__block-time">${book.time}</div>
                        <button class="${book.classButton}">Подключиться</button>
                    </div>
            `;
            const openTuesday = document.querySelectorAll('.open-tuesday');
            console.log(openTuesday);
            openTuesday.forEach((item) => {
                item.addEventListener('click', function() {
                    modalContainer.classList.add('show');
                    modalTuesday.classList.add('show');
                });
            });
              
            setTimeout(waitEl, 1000);
            
            } else {
                wrapper.innerHTML += `
                    <div class="timetable__block-item">
                        <div class="timetable__block-title">${book.name}</div>
                        <div class="timetable__block-subtitle">${book.teacher}</div>
                        <div class="${typeClass}">${book.type}</div>
                        <div class="timetable__block-time">${book.time}</div>
                        <div class="timetable__block-link">
                            <a href="${book.link}">Подключиться</a>
                        </div>
                    </div>
            `;
            }
        });
    });
}

addElement(colME, mondayEven);
addElement(colTE, tuesdayEven);
addElement(colWE, wednesdayEven);
addElement(colThE, thursdayEven);
addElement(colFE, fridayEven);
addElement(colMO, mondayOdd);
addElement(colTO, tuesdayOdd);
addElement(colWO, wednesdayOdd);
addElement(colThO, thursdayOdd);
addElement(colFO, fridayOdd);










const closeModal = document.querySelectorAll('.close');
const modalContainer = document.getElementById('modal_container');
const modalTuesday = document.getElementById('modal_tuesday');
const modalWednesday = document.getElementById('modal_wednesday');


// Modal

function close() {
    modalContainer.classList.remove('show');
    modalTuesday.classList.remove('show');
    modalWednesday.classList.remove('show');
}


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

if ( week % 2 != 0 ) {
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



