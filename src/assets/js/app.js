import * as flsFunctions from "./modules/functions.js";
import {runMenuDropdown} from './modules/menu-dropdown.js'
import {runVerticalMenuDropdown} from './modules/vertical-menu-dropdown.js'
import {changeColorThemeHandler} from './modules/color-theme-change.js'
import {sidebarBurgerHandler} from './modules/sidebar-burger.js'
import {messageModalTabsHandler, messageModalBurgerHandler} from './modules/message-modal.js'
import {selectHandler} from './modules/select.js'
import {windowsControlsHandler} from './modules/window-controls.js'
import {toolsHandler} from './modules/tools.js'
import {dragCustomerInfo} from './modules/drag-and-drop-customer-info.js'
import {dragScripts} from './modules/drag-and-drop-scripts.js'
import {mDialModalHandler} from './modules/mdial-modal.js'
import {resetInterface} from './modules/reset-interface.js'
import {modalsControls} from './modules/modals-controls.js';
import {toggleSidebar} from './modules/toggle-sidebar.js';
import {toggleSidebarWidth} from './modules/toggle-sidebar-width.js';
import {changeScale} from './modules/change-scale.js';


flsFunctions.isWebp()

runMenuDropdown()

runVerticalMenuDropdown()

changeColorThemeHandler()

sidebarBurgerHandler()

messageModalTabsHandler()

messageModalBurgerHandler()

selectHandler()

windowsControlsHandler()

toolsHandler()  //- remove in the end

dragCustomerInfo()

dragScripts()

mDialModalHandler()

resetInterface()

modalsControls()

toggleSidebar()

toggleSidebarWidth()

changeScale()


//Working windows position logic
const workingWindows = document.querySelectorAll('.working-area__item');
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

