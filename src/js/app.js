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


//VERTICAL MENU DROPDOWN

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


//COLOR THEME CHANGE 
const bodyElement = document.body;
const changeThemeBtn = document.querySelector('#themeBtn');
const changeThemeBtn2 = document.querySelector('#themeBtn2');
const currentTheme = document.querySelector('#themeName');
const currentTheme2 = document.querySelector('#themeName2');

changeThemeBtn.addEventListener('click', () => {
    if(bodyElement.classList.contains('light')){
        bodyElement.classList.remove('light')
        bodyElement.classList.add('dark')
        currentTheme.innerHTML = 'Dark'
    } else if(bodyElement.classList.contains('dark')){
        bodyElement.classList.remove('dark')
        bodyElement.classList.add('light')
        currentTheme.innerHTML = 'Light'
    }
})

changeThemeBtn2.addEventListener('click', () => {
    if(bodyElement.classList.contains('light')){
        bodyElement.classList.remove('light')
        bodyElement.classList.add('dark')
        currentTheme2.innerHTML = 'Dark'
    } else if(bodyElement.classList.contains('dark')){
        bodyElement.classList.remove('dark')
        bodyElement.classList.add('light')
        currentTheme2.innerHTML = 'Light'
    }
})

//SIDEBAR BURGER 

const sidebarBurgerIcon = document.querySelector('#navi-toggle');
const sidebarElement = document.querySelector('#leftSidebar');


sidebarBurgerIcon.addEventListener('click', () => {
    if(sidebarBurgerIcon.checked){
        sidebarElement.classList.add('active')
    } else {
        sidebarElement.classList.remove('active')
    }
})



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



// MESSAGE MODAL TABS
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


//MESSAGE MODAL BURGER



const messageBurgerIcon = document.querySelector('#message-toggle');
const messageSidebarElement = document.querySelector('#messagesSidebar');


messageBurgerIcon.addEventListener('click', () => {
    if(messageBurgerIcon.checked){
        messageSidebarElement.classList.add('active')
    } else {
        messageSidebarElement.classList.remove('active')
    }
})


//SELECT 

const selectElements = document.querySelectorAll('.select');

selectElements.forEach(el => {
    const selectField = el.firstElementChild;
    const selectDropdown = selectField.nextElementSibling
    const selectArrow = selectField.querySelector('.select__icon')
    const selectBtnText = selectField.querySelector('.select__text')
    const options = selectDropdown.querySelectorAll('.select__option')

    selectField.addEventListener('click', () => {
        selectArrow.classList.toggle('active')
        selectDropdown.classList.toggle('active')
    })
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            const optionLabel = option.querySelector('.select__option-label').innerHTML
            const optionValue = option.querySelector('.select__option-value').innerHTML

            selectArrow.classList.toggle('active')
            selectDropdown.classList.toggle('active')

            selectBtnText.innerText = optionLabel
            el.setAttribute('data-value', optionValue);
            

        })
    })

})


// WINDOWS CONTROLS

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





const workingAreaElement = document.querySelector('#workingArea');
const trayElement = document.querySelector('#tray');
const trayItems = trayElement.querySelectorAll('.tray__item');


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







// TOOLS  - DELETE IN THE END
/////////////////////////////////////////////////////////////////
const toolsShowBTN = document.querySelector('.tools__btn');
const toolsList = document.querySelector('.tools__list');

toolsShowBTN.addEventListener('click', () => {
    toolsList.classList.toggle('active')
})


const manualDialToolsBtn = document.querySelector('#button1');

manualDialToolsBtn.addEventListener('click', () => {
    manualDialModal.classList.add('active')
    backdrop.classList.add('active')
})

