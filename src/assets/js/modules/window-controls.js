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

    // Calls in Queue elements
    const callsInQueueTrayElement = document.querySelector('#callsInQueueTray')
    const trayCallsInQueueExpectBtn = document.querySelector('#calsInQueueExpectBtn')
    const callsInQueueElement = document.querySelector('#callsInQueueModal')
    const callsInQueueMinimizeBtn = document.querySelector('#minimizeCallsInQueueBtn')
    let callsInQueueActive = false;

    //Agent Status Element
    const agentStatusTrayElement = document.querySelector('#agentStatusTray')
    const trayAgentStatusExpectBtn = document.querySelector('#agentStatusExpectBtn')
    const agentStatusElement = document.querySelector('#agentStatusModal')
    const agentStatusMinimizeBtn = document.querySelector('#minimizeAgentStatus')
    let agentStatusActive = false;


    // Call Channels Elements
    const callChannelsTrayElement = document.querySelector('#callChannelsTray')
    const trayCallChannelsExpectBtn = document.querySelector('#callChannelsExpectBtn')
    const callChannelsElement = document.querySelector('#callChannelsModal')
    const callChannelsMinimizeBtn = document.querySelector('#minimizeCallsChannels')
    let callChannelsActive = false;


    const trayElement = document.querySelector('#tray');

    let customerTrayActive = false;
    let scriptsTrayActive = false;

    let agentStatusData;
    let callsInQueData;
    let callChannelsData;

    const checkTray = () => {
        const customerInfoInTray = localStorage.getItem('customerInfoInTray')
        const scriptsInTray = localStorage.getItem('scriptsInTray')
        const agentStatusInTray = localStorage.getItem('agentStatusInTray')
        const callsInQueueInTray = localStorage.getItem('callsInQueueInTray')
        const callChannelsInTray = localStorage.getItem('callChannelsInTray')

        if(customerInfoInTray || scriptsInTray || agentStatusInTray || callsInQueueInTray || callChannelsInTray){
            trayElement.classList.add('active')
        } else{
            trayElement.classList.remove('active')
        }

        if(customerInfoInTray){
            customerTrayElement.classList.add('active')
            customerTrayElement.classList.add('active');
            customerInfoDragContainer.classList.add('hidden')
            customerTrayActive = true;
        } else {
            customerTrayElement.classList.remove('active')
        }

        if(scriptsInTray){
            scriptsTrayElement.classList.add('active')
            scriptDragContainer.classList.add('hidden')
            scriptDragContainer.classList.remove('expended')
            scriptsTrayActive = true;
        } else {
            scriptsTrayElement.classList.remove('active')
        }

        if(agentStatusInTray){
            agentStatusTrayElement.classList.add('active')
            agentStatusData = localStorage.getItem('agentStatusTemporalElementPositionAndSize')
            agentStatusElement.classList.remove('active')
            agentStatusActive = true;
           
        } else {
            agentStatusTrayElement.classList.remove('active')
        }

        if(callsInQueueInTray){
            callsInQueueTrayElement.classList.add('active')
            callsInQueData = localStorage.getItem('callsInQueueTemporalElementPositionAndSize')
            callsInQueueTrayElement.classList.add('active');
            callsInQueueElement.classList.remove('active')
            callsInQueueActive = true;
        } else {
            callsInQueueTrayElement.classList.remove('active')
        }

        if(callChannelsInTray){
            callChannelsTrayElement.classList.add('active')
            
            callChannelsTrayElement.classList.add('active');
        callChannelsElement.classList.remove('active')
        localStorage.setItem('callChannelsInTray', true)
         

        callChannelsActive = true;
        } else {
            callChannelsTrayElement.classList.remove('active')
        }
    }

    

    const checkTrayElementVisibility = () => {
        if(!callsInQueueActive || 
            !agentStatusActive || 
            !callChannelsActive ||
            !customerTrayActive ||
            !scriptsTrayActive
            ){
                trayElement.classList.add('active')
            } else{
                trayElement.classList.add('active')
            }
    }


    //tray Call Channels


    callChannelsMinimizeBtn.addEventListener('click', () => {
        const baseData = {"x":384,"y":442.5,"width":680,"height":202.875}
        callChannelsData = JSON.parse(localStorage.getItem('callChannelsElementPositionAndSize'))

        trayElement.classList.add('active')
        callChannelsTrayElement.classList.add('active');
        callChannelsElement.classList.remove('active')
        localStorage.setItem('callChannelsInTray', true)
         

        callChannelsActive = true;
        if(callChannelsData.x !== 0){
            localStorage.setItem('callChannelsTemporalElementPositionAndSize', JSON.stringify(callChannelsData))
          } else{
            localStorage.setItem('callChannelsTemporalElementPositionAndSize', JSON.stringify(baseData))
        }
    })

    //expect Call Channels

    trayCallChannelsExpectBtn.addEventListener('click', () => {
        const elementData = localStorage.getItem('callChannelsTemporalElementPositionAndSize')
        callChannelsTrayElement.classList.remove('active');
        callChannelsElement.classList.add('active')
         

        callChannelsActive = false
        checkTrayElementVisibility()

        if(elementData){
            localStorage.setItem('callChannelsElementPositionAndSize', elementData)
        }
        localStorage.removeItem('callChannelsInTray', true)

    })


     //tray Agent Status

     agentStatusMinimizeBtn.addEventListener('click', () => {
        const baseData = {"x":384,"y":442.5,"width":680,"height":202.875}
        let data = JSON.parse(localStorage.getItem('agentStatusElementPositionAndSize'))
        
        trayElement.classList.add('active')
        agentStatusTrayElement.classList.add('active');
        agentStatusElement.classList.remove('active')
        localStorage.setItem('agentStatusInTray', true)
         

        agentStatusActive = true;
        checkTrayElementVisibility()
        if(data.x !== 0){
            localStorage.setItem('agentStatusTemporalElementPositionAndSize', JSON.stringify(data))
        } else{
            localStorage.setItem('agentStatusTemporalElementPositionAndSize', JSON.stringify(baseData))
        }
    })

    //expect Agent Status

    trayAgentStatusExpectBtn.addEventListener('click', () => {
        
        const elementData = localStorage.getItem('agentStatusTemporalElementPositionAndSize')
        agentStatusTrayElement.classList.remove('active');
        agentStatusElement.classList.add('active')
         

        agentStatusActive = false
        checkTrayElementVisibility()
        if(elementData){
            localStorage.setItem('agentStatusElementPositionAndSize', elementData)
        }
        localStorage.removeItem('agentStatusInTray', true)
    })




    //tray Calls in Queue
    callsInQueueMinimizeBtn.addEventListener('click', () => {
        const baseData = {"x":384,"y":264.5,"width":680,"height":409.46875}
        let data = JSON.parse(localStorage.getItem('callsInQueueElementPositionAndSize'))

        trayElement.classList.add('active')
        callsInQueueTrayElement.classList.add('active');
        callsInQueueElement.classList.remove('active')
        localStorage.setItem('callsInQueueInTray', true)
         

        callsInQueueActive = true;
        if(data.x !== 0){
            localStorage.setItem('callsInQueueTemporalElementPositionAndSize', JSON.stringify(data))
        } else{
            localStorage.setItem('callsInQueueTemporalElementPositionAndSize', JSON.stringify(baseData))
        }
    })

    //expect Calls in Queue

    trayCallsInQueueExpectBtn.addEventListener('click', () => {
        const elementData = localStorage.getItem('callsInQueueTemporalElementPositionAndSize')
        callsInQueueTrayElement.classList.remove('active');
        callsInQueueElement.classList.add('active')
         

        callsInQueueActive = false
        checkTrayElementVisibility()
        if(elementData){
            localStorage.setItem('callsInQueueElementPositionAndSize', elementData)
        }
        localStorage.removeItem('callsInQueueInTray', true)
    })
    

    let scriptsAreActive = !scriptDragContainer.classList.contains('hidden')

    


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
        localStorage.setItem('customerInfoInTray', true)
         

        customerTrayActive = true;
    })

    //expect customer info

    customerInfoExpectBtn.addEventListener('click', () => {
        customerTrayElement.classList.remove('active');
        customerInfoDragContainer.classList.remove('hidden')
        scriptDragContainer.classList.remove('expended')
         
        localStorage.removeItem('customerInfoInTray', true)
        customerTrayActive = false
        checkTrayElementVisibility()
        localStorage.removeItem('customerInfoInTray', true)
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
            localStorage.setItem('customerInfoElementPositionAndSize', tempData)
            let { x, y, width, height, zIndex } = JSON.parse(tempData);
            customerInfoDragContainer.classList.remove('expended');
    
            customerInfoElement.style.width = width + 'px';
            customerInfoElement.style.height = height + 'px';
            customerInfoElement.style.top = y + 'px';
            customerInfoElement.style.left = x + 'px';
            customerInfoElement.style.zIndex = zIndex;
            customerWindowExpanded = false
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
            localStorage.setItem('scriptsElementPositionAndSize', tempData)
            let { x, y, width, height, zIndex } = JSON.parse(tempData);
            customerInfoDragContainer.classList.remove('expended');
    
            scriptsElement.style.width = width + 'px';
            scriptsElement.style.height = height + 'px';
            scriptsElement.style.top = y + 'px';
            scriptsElement.style.left = x + 'px';
            scriptsElement.style.zIndex = zIndex;
            scriptsWindowExpanded = false
            sidebarTopElement.style.transform = 'translateY(0)';
            localStorage.removeItem('scriptsTempData');
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
         
        localStorage.setItem('scriptsInTray', true)
        scriptsTrayActive = true;
    })

    //expect scripts
    scriptsExpectBtn.addEventListener('click', () => {
        scriptsTrayElement.classList.remove('active');
        scriptDragContainer.classList.remove('hidden')
        customerInfoDragContainer.classList.remove('expended')
         
        localStorage.removeItem('scriptsInTray', true)
        scriptsTrayActive = false
        checkTrayElementVisibility()

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

    checkTray()
}

export {windowsControlsHandler}