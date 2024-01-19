// TOOLS  - DELETE IN THE END
const toolsHandler = () => {
    const sidebarElement = document.querySelector('#leftSidebar');
    const manualDialModal = document.querySelector('#manualDial')
    const backdrop = document.querySelector('.backdrop')
    const toolsShowBTN = document.querySelector('.tools__btn');
    const toolsList = document.querySelector('.tools__list');


    toolsShowBTN.addEventListener('click', () => {
        toolsList.classList.toggle('active')
    })




    const dispoToolsBtn = document.querySelector('#button2');
    const transferToolsBtn = document.querySelector('#button4');
    const callChannelsErrorToolsBtn = document.querySelector('#button8');
    const connectionErrorToolsBtn = document.querySelector('#button9');
    const agentStatusToolsBtn = document.querySelector('#button10');
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


    if(agentStatusModal){
        agentStatusToolsBtn.addEventListener('click', () => {
            agentStatusModal.classList.add('active')
            agentStatusModal.style.width = '53.125rem'
            agentStatusModal.style.height = 'max-content'
        })
        
        closeAgentStatusModalBtn.addEventListener('click', () => {
            agentStatusModal.classList.remove('active')
            agentStatusModal.style.width = '53.125rem'
            agentStatusModal.style.height = 'max-content'
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
    
}

export {toolsHandler}