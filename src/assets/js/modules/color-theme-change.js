const changeColorThemeHandler = () => {

    const bodyElement = document.body;
    const changeThemeBtn = document.querySelector('#themeBtn');
    const changeThemeBtn2 = document.querySelector('#themeBtn2');
    const currentTheme = document.querySelector('#themeName');
    const currentTheme2 = document.querySelector('#themeName2');

    changeThemeBtn.addEventListener('click', () => {
        if(bodyElement.classList.contains('light')){
            bodyElement.classList.remove('light')
            bodyElement.classList.add('dark')
            currentTheme.innerHTML = 'Dark'
        } else if(bodyElement.classList.contains('dark')){
            bodyElement.classList.remove('dark')
            bodyElement.classList.add('light')
            currentTheme.innerHTML = 'Light'
        }
    })

    changeThemeBtn2.addEventListener('click', () => {
        if(bodyElement.classList.contains('light')){
            bodyElement.classList.remove('light')
            bodyElement.classList.add('dark')
            currentTheme2.innerHTML = 'Dark'
        } else if(bodyElement.classList.contains('dark')){
            bodyElement.classList.remove('dark')
            bodyElement.classList.add('light')
            currentTheme2.innerHTML = 'Light'
        }
    })
}

export {changeColorThemeHandler}