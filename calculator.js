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
    }
}