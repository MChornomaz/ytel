const resetInterface = () => {
    const resetBtn = document.querySelector('#reset');
    const resetBtnTopSidebar = document.querySelector('#reset1');

    resetBtn.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })

    resetBtnTopSidebar.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })
}

export {resetInterface}