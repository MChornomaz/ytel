
//MENU DROPDOWN
const runMenuDropdown = () => {

const menuBtn = document.querySelector('#menuBtn');
const menuDropdown = document.querySelector('#menuDropdown');
const menuItems = document.querySelectorAll('.dropdown__item')

let menuIsShown = false;

menuBtn.addEventListener('click', (event) => {
    menuDropdown.classList.toggle('active');
    menuIsShown = menuDropdown.classList.contains('active');
    event.stopPropagation();
});

menuItems.forEach(el => el.addEventListener('click', (event) => {
    menuDropdown.classList.toggle('active');
    menuIsShown = menuDropdown.classList.contains('active');
    event.stopPropagation();
}));

document.addEventListener('click', () => {
    if (menuIsShown) {
        menuDropdown.classList.remove('active');
        menuIsShown = true;
    }
});
}

export {runMenuDropdown}