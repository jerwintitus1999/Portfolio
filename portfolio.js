document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 100);
        });

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onClick = ()=>{
    menu.classList.toggle('bx-x')
    navlist,classList.toggle('bx-x');
}