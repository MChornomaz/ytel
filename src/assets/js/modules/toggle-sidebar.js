const toggleSidebar = () => {
    const sidebarElement = document.querySelector('#leftSidebar');
    const verticalSidebar = document.querySelector('#verticalSidebar');
    const pageContentElement = document.querySelector('.page-content');
    const contentElement = document.querySelector('#content');
    const toggleLeftSidebarBtn = document.querySelector('#toggleSidebarLeftBtn');
    const toggleTopSidebarBtn = document.querySelector('#toggleSidebarTopBtn');
    const workingAreaElement = document.querySelector('#workingArea')


    let verticalSidebarShown = JSON.parse(localStorage.getItem('isVerticalSidebarShown')) || false ;

    if(verticalSidebarShown){
        verticalSidebar.classList.add('active')
            sidebarElement.classList.add('hidden');
            pageContentElement.classList.add('column')
            contentElement.classList.add('no-border')
            workingAreaElement.classList.add('small')
    } else {
        sidebarElement.classList.remove('hidden');
            pageContentElement.classList.remove('column')
            contentElement.classList.remove('no-border')
            verticalSidebar.classList.remove('active')
            workingAreaElement.classList.remove('small')
    }

    toggleLeftSidebarBtn.addEventListener('click', () => {
        let verticalSidebarShown = JSON.parse(localStorage.getItem('isVerticalSidebarShown')) || false ;
        if(!verticalSidebarShown){
            verticalSidebar.classList.add('active')
            sidebarElement.classList.add('hidden');
            pageContentElement.classList.add('column')
            contentElement.classList.add('no-border')
            workingAreaElement.classList.add('small')
            localStorage.setItem('isVerticalSidebarShown', true)
        } else  {
            sidebarElement.classList.remove('hidden');
            pageContentElement.classList.remove('column')
            contentElement.classList.remove('no-border')
            verticalSidebar.classList.remove('active')
            workingAreaElement.classList.remove('small')
            localStorage.setItem('isVerticalSidebarShown', false)
        }
    })

    toggleTopSidebarBtn.addEventListener('click', () => {
        let verticalSidebarShown = JSON.parse(localStorage.getItem('isVerticalSidebarShown')) || false ;
        if(!verticalSidebarShown){
            verticalSidebar.classList.add('active')
            sidebarElement.classList.add('hidden');
            pageContentElement.classList.add('column')
            contentElement.classList.add('no-border')
            workingAreaElement.classList.add('small')
            localStorage.setItem('isVerticalSidebarShown', true)
        } else  {
            sidebarElement.classList.remove('hidden');
            pageContentElement.classList.remove('column')
            contentElement.classList.remove('no-border')
            verticalSidebar.classList.remove('active')
            workingAreaElement.classList.remove('small')
            localStorage.setItem('isVerticalSidebarShown', false)
        }
    })
}

export {toggleSidebar}

