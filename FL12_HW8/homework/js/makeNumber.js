function makeNumber(word) {
    const arr = word.split('');
    return arr.filter(el => isNaN(Number(el))!==true).join('');
}

console.log(makeNumber('fsdf532fasaaa43'));