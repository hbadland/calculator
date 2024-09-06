function addNumbers (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        const result = x + y;
        console.log('added')
        return result;
    } else {
        console.log('Addition ERORR')
        return null;
    }
}

function subtractNumbers (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        const result = x - y;
        console.log('subtracted')
    } else {
        console.log('subtraction error')
        return null;
    }
}

function multiplyNumbers (x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        const result = x * y;
        console.log('multiplied')
    } else {
        return null;
    }
}

function divideNumbers (x, y) {
    if (typeof x === 'number' && typeof y === 'number'){
        const result = (x / y);
    } else {
        return null;
    }
}

function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    //switch statement as can be one of the 4 operations
    switch(operator) {
        case 'addNumbers':
            return addNumbers(num1, num2);
            break;
        case 'subtractNumbers':
            return subtractNumbers(num1, num2);
            break;
        case 'divideNumbers':
            return divideNumbers(num1, num2);
            break;
        case 'multiplyNumbers':
            return multiplyNumbers(num1, num2);
            break;
    }
}

//create the functions that populate the display when you click the number button
//DOM Elements + store display value
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
let output = document.querySelector('.output');
const numberKeys = document.querySelector('.number');
const operatorKeys = document.querySelector('.operator');

//need to store the display valuable as a variable
let displayValue = '', operation = '', number1 = 0, number2 = 0, operator = '';
let isOperatorPressed = false;
let result = 0;

//set initial values
function initial() {
    number1 = 0;
    number2 = 0;
    displayValue = '';
    result = 0;
    output.innerHTML = result;
}