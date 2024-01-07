import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();

//MENU DROPDOWN

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




//MANUAL DIAL MODAL

const manualDialModal = document.querySelector('#manualDial')
const manualDialBtn = document.querySelector('#mDialBtn')
const closeManualDialBtn = document.querySelector('#mdialCloseBbtn')
const backdrop = document.querySelector('.backdrop')



if(manualDialModal && backdrop){
    manualDialBtn.addEventListener('click', () => {
        manualDialModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeManualDialBtn.addEventListener('click', () => {
        manualDialModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


