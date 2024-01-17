const resetInterface = () => {
    const resetBtn = document.querySelector('#reset');
    const resetBtnTopSidebar = document.querySelector('#reset1');

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('customerInfoElementPositionAndSize');
        localStorage.removeItem('scriptsElementPositionAndSize');
        localStorage.removeItem('scale');
        localStorage.removeItem('currentScaleValue');
        location.reload();
    })

    resetBtnTopSidebar.addEventListener('click', () => {
        localStorage.removeItem('customerInfoElementPositionAndSize');
        localStorage.removeItem('scriptsElementPositionAndSize');
        localStorage.removeItem('scale');
        localStorage.removeItem('currentScaleValue');
        location.reload();
    })
}

export {resetInterface}