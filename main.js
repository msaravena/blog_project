const  menuIcon = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('show_menu');
})