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


//COLOR THEME CHANGE 
const bodyElement = document.body;
const changeThemeBtn = document.querySelector('#themeBtn');
const currentTheme = document.querySelector('#themeName');

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





////////////////////////////////////////////////////////////////////////