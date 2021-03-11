let menu = document.querySelector('#menu');
let menuBar = document.querySelector('#menuBar');

menuBar.addEventListener('click', function() {
    menu.classList.toggle('menu__toggle');
});