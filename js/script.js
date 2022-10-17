const open = document.getElementById('open');
const close = document.getElementById('close');
const modal_container = document.getElementById('modal_container');

/* open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
}); */

open.onclick = function () {
    modal_container.classList.add('show');
}

close.onclick = function () {
    modal_container.classList.remove('show');
}

window.onclick = function (e) {
    if (e.target == modal_container) {
        modal_container.classList.remove('show');
    }
};