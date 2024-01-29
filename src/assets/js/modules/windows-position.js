const setWindowsPositions = () => {
  const workingWindows = document.querySelectorAll('.drag-item');
workingWindows.forEach(el => el.style.zIndex = 10)

workingWindows.forEach(window => {
    window.addEventListener('mousedown', () => {
        const otherWindowsIndexes = Array.from(workingWindows)
            .filter(otherWindow => otherWindow !== window)
            .map(otherWindow => parseInt(otherWindow.style.zIndex) || 200);

        const maxOtherIndex = Math.max(...otherWindowsIndexes);

        const newZIndex = maxOtherIndex + 1;
        const resetLimit = 500;

        if (newZIndex > resetLimit) {
            workingWindows.forEach(otherWindow => {
                otherWindow.style.zIndex = '10';
            });
            window.style.zIndex = '11';
        } else {
            window.style.zIndex = newZIndex.toString();
        }

        window.addEventListener('mousemove', () => {
            const otherWindowsIndexes = Array.from(workingWindows)
                .filter(otherWindow => otherWindow !== window)
                .map(otherWindow => parseInt(otherWindow.style.zIndex) || 10);
    
            const maxOtherIndex = Math.max(...otherWindowsIndexes);
    
            const newZIndex = maxOtherIndex + 1;
            const resetLimit = 500;
    
            if (newZIndex > resetLimit) {
                workingWindows.forEach(otherWindow => {
                    otherWindow.style.zIndex = '10';
                });
                window.style.zIndex = '11';
            } else {
                window.style.zIndex = newZIndex.toString();
            }
    
            
        });
    });
});
}

export {setWindowsPositions}