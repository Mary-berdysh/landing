let burger = document.querySelector ('.burger');
console.log(burger);

let nav = document.querySelector ('.nav_burger');
console.log(nav);

burger.addEventListener('click', showNav);

function showNav(evt) {
    evt.preventDefault();
    nav.classList.toggle('showNav');
}