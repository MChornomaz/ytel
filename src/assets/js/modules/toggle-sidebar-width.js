const toggleSidebarWidth = () => {
    const logo = document.querySelector('#logo');
    const sidebar = document.querySelector('#leftSidebar');
    const menuDropdown = document.querySelector('#menuDropdown');

    let sidebarMinimized = JSON.parse(localStorage.getItem('sidebarMinimized')) || false;
    if(sidebarMinimized){
        sidebar.classList.add('minimized')
        menuDropdown.classList.add('minimized')
    } else {
        sidebar.classList.remove('minimized')
        menuDropdown.classList.remove('minimized')
    }

    logo.addEventListener('click', () => {
        if(!sidebarMinimized){
            localStorage.setItem('sidebarMinimized', true)
            sidebar.classList.add('minimized')
            menuDropdown.classList.add('minimized')
        }else {
            localStorage.setItem('sidebarMinimized', false)
            sidebar.classList.remove('minimized')
            menuDropdown.classList.remove('minimized')
        }
    })

}

export {toggleSidebarWidth}