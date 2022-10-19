const open_tuesday = document.getElementById('open-tuesday');
const close_tuesday = document.getElementById('close-tuesday');
const modal_container_tuesday = document.getElementById('modal_container-tuesday');
const open_wednesday = document.getElementById('open-wednesday');
const close_wednesday = document.getElementById('close-wednesday');
const modal_container_wednesday = document.getElementById('modal_container-wednesday');

/* open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
}); */

open_tuesday.onclick = function () {
    modal_container_tuesday.classList.add('show');
};

close_tuesday.onclick = function () {
    modal_container_tuesday.classList.remove('show');
};

window.onclick = function (e) {
    if (e.target == modal_container_tuesday) {
        modal_container_tuesday.classList.remove('show');
    }
};

open_wednesday.onclick = function () {
    modal_container_wednesday.classList.add('show');
};

close_wednesday.onclick = function () {
    modal_container_wednesday.classList.remove('show');
};

window.onclick = function (e) {
    if (e.target == modal_container_wednesday) {
        modal_container_wednesday.classList.remove('show');
    }
};