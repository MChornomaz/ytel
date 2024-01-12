const sidebarBurgerHandler = () => {
    const sidebarBurgerIcon = document.querySelector('#navi-toggle');
    const sidebarElement = document.querySelector('#leftSidebar');


    sidebarBurgerIcon.addEventListener('click', () => {
        if(sidebarBurgerIcon.checked){
            sidebarElement.classList.add('active')
        } else {
            sidebarElement.classList.remove('active')
        }
    })
}

export {sidebarBurgerHandler}