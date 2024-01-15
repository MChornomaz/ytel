const resetInterface = () => {
    const resetBtn = document.querySelector('#reset');

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('customerInfoElementPositionAndSize');
        localStorage.removeItem('scriptsElementPositionAndSize');
        localStorage.removeItem('scale');
        location.reload();
    })
}

export {resetInterface}