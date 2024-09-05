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