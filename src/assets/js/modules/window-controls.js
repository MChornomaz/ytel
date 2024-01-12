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


    //scripts elements
    const scriptsElement = document.querySelector('#scriptsElement')
    const trayScriptsBtn = document.querySelector('#unlockScripts')
    const expendScriptsBtn = document.querySelector('#expendScripts')
    const minimizeScriptsBtn = document.querySelector('#minimizeScripts')
    const closeScriptsBtn = document.querySelector('#closeScripts')
    const scriptsTrayElement = document.querySelector('#scriptsTray')
    const scriptsExpectBtn = document.querySelector('#scriptsExpectBtn')
    const sidebarScriptsBtn = document.querySelector('#scriptBtn')
    const scriptDragContainer = document.querySelector('#scriptDragContainer')

    let scriptsAreActive = !scriptDragContainer.classList.contains('hidden')

    const trayElement = document.querySelector('#tray');

    let customerTrayActive = false;
    let scriptsTrayActive = false;


    // call script element

    sidebarScriptsBtn.addEventListener('click', () => {
        scriptDragContainer.classList.remove('hidden')
        scriptsAreActive = true;
    })


    //tray Customer Window

    trayCustomerInfoBtn.addEventListener('click', () => {
        trayElement.classList.add('active')
        customerTrayElement.classList.add('active');
        customerInfoDragContainer.classList.add('hidden')
        customerInfoDragContainer.classList.remove('expended')

        customerTrayActive = true;
    })

    //expect customer info

    customerInfoExpectBtn.addEventListener('click', () => {
        customerTrayElement.classList.remove('active');
        customerInfoDragContainer.classList.remove('hidden')
        scriptDragContainer.classList.remove('expended')

        if(!customerTrayActive || !scriptsTrayActive){
            trayElement.classList.remove('active')
        }

        customerTrayActive = false
    })

    //expend customer info

    expendCustomerInfoBtn.addEventListener('click', () => {
        if(!customerInfoDragContainer.classList.contains('expended')){
            scriptDragContainer.classList.add('hidden')
            customerInfoDragContainer.classList.add('expended')
            customerInfoElement.style.width = '100%';
            customerInfoElement.style.height = '100%';
            customerInfoElement.style.transform = 'translate(0px, 0px)';

            trayElement.classList.add('active')
            scriptsTrayElement.classList.add('active')
            scriptsTrayActive = true;
        } else {
            customerInfoDragContainer.classList.remove('expended')
            let storedData = localStorage.getItem('customerInfoElementPositionAndSize');
            if (storedData) {
                let { height, width, x, y } = JSON.parse(storedData);
                customerInfoElement.style.height = height;
                customerInfoElement.style.width = width;
                customerInfoElement.style.top = y;
                customerInfoElement.style.left = x;
            }else {
                customerInfoElement.style.width = '100%';
                customerInfoElement.style.height = '100%';
            } 
            scriptDragContainer.classList.remove('expended')
            customerTrayActive = false;

            if(!scriptsTrayActive){
                trayElement.classList.remove('active')
            }
        }
    })


    //expend scripts

    expendScriptsBtn.addEventListener('click', () => {
        if(!scriptDragContainer.classList.contains('expended')){
            customerInfoDragContainer.classList.add('hidden')
            scriptDragContainer.classList.add('expended')
            scriptsElement.style.width = '100%';
            scriptsElement.style.height = '100%';
            scriptsElement.style.transform = 'translate(0px, 0px)';

            trayElement.classList.add('active')
            customerTrayElement.classList.add('active')
            customerTrayActive = true;
        } else {
            scriptDragContainer.classList.remove('expended')
            let storedData = localStorage.getItem('scriptsElementPositionAndSize');
            if (storedData) {
                let { height, width, x, y } = JSON.parse(storedData);
                scriptsElement.style.height = height;
                scriptsElement.style.width = width;
                scriptsElement.style.top = y;
                scriptsElement.style.left = x;
            }else {
                scriptsElement.style.width = '100%';
                scriptsElement.style.height = '100%';
            } 
            scriptDragContainer.classList.remove('expended')
            scriptsTrayActive = false;

            if(!customerTrayActive){
                trayElement.classList.remove('active')
            }
        }
    })


    //close scripts
    closeScriptsBtn.addEventListener('click', () => {
        scriptDragContainer.classList.add('hidden')
        scriptDragContainer.classList.remove('expended')
        scriptsAreActive = false;
    })


    //tray Scripts Window

    trayScriptsBtn.addEventListener('click', () => {
        trayElement.classList.add('active')
        scriptsTrayElement.classList.add('active');
        scriptDragContainer.classList.add('hidden')
        scriptDragContainer.classList.remove('expended')

        scriptsTrayActive = true;
    })

    //expect scripts
    scriptsExpectBtn.addEventListener('click', () => {
        scriptsTrayElement.classList.remove('active');
        scriptDragContainer.classList.remove('hidden')
        customerInfoDragContainer.classList.remove('expended')

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
            scriptsMinimized = false;
        }
    })
}

export {windowsControlsHandler}