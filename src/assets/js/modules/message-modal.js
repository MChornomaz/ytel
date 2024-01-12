// MESSAGE MODAL TABS
const messageModalTabsHandler = () => {
    const allTabBtn = document.querySelector('#allTabBtn');
    const unreadTabBtn = document.querySelector('#unreadTabBtn');

    const allTab = document.querySelector('#allTab');
    const unreadTab = document.querySelector('#unreadTab');

    allTabBtn.addEventListener('click', () => {
        allTabBtn.classList.add('active');
        allTab.classList.remove('hidden');
        unreadTabBtn.classList.remove('active');
        unreadTab.classList.add('hidden');
    })

    unreadTabBtn.addEventListener('click', () => {
        allTabBtn.classList.remove('active');
        allTab.classList.add('hidden');
        unreadTabBtn.classList.add('active');
        unreadTab.classList.remove('hidden');
    })
}

//MESSAGE MODAL BURGER
const messageModalBurgerHandler = () => {

    const messageBurgerIcon = document.querySelector('#message-toggle');
    const messageSidebarElement = document.querySelector('#messagesSidebar');

    messageBurgerIcon.addEventListener('click', () => {
        if(messageBurgerIcon.checked){
            messageSidebarElement.classList.add('active')
        } else {
            messageSidebarElement.classList.remove('active')
        }
    })
}

export {messageModalTabsHandler, messageModalBurgerHandler}