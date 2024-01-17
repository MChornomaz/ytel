const changeScale = () => {
    const increaseScaleBtn = document.querySelector('#increaseInterface')
    const decreaseScaleBtn = document.querySelector('#decreaseInterface')
    const increaseScaleBtnTopSidebar = document.querySelector('#increaseInterface1')
    const decreaseScaleBtnTopSidebar = document.querySelector('#decreaseInterface1')
    const currentScaleValue = document.querySelector('#current-scale')
    const currentScaleValueTopSidebar = document.querySelector('#current-scale1')

    let savedFZ = +JSON.parse(localStorage.getItem('scale'))
    if(savedFZ){
        document.documentElement.style.fontSize = `${savedFZ}px`;
    }

    const currentScale = +JSON.parse(localStorage.getItem('currentScaleValue'));
    currentScaleValue.innerHTML = currentScale || 100

    const increaseScale = () => {
        let savedFZ = +JSON.parse(localStorage.getItem('scale'))
        const currentFontSize = savedFZ || parseFloat(getComputedStyle(document.documentElement).fontSize);
        const newFontSize = currentFontSize * 1.05;
        document.documentElement.style.fontSize = `${newFontSize}px`;
        localStorage.setItem('scale', newFontSize)
        let currentScale = +JSON.parse(localStorage.getItem('currentScaleValue')) || 100;
        const changedScaleValue = currentScale + 5;
        localStorage.setItem('currentScaleValue', changedScaleValue)
        currentScaleValue.innerHTML = changedScaleValue
        currentScaleValueTopSidebar.innerHTML = changedScaleValue
    }

    const decreaseScale = () => {
        let savedFZ = +JSON.parse(localStorage.getItem('scale'))
        const currentFontSize = savedFZ || parseFloat(getComputedStyle(document.documentElement).fontSize);
        const newFontSize = currentFontSize * 0.95;
        document.documentElement.style.fontSize = `${newFontSize}px`;
        localStorage.setItem('scale', newFontSize)
        let currentScale = +JSON.parse(localStorage.getItem('currentScaleValue')) || 100;
        const changedScaleValue = currentScale - 5;
        localStorage.setItem('currentScaleValue', changedScaleValue)
        currentScaleValue.innerHTML = changedScaleValue
        currentScaleValueTopSidebar.innerHTML = changedScaleValue
    }

    increaseScaleBtn.addEventListener('click', increaseScale)
    decreaseScaleBtn.addEventListener('click', decreaseScale)
    increaseScaleBtnTopSidebar.addEventListener('click', increaseScale)
    decreaseScaleBtnTopSidebar.addEventListener('click', decreaseScale)



}

export {changeScale}