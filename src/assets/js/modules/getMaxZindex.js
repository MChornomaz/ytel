    const getMaxZIndex = () => {
        const workingWindows = document.querySelectorAll('.drag-item');
        const otherWindowsIndexes = Array.from(workingWindows)
            .filter(otherWindow => otherWindow !== window)
            .map(otherWindow => parseInt(otherWindow.style.zIndex) || 200);

        const maxOtherIndex = Math.max(...otherWindowsIndexes);

        return maxOtherIndex
    }

    export {getMaxZIndex}