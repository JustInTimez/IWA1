/* Create/define variables that will be used:
    1. The number element - it will be updating as a result of button click
    2. The + button for incrementing the number counter
    3. The - button for decrementing the number counter
*/

const MAX_NUMBER = 5
const MIN_NUMBER = -5
const STEP_AMOUNT = 2

const number = document.querySelector('[data-key="number"]')
const add = document.querySelector('[data-key="add"]')
const subtract = document.querySelector('[data-key="subtract"]')

// Lexical scope = variables that are defined and used within function block
const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

add.addEventListener('click', addHandler)
subtract.addEventListener('click', subtractHandler)