const dispoToolsBtn = document.querySelector('#button2');
const groupSelectionToolsBtn = document.querySelector('#button3');
const transferToolsBtn = document.querySelector('#button4');
const agentCallLogToolsBtn = document.querySelector('#button5');
const callsInQueueToolsBtn = document.querySelector('#button6');
const callChannelsToolsBtn = document.querySelector('#button7');
const callChannelsErrorToolsBtn = document.querySelector('#button8');
const connectionErrorToolsBtn = document.querySelector('#button9');
const agentStatusToolsBtn = document.querySelector('#button10');
const messageToolsBtn = document.querySelector('#button11');
const latencyToolsBtn = document.querySelector('#button12');
const call1ToolsBtn = document.querySelector('#button13');
const call2ToolsBtn = document.querySelector('#button14');
const call3ToolsBtn = document.querySelector('#button15');
const mDial2ToolsBtn = document.querySelector('#button16');
const toggleSidebarToolsBtn = document.querySelector('#button17');



//dispo modal
const dispoModal = document.querySelector('#dispoModal')
const closeDispoModalBtn = document.querySelector('#dispoCloseBtn')


if(dispoModal && backdrop){
    dispoToolsBtn.addEventListener('click', () => {
        dispoModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeDispoModalBtn.addEventListener('click', () => {
        dispoModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// group selection modal


const groupSelectionModal = document.querySelector('#groupSelectionModal')
const closeGroupSelectionModalBtn = document.querySelector('#groupSelectionCloseBtn')


if(groupSelectionModal && backdrop){
    groupSelectionToolsBtn.addEventListener('click', () => {
        groupSelectionModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeGroupSelectionModalBtn.addEventListener('click', () => {
        groupSelectionModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}



// transfer modal
const transferModal = document.querySelector('#transferModal')
const closeTransferModalBtn = document.querySelector('#transferModalCloseBtn')


if(transferModal && backdrop){
    transferToolsBtn.addEventListener('click', () => {
        transferModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeTransferModalBtn.addEventListener('click', () => {
        transferModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// agent call log modal
const agentCallLogModal = document.querySelector('#agentCallLogModal')
const closeAgentCallLogModalBtn = document.querySelector('#agentCallLogCloseBtn')


if(agentCallLogModal && backdrop){
    agentCallLogToolsBtn.addEventListener('click', () => {
        agentCallLogModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeAgentCallLogModalBtn.addEventListener('click', () => {
        agentCallLogModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}

// Calls In Queue modal
const callsInQueueModal = document.querySelector('#callsInQueueModal')
const closeCallsInQueueModalBtn = document.querySelector('#callsInQueueCloseBtn')


if(callsInQueueModal && backdrop){
    callsInQueueToolsBtn.addEventListener('click', () => {
        callsInQueueModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeCallsInQueueModalBtn.addEventListener('click', () => {
        callsInQueueModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}

// Call  Channels modal
const callChannelsModal = document.querySelector('#callChannelsModal')
const closeCallChannelsModalBtn = document.querySelector('#callChannelsCloseBtn')


if(callChannelsModal && backdrop){
    callChannelsToolsBtn.addEventListener('click', () => {
        callChannelsModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeCallChannelsModalBtn.addEventListener('click', () => {
        callChannelsModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// Call  Channels Error modal
const callChannelsErrorModal = document.querySelector('#callChannelsErrorModal')
const closeCallChannelsErrorModalBtn = document.querySelector('#callChannelsErrorCloseBtn')


if(callChannelsErrorModal && backdrop){
    callChannelsErrorToolsBtn.addEventListener('click', () => {
        callChannelsErrorModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeCallChannelsErrorModalBtn.addEventListener('click', () => {
        callChannelsErrorModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}

// Connection Error modal
const connectionErrorModal = document.querySelector('#connectionErrorModal')
const closeConnectionErrorModalBtn = document.querySelector('#connectionErrorCloseBtn')


if(connectionErrorModal && backdrop){
    connectionErrorToolsBtn.addEventListener('click', () => {
        connectionErrorModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeConnectionErrorModalBtn.addEventListener('click', () => {
        connectionErrorModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// Agent Status modal
const agentStatusModal = document.querySelector('#agentStatusModal')
const  closeAgentStatusModalBtn = document.querySelector('#agentStatusCloseBtn')


if(agentStatusModal && backdrop){
    agentStatusToolsBtn.addEventListener('click', () => {
        agentStatusModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeAgentStatusModalBtn.addEventListener('click', () => {
        agentStatusModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// Message modal
const messageModal = document.querySelector('#messageModal')
const  closeMessageModalBtn = document.querySelector('#messageCloseBtn')


if(messageModal && backdrop){
    messageToolsBtn.addEventListener('click', () => {
        messageModal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeMessageModalBtn.addEventListener('click', () => {
        messageModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// Latency modal
const latencyModal = document.querySelector('#latencyModal')
const  closeLatencyModalBtn = document.querySelector('#latencyModalCloseBtn')


if(latencyModal){
    latencyToolsBtn.addEventListener('click', () => {
        latencyModal.classList.add('active')
    })
    
    closeLatencyModalBtn.addEventListener('click', () => {
        latencyModal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


//Call section state change 


const initialCallSection = document.querySelector('#initialCallControls')
const activeCallSection = document.querySelector('#activeCallControls')
const pausedCallSection = document.querySelector('#pausedCallControls')


call1ToolsBtn.addEventListener('click', () => {
    initialCallSection.classList.remove('hidden');
    activeCallSection.classList.add('hidden')
    pausedCallSection.classList.add('hidden')
})

call2ToolsBtn.addEventListener('click', () => {
    initialCallSection.classList.add('hidden');
    activeCallSection.classList.remove('hidden')
    pausedCallSection.classList.add('hidden')
})

call3ToolsBtn.addEventListener('click', () => {
    initialCallSection.classList.add('hidden');
    activeCallSection.classList.add('hidden')
    pausedCallSection.classList.remove('hidden')
})


// mDial Approach 2  modal
const mDial2Modal = document.querySelector('#mDial2Modal')
const  closeMDial2ModalBtn = document.querySelector('#mDial2CloseBtn')


if(mDial2Modal && backdrop){
    mDial2ToolsBtn.addEventListener('click', () => {
        mDial2Modal.classList.add('active')
        backdrop.classList.add('active')
    })
    
    closeMDial2ModalBtn.addEventListener('click', () => {
        mDial2Modal.classList.remove('active')
        backdrop.classList.remove('active')
    })
}


// TOGGLE SIDEBAR LOGIC 
const verticalSidebar = document.querySelector('#verticalSidebar');
const pageContentElement = document.querySelector('.page-content');
const contentElement = document.querySelector('#content');




let verticalSidebarShown = verticalSidebar.classList.contains('active');

toggleSidebarToolsBtn.addEventListener('click', () => {

    if(!verticalSidebarShown){
        verticalSidebar.classList.add('active')
        sidebarElement.classList.add('hidden');
        pageContentElement.classList.add('column')
        contentElement.classList.add('no-border')
        workingAreaElement.classList.add('small')
        verticalSidebarShown = !verticalSidebarShown
    } else  {
        sidebarElement.classList.remove('hidden');
        pageContentElement.classList.remove('column')
        contentElement.classList.remove('no-border')
        verticalSidebar.classList.remove('active')
        workingAreaElement.classList.remove('small')
        verticalSidebarShown = !verticalSidebarShown
    }
})





// DRAG AND DROP CUSTOMER INFO
const dragCustomerInfo = () => {

    gsap.registerPlugin(Observer);
    let root = document.documentElement;
    let item = document.getElementById('customerWindow');
    let storageKey = 'customerInfoElementPositionAndSize';
    
    let setItem = gsap.quickSetter(item, 'css');
    let isPressed = false;
    let edgeSize = Observer.isTouch ? 40 : 20;
    let edgeX = '';
    let edgeY = '';
    
    let cursors = {
        default: 'grab',
        dragging: 'grabbing',
        top: 'ns-resize',
        left: 'ew-resize',
        bottom: 'ns-resize',
        right: 'ew-resize',
        topleft: 'nwse-resize',
        bottomright: 'nwse-resize',
        topright: 'nesw-resize',
        bottomleft: 'nesw-resize',
    };
    
    function onDragEnd() {
        isPressed = false;
        updateCursor();
    
        let bounds = item.getBoundingClientRect();
        let dataToStore = { x: bounds.left, y: bounds.top, width: bounds.width, height: bounds.height };
        localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    }
    
    let observer;
    function initializeObserver() {
        observer = Observer.create({
            type: 'touch,pointer',
            target: item,
            onPress(self) {
                onMove(self);
                isPressed = true;
                updateCursor();
            },
            onRelease() {
                isPressed = false;
                updateCursor();
            },
            onMove,
            onRelease: onDragEnd,
            onDragEnd: onDragEnd,
            onDrag(self) {
                if (!edgeX && !edgeY) {
                    return setItem({
                        x: `+=${self.deltaX}`,
                        y: `+=${self.deltaY}`,
                    });
                }
    
                let css = {};
                let bounds = item.getBoundingClientRect();
    
                if (edgeX === 'right' && self.x < bounds.left) {
                    edgeX = 'left';
                } else if (edgeX === 'left' && self.x > bounds.right) {
                    edgeX = 'right';
                }
    
                if (edgeY === 'bottom' && self.y < bounds.top) {
                    edgeY = 'top';
                } else if (edgeY === 'top' && self.y > bounds.bottom) {
                    edgeY = 'bottom';
                }
    
                let deltaX = self.x - (edgeX === 'left' ? bounds.left : bounds.right);
                let deltaY = self.y - (edgeY === 'top' ? bounds.top : bounds.bottom);
    
                if (edgeX === 'right') {
                    css.width = `+=${deltaX}`;
                } else if (edgeX === 'left') {
                    css.width = `+=${-deltaX}`;
                    css.x = `+=${deltaX}`;
                }
    
                if (edgeY === 'bottom') {
                    css.height = `+=${deltaY}`;
                } else if (edgeY === 'top') {
                    css.height = `+=${-deltaY}`;
                    css.y = `+=${deltaY}`;
                }
    
                setItem(css);
            },
        });
    }
    
    function onMove(self) {
        if (isPressed) return;
    
        let bounds = item.getBoundingClientRect();
        let x = self.x - bounds.left;
        let y = self.y - bounds.top;
    
        edgeX = '';
        edgeY = '';
    
        if (x <= edgeSize) {
            edgeX = 'left';
        } else if (bounds.width - x <= edgeSize) {
            edgeX = 'right';
        }
    
        if (y <= edgeSize) {
            edgeY = 'top';
        } else if (bounds.height - y <= edgeSize) {
            edgeY = 'bottom';
        }
    
        updateCursor();
    }
    
    function updateCursor() {
        let currentEdge = edgeY + edgeX;
        let cursor = cursors[currentEdge ? currentEdge : (isPressed ? 'dragging' : 'default')];
    
        item.style.cursor = cursor;
        root.style.cursor = isPressed ? cursor : 'unset';
    }
    
    let storedData = localStorage.getItem(storageKey);
    if (storedData) {
        let { x, y, width, height } = JSON.parse(storedData);
        setItem({ x: x - item.getBoundingClientRect().left, y: y - item.getBoundingClientRect().top, width, height });
    }
    
    initializeObserver()
    
    
    }

    dragCustomerInfo()



    //SCRIPTS DRAG AND DROP 

    const dragScripts = () => {

        gsap.registerPlugin(Observer);
        let root = document.documentElement;
        let item = document.getElementById('scriptsElement');
        let storageKey = 'scriptsElementPositionAndSize';
        
        let setItem = gsap.quickSetter(item, 'css');
        let isPressed = false;
        let edgeSize = Observer.isTouch ? 40 : 20;
        let edgeX = '';
        let edgeY = '';
        
        let cursors = {
            default: 'grab',
            dragging: 'grabbing',
            top: 'ns-resize',
            left: 'ew-resize',
            bottom: 'ns-resize',
            right: 'ew-resize',
            topleft: 'nwse-resize',
            bottomright: 'nwse-resize',
            topright: 'nesw-resize',
            bottomleft: 'nesw-resize',
        };
        
        function onDragEnd() {
            isPressed = false;
            updateCursor();
        
            let bounds = item.getBoundingClientRect();
            let dataToStore = { x: bounds.left, y: bounds.top, width: bounds.width, height: bounds.height };
            localStorage.setItem(storageKey, JSON.stringify(dataToStore));
        }
        
        let observer;
        function initializeObserver() {
            observer = Observer.create({
                type: 'touch,pointer',
                target: item,
                onPress(self) {
                    onMove(self);
                    isPressed = true;
                    updateCursor();
                },
                onRelease() {
                    isPressed = false;
                    updateCursor();
                },
                onMove,
                onRelease: onDragEnd,
                onDragEnd: onDragEnd,
                onDrag(self) {
                    if (!edgeX && !edgeY) {
                        return setItem({
                            x: `+=${self.deltaX}`,
                            y: `+=${self.deltaY}`,
                            'z-index': '300'
                        });
                    }
        
                    let css = {};
                    let bounds = item.getBoundingClientRect();
        
                    if (edgeX === 'right' && self.x < bounds.left) {
                        edgeX = 'left';
                    } else if (edgeX === 'left' && self.x > bounds.right) {
                        edgeX = 'right';
                    }
        
                    if (edgeY === 'bottom' && self.y < bounds.top) {
                        edgeY = 'top';
                    } else if (edgeY === 'top' && self.y > bounds.bottom) {
                        edgeY = 'bottom';
                    }
        
                    let deltaX = self.x - (edgeX === 'left' ? bounds.left : bounds.right);
                    let deltaY = self.y - (edgeY === 'top' ? bounds.top : bounds.bottom);
        
                    if (edgeX === 'right') {
                        css.width = `+=${deltaX}`;
                    } else if (edgeX === 'left') {
                        css.width = `+=${-deltaX}`;
                        css.x = `+=${deltaX}`;
                    }
        
                    if (edgeY === 'bottom') {
                        css.height = `+=${deltaY}`;
                    } else if (edgeY === 'top') {
                        css.height = `+=${-deltaY}`;
                        css.y = `+=${deltaY}`;
                    }
        
                    setItem(css);
                },
            });
        }
        
        function onMove(self) {
            if (isPressed) return;
        
            let bounds = item.getBoundingClientRect();
            let x = self.x - bounds.left;
            let y = self.y - bounds.top;
        
            edgeX = '';
            edgeY = '';
        
            if (x <= edgeSize) {
                edgeX = 'left';
            } else if (bounds.width - x <= edgeSize) {
                edgeX = 'right';
            }
        
            if (y <= edgeSize) {
                edgeY = 'top';
            } else if (bounds.height - y <= edgeSize) {
                edgeY = 'bottom';
            }
        
            updateCursor();
        }
        
        function updateCursor() {
            let currentEdge = edgeY + edgeX;
            let cursor = cursors[currentEdge ? currentEdge : (isPressed ? 'dragging' : 'default')];
        
            item.style.cursor = cursor;
            root.style.cursor = isPressed ? cursor : 'unset';
        }
        
        let storedData = localStorage.getItem(storageKey);
        if (storedData) {
            let { x, y, width, height } = JSON.parse(storedData);
            setItem({ x: x - item.getBoundingClientRect().left, y: y - item.getBoundingClientRect().top, width, height });
        }
        
        initializeObserver()
        
        
        }
    
        dragScripts()