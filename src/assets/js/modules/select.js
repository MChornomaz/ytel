//SELECT INPUT 

const selectHandler = () => {

    const selectElements = document.querySelectorAll('.select');
    let selectIsShown = false;

        selectElements.forEach(el => {
            const selectField = el.firstElementChild;
            const selectDropdown = selectField.nextElementSibling
            const selectArrow = selectField.querySelector('.select__icon')
            const selectBtnText = selectField.querySelector('.select__text')
            const options = selectDropdown.querySelectorAll('.select__option')

            selectField.addEventListener('click', (event) => {
            try {
                event.stopPropagation();
                selectArrow.classList.toggle('active');
                selectDropdown.classList.toggle('active');
                selectIsShown = !selectIsShown;
            } catch (error) {
                console.error('Error in selectField click event:', error);
            }
            });

            selectDropdown.addEventListener('click', (event) => {
                try {
                    event.stopPropagation();
                } catch (error) {
                    console.error('Error in selectDropdown click event:', error);
                }
            });

            options.forEach(option => {
                option.addEventListener('click', (event) => {
                    try {
                        event.stopPropagation();
                        const optionLabel = option.querySelector('.select__option-label').innerHTML
                        const optionValue = option.querySelector('.select__option-value').innerHTML

                        selectArrow.classList.toggle('active')
                        selectDropdown.classList.toggle('active')

                        selectBtnText.innerText = optionLabel
                        el.setAttribute('data-value', optionValue);
                        selectIsShown = false
                    } catch (error) {
                        console.error('Error in option click event:', error);
                    }
                })
            })
        })

    document.addEventListener('click', () => {
        if (selectIsShown) {
            const selectDropdowns = document.querySelectorAll('.select__dropdown');
            selectDropdowns.forEach(el => {
                el.classList.remove('active');
            });

            const selectArrows = document.querySelectorAll('.select__icon');
            selectArrows.forEach(el => el.classList.remove('active'));
            selectIsShown = false;
        }
    });
}

export {selectHandler}