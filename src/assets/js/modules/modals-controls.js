const modalsControls = () => {

    // MESSAGE MODAL ///////////////////////////////////////////////////////////////////
    const messageModal = document.querySelector('#messageModal')
    const closeMessageModalBtn = document.querySelector('#messageCloseBtn')
    const backdrop = document.querySelector('.backdrop')
    const messageBtn = document.querySelector('#messageBtn')
    const messageBtnHorizontalSidebar = document.querySelector('#messageBtn1')


    //left side sidebar
    if (messageModal && backdrop) {
        messageBtn.addEventListener('click', () => {
            messageModal.classList.add('active')
            backdrop.classList.add('active')
        })

        closeMessageModalBtn.addEventListener('click', () => {
            messageModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }

    //top sidebar
    if (messageModal && backdrop) {
        messageBtnHorizontalSidebar.addEventListener('click', () => {
            messageModal.classList.add('active')
            backdrop.classList.add('active')
        })

        closeMessageModalBtn.addEventListener('click', () => {
            messageModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }
    //////////////////////////////////////////////////////////////////////////////////////

    //CALLS IN QUEUE /////////////////////////////////////////////////////////////////////
    const callsInQueueBtn = document.querySelector('#callsInQueueBtn')
    const callsInQueueBtnHorizontalSidebar = document.querySelector('#callsInQueueBtn1')

    const callsInQueueModal = document.querySelector('#callsInQueueModal')
    const closeCallsInQueueModalBtn = document.querySelector('#callsInQueueCloseBtn')

    //left sidebar
    if(callsInQueueModal && backdrop){
        callsInQueueBtn.addEventListener('click', () => {
            callsInQueueModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeCallsInQueueModalBtn.addEventListener('click', () => {
            callsInQueueModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }

    //top sidebar
    if(callsInQueueModal && backdrop){
        callsInQueueBtnHorizontalSidebar.addEventListener('click', () => {
            callsInQueueModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeCallsInQueueModalBtn.addEventListener('click', () => {
            callsInQueueModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }
    ///////////////////////////////////////////////////////////////////////////////////////

    //AGENT CALL LOG MODAL
    const agentCallLogModal = document.querySelector('#agentCallLogModal')
    const closeAgentCallLogModalBtn = document.querySelector('#agentCallLogCloseBtn')
    const agentCallLogModalBtn = document.querySelector('#agentCallLogBtn')
    const agentCallLogModalBtnHorizontalSidebar = document.querySelector('#agentCallLogBtn1')

    //left sidebar
    if(agentCallLogModal && backdrop){
        agentCallLogModalBtn.addEventListener('click', () => {
            agentCallLogModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeAgentCallLogModalBtn.addEventListener('click', () => {
            agentCallLogModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }

    //top sidebar

    if(agentCallLogModal && backdrop){
        agentCallLogModalBtnHorizontalSidebar.addEventListener('click', () => {
            agentCallLogModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeAgentCallLogModalBtn.addEventListener('click', () => {
            agentCallLogModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }



    //CALL CHANNELS MODAL
    const callChannelsModal = document.querySelector('#callChannelsModal')
    const closeCallChannelsModalBtn = document.querySelector('#callChannelsCloseBtn')
    const callChannelsModalBtn = document.querySelector('#callChannelsBtn')
    const callChannelsModalBtnHorizontalSidebar = document.querySelector('#callChannelsBtn1')


    //left sidebar
    if(callChannelsModal && backdrop){
        callChannelsModalBtn.addEventListener('click', () => {
            callChannelsModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeCallChannelsModalBtn.addEventListener('click', () => {
            callChannelsModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }

    //top sidebar
    if(callChannelsModal && backdrop){
        callChannelsModalBtnHorizontalSidebar.addEventListener('click', () => {
            callChannelsModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeCallChannelsModalBtn.addEventListener('click', () => {
            callChannelsModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }

    // group selection modal///////////////////////////////////////////////////


    const groupSelectionModal = document.querySelector('#groupSelectionModal')
    const closeGroupSelectionModalBtn = document.querySelector('#groupSelectionCloseBtn')
    const groupSelectionModalBtn = document.querySelector('#groupSelectionBtn')
    const groupSelectionModalBtnHorizontalSidebar = document.querySelector('#groupSelectionBtn1')


    //left sidebar
    if(groupSelectionModal && backdrop){
        groupSelectionModalBtn.addEventListener('click', () => {
            groupSelectionModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeGroupSelectionModalBtn.addEventListener('click', () => {
            groupSelectionModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }

    //top sidebar
    if(groupSelectionModal && backdrop){
        groupSelectionModalBtnHorizontalSidebar.addEventListener('click', () => {
            groupSelectionModal.classList.add('active')
            backdrop.classList.add('active')
        })
        
        closeGroupSelectionModalBtn.addEventListener('click', () => {
            groupSelectionModal.classList.remove('active')
            backdrop.classList.remove('active')
        })
    }



   









    


}


export { modalsControls }