
// DRAG AND DROP CALLS CHANNELS
const dragCallChannels = () => {

    gsap.registerPlugin(Observer);
    let root = document.documentElement
    let item = document.getElementById('callChannelsModal');
    let storageKey = 'callChannelsElementPositionAndSize';
    
    let setItem = gsap.quickSetter(item, 'css');
    let isPressed = false;
    let edgeSize = Observer.isTouch ? 40 : 20;
    let edgeX = '';
    let edgeY = '';
    
    let cursors = {
        default: 'grab',
        dragging: 'grabbing',
        top: 'ns-resize',
        left: 'ew-resize',
        bottom: 'ns-resize',
        right: 'ew-resize',
        topleft: 'nwse-resize',
        bottomright: 'nwse-resize',
        topright: 'nesw-resize',
        bottomleft: 'nesw-resize',
    };
    
    function onDragEnd() {
        isPressed = false;
        updateCursor();
    
        let bounds = item.getBoundingClientRect();
        let dataToStore = { x: bounds.left, y: bounds.top, width: bounds.width, height: bounds.height };
        localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    }
    
    let observer;
    function initializeObserver() {
        observer = Observer.create({
            type: 'touch,pointer',
            target: item,
            onPress(self) {
                onMove(self);
                isPressed = true;
                updateCursor();
            },
            onRelease() {
                isPressed = false;
                updateCursor();
            },
            onMove,
            onRelease: onDragEnd,
            onDragEnd: onDragEnd,
            onDrag(self) {
                if (!edgeX && !edgeY) {
                    return setItem({
                        x: `+=${self.deltaX}`,
                        y: `+=${self.deltaY}`,
                    });
                }
    
                let css = {};
                let bounds = item.getBoundingClientRect();
    
                if (edgeX === 'right' && self.x < bounds.left) {
                    edgeX = 'left';
                } else if (edgeX === 'left' && self.x > bounds.right) {
                    edgeX = 'right';
                }
    
                if (edgeY === 'bottom' && self.y < bounds.top) {
                    edgeY = 'top';
                } else if (edgeY === 'top' && self.y > bounds.bottom) {
                    edgeY = 'bottom';
                }
    
                let deltaX = self.x - (edgeX === 'left' ? bounds.left : bounds.right);
                let deltaY = self.y - (edgeY === 'top' ? bounds.top : bounds.bottom);
    
                if (edgeX === 'right') {
                    css.width = `+=${deltaX}`;
                } else if (edgeX === 'left') {
                    css.width = `+=${-deltaX}`;
                    css.x = `+=${deltaX}`;
                }
    
                if (edgeY === 'bottom') {
                    css.height = `+=${deltaY}`;
                } else if (edgeY === 'top') {
                    css.height = `+=${-deltaY}`;
                    css.y = `+=${deltaY}`;
                }
    
                setItem(css);
            },
        });
    }
    
    function onMove(self) {
        if (isPressed) return;
        item.classList.add('active')
    
        let bounds = item.getBoundingClientRect();
        let x = self.x - bounds.left;
        let y = self.y - bounds.top;
    
        edgeX = '';
        edgeY = '';
    
        if (x <= edgeSize) {
            edgeX = 'left';
        } else if (bounds.width - x <= edgeSize) {
            edgeX = 'right';
        }
    
        if (y <= edgeSize) {
            edgeY = 'top';
        } else if (bounds.height - y <= edgeSize) {
            edgeY = 'bottom';
        }
    
        updateCursor();
    }
    
    function updateCursor() {
        let currentEdge = edgeY + edgeX;
        let cursor = cursors[currentEdge ? currentEdge : (isPressed ? 'dragging' : 'default')];
    
        item.style.cursor = cursor;
        root.style.cursor = isPressed ? cursor : 'unset';
    }
    
    let storedData = localStorage.getItem(storageKey);
    if (storedData) {
        item.classList.add('active')
        let { x, y, width, height } = JSON.parse(storedData);
        setItem({ x: x - item.getBoundingClientRect().left, y: y - item.getBoundingClientRect().top, width, height });
    }
    
    initializeObserver()
}

export {dragCallChannels}