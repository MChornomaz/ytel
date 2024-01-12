//MANUAL DIAL MODAL
const mDialModalHandler = () => {

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
}

export {mDialModalHandler}