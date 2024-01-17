// WINDOWS CONTROLS
const windowsControlsHandler = () => {

    //customer info elements
    const customerInfoElement = document.querySelector('#customerWindow')
    const trayCustomerInfoBtn = document.querySelector('#unlockCustomer')
    const expendCustomerInfoBtn = document.querySelector('#expendCustomer')
    const minimizeCustomerInfoBtn  = document.querySelector('#minimizeCustomer')
    const customerInfoExpectBtn = document.querySelector('#customerInfoExpectBtn')
    const customerTrayElement = document.querySelector('#customerInfoTray')
    const customerInfoDragContainer = document.querySelector('#customerInfoDragContainer')
    const formsBtn = document.querySelector('#formsBtn')
    const formsBtnHorizontalSidebar = document.querySelector('#formsBtn1')


    //scripts elements
    const scriptsElement = document.querySelector('#scriptsElement')
    const trayScriptsBtn = document.querySelector('#unlockScripts')
    const expendScriptsBtn = document.querySelector('#expendScripts')
    const minimizeScriptsBtn = document.querySelector('#minimizeScripts')
    const closeScriptsBtn = document.querySelector('#closeScripts')
    const scriptsTrayElement = document.querySelector('#scriptsTray')
    const scriptsExpectBtn = document.querySelector('#scriptsExpectBtn')
    const sidebarScriptsBtn = document.querySelector('#scriptBtn')
    const topSidebarScriptsBtn = document.querySelector('#scriptBtn1')
    const scriptDragContainer = document.querySelector('#scriptDragContainer')
    

    let scriptsAreActive = !scriptDragContainer.classList.contains('hidden')

    const trayElement = document.querySelector('#tray');

    let customerTrayActive = false;
    let scriptsTrayActive = false;


    // call script element

    sidebarScriptsBtn.addEventListener('click', () => {
        scriptDragContainer.classList.toggle('hidden')
    })

    // call script element top sidebar

    topSidebarScriptsBtn.addEventListener('click', () => {
        scriptDragContainer.classList.toggle('hidden')
    })

    // call forms element left sidebar

    formsBtn.addEventListener('click', () => {
        customerInfoDragContainer.classList.toggle('hidden')
    })

    // call forms element top sidebar

    formsBtnHorizontalSidebar.addEventListener('click', () => {
        customerInfoDragContainer.classList.toggle('hidden')
    })


    //tray Customer Window

    trayCustomerInfoBtn.addEventListener('click', () => {
        trayElement.classList.add('active')
        customerTrayElement.classList.add('active');
        customerInfoDragContainer.classList.add('hidden')
        customerInfoDragContainer.classList.remove('expended')
        sidebarElement.style.display = 'flex';

        customerTrayActive = true;
    })

    //expect customer info

    customerInfoExpectBtn.addEventListener('click', () => {
        customerTrayElement.classList.remove('active');
        customerInfoDragContainer.classList.remove('hidden')
        scriptDragContainer.classList.remove('expended')
        sidebarElement.style.display = 'flex';

        if(!customerTrayActive || !scriptsTrayActive){
            trayElement.classList.remove('active')
        }

        customerTrayActive = false
    })

    //expend customer info
    let customerWindowExpanded = false;
    const sidebarElement = document.querySelector('#leftSidebar')
    const sidebarTopElement = document.querySelector('#verticalSidebar')

    expendCustomerInfoBtn.addEventListener('click', () => {
        if (!customerWindowExpanded) {
            const rect = customerInfoElement.getBoundingClientRect();
            let storedData = {
                width: rect.width,
                height: rect.height,
                y: rect.top,
                x: rect.left,
                zIndex: parseInt(customerInfoElement.style.zIndex) || 10 
            };
            localStorage.setItem('customerTempData', JSON.stringify(storedData))
            
    
            customerInfoElement.style.maxWidth = '100vw';
            customerInfoElement.style.width = '100vw';
            customerInfoElement.style.height = '100vh';
            customerInfoElement.style.top = 0;
            customerInfoElement.style.left = 0;
            customerInfoElement.style.transform = 'translate(0px, 0px)';
            customerInfoElement.style.zIndex = 999;
            customerWindowExpanded = true
            sidebarElement.style.display = 'none';
            sidebarTopElement.style.transform = 'translateY(-100%)';
        } else {

            const tempData = localStorage.getItem('customerTempData')

            let { x, y, width, height, zIndex } = JSON.parse(tempData);
            customerInfoDragContainer.classList.remove('expended');
    
            customerInfoElement.style.width = width + 'px';
            customerInfoElement.style.height = height + 'px';
            customerInfoElement.style.top = y + 'px';
            customerInfoElement.style.left = x + 'px';
            customerInfoElement.style.zIndex = zIndex;
            customerWindowExpanded = false
            sidebarElement.style.display = 'flex';
            sidebarTopElement.style.transform = 'translateY(0)';
            localStorage.removeItem('customerTempData');
        }
    });


    //expend scripts
    let scriptsWindowExpanded = false;

    expendScriptsBtn.addEventListener('click', () => {

        if (!scriptsWindowExpanded) {
            const rect = scriptsElement.getBoundingClientRect();
            let storedData = {
                width: rect.width,
                height: rect.height,
                y: rect.top,
                x: rect.left,
                zIndex: parseInt(scriptsElement.style.zIndex) || 10 
            };
            localStorage.setItem('scriptsTempData', JSON.stringify(storedData))
    
            scriptsElement.style.maxWidth = '100vw';
            scriptsElement.style.width = '100vw';
            scriptsElement.style.height = '100vh';
            scriptsElement.style.top = 0;
            scriptsElement.style.left = 0;
            scriptsElement.style.transform = 'translate(0px, 0px)';
            scriptsElement.style.zIndex = '999';
            sidebarElement.style.display = 'none';
            sidebarTopElement.style.transform = 'translateY(-100%)';
            scriptsWindowExpanded = true
        } else {
            const tempData = localStorage.getItem('scriptsTempData')
            let { x, y, width, height, zIndex } = JSON.parse(tempData);
            customerInfoDragContainer.classList.remove('expended');
    
            scriptsElement.style.width = width + 'px';
            scriptsElement.style.height = height + 'px';
            scriptsElement.style.top = y + 'px';
            scriptsElement.style.left = x + 'px';
            scriptsElement.style.zIndex = zIndex;
            scriptsWindowExpanded = false
            sidebarElement.style.display = 'flex';
            sidebarTopElement.style.transform = 'translateY(0)';
            localStorage.removeItem('scriptsTempData');
        }
    })


    //close scripts
    closeScriptsBtn.addEventListener('click', () => {
        scriptDragContainer.classList.add('hidden')
        scriptDragContainer.classList.remove('expended')
        sidebarElement.style.display = 'flex';
        scriptsAreActive = false;
    })


    //tray Scripts Window

    trayScriptsBtn.addEventListener('click', () => {
        trayElement.classList.add('active')
        scriptsTrayElement.classList.add('active');
        scriptDragContainer.classList.add('hidden')
        scriptDragContainer.classList.remove('expended')
        sidebarElement.style.display = 'flex';

        scriptsTrayActive = true;
    })

    //expect scripts
    scriptsExpectBtn.addEventListener('click', () => {
        scriptsTrayElement.classList.remove('active');
        scriptDragContainer.classList.remove('hidden')
        customerInfoDragContainer.classList.remove('expended')
        sidebarElement.style.display = 'flex';

        if(!customerTrayActive || !scriptsTrayActive){
            trayElement.classList.remove('active')
        }

        scriptsTrayActive = false
    })

    //minimize Customer Info

    let customerInfoMinimized = false;

    minimizeCustomerInfoBtn.addEventListener('click', () => {
        if(!customerInfoMinimized){
            customerInfoDragContainer.classList.toggle('minimized')
            customerInfoElement.style.height = '60px'
            customerInfoElement.style.minHeight = '60px'
            sidebarElement.style.display = 'flex';
            customerInfoMinimized = true;
        } else{

            let storedData = localStorage.getItem('customerInfoElementPositionAndSize');
            customerInfoDragContainer.classList.toggle('minimized')

            if (storedData) {
            let { height } = JSON.parse(storedData);
            customerInfoElement.style.height = height;
            console.log(height)
            } else {
                customerInfoElement.style.height = '100%';
            }   
            customerInfoElement.style.minHeight = '600px'
            sidebarElement.style.display = 'flex';
            customerInfoMinimized = false;
        }
    })

    //minimize SCRIPTS
    let scriptsMinimized = false;

    minimizeScriptsBtn.addEventListener('click', () => {
        if(!scriptsMinimized){
            scriptDragContainer.classList.toggle('minimized')
            scriptsElement.style.height = '60px'
            scriptsElement.style.minHeight = '60px'
            sidebarElement.style.display = 'flex';
            scriptsMinimized = true;
        } else{

            let storedData = localStorage.getItem('scriptsElementPositionAndSize');
            scriptDragContainer.classList.toggle('minimized')

            if (storedData) {
            let { height } = JSON.parse(storedData);
            scriptsElement.style.height = height;
            } else {
                scriptsElement.style.height = '100%';
            }   
            scriptsElement.style.minHeight = '600px'
            sidebarElement.style.display = 'flex';
            scriptsMinimized = false;
        }
    })
}

export {windowsControlsHandler}