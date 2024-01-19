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
            const customerInfoData = JSON.parse(localStorage.getItem('customerInfoElementPositionAndSize'))
            if(customerInfoData.x < 100){
                customerInfoData.x =  100
            localStorage.setItem('customerInfoElementPositionAndSize', JSON.stringify(customerInfoData))
            }

            const scriptsData = JSON.parse(localStorage.getItem('scriptsElementPositionAndSize'))
            if(scriptsData.x < 100){
                scriptsData.x =  100
            localStorage.setItem('scriptsElementPositionAndSize', JSON.stringify(scriptsData))
            }
            
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
            const customerInfoData = JSON.parse(localStorage.getItem('customerInfoElementPositionAndSize'))
            customerInfoData.x = customerInfoData.x + 260
            localStorage.setItem('customerInfoElementPositionAndSize', JSON.stringify(customerInfoData))
        } else  {
            sidebarElement.classList.remove('hidden');
            pageContentElement.classList.remove('column')
            contentElement.classList.remove('no-border')
            verticalSidebar.classList.remove('active')
            workingAreaElement.classList.remove('small')
            sidebarElement.style.display = 'flex';
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

