//VERTICAL MENU DROPDOWN
const runVerticalMenuDropdown = () => {

const verticalMenuBtn = document.querySelector('#verticalMenuBtn');
const verticalMenuDropdown = document.querySelector('#menuDropdownVertical');
const verticalMenuItems = document.querySelectorAll('.dropdown__item')

let verticalMenuIsShown = false;

verticalMenuBtn.addEventListener('click', (event) => {
    verticalMenuDropdown.classList.toggle('active');
    verticalMenuIsShown = verticalMenuDropdown.classList.contains('active');
    event.stopPropagation();
    
});

verticalMenuItems.forEach(el => el.addEventListener('click', (event) => {
    verticalMenuDropdown.classList.toggle('active');
    verticalMenuIsShown = verticalMenuDropdown.classList.contains('active');
    event.stopPropagation();
}));

document.addEventListener('click', () => {
    if (verticalMenuIsShown) {
        verticalMenuDropdown.classList.remove('active');
        verticalMenuIsShown = true;
    }
});
}

export {runVerticalMenuDropdown}