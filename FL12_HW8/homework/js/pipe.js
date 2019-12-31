function pipe() {
    let number = arguments[0];
    let functions = [];
    for (let i = 1; i < arguments.length; ++i) {
        functions.push(arguments[i]);
    }
    functions.forEach(func => {
        number = func(number);
    });
    return number;
}

function add(x) {
    return x + 1;
}

function milt(x) {
    return x * 2;
}

function minus(x) {
    return x - 5;
}

const res = pipe(1, add, milt, minus);
console.log('res::', res);