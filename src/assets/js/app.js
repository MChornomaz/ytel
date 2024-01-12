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

