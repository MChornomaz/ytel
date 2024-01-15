const resetInterface = () => {
    const resetBtn = document.querySelector('#reset');

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('customerInfoElementPositionAndSize');
        localStorage.removeItem('scriptsElementPositionAndSize');
        location.reload();
    })
}

export {resetInterface}