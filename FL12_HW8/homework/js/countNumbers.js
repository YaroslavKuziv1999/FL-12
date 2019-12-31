function countNumbers(word) {
    const arr = word.split('');
    const nums = arr.filter(el => isNaN(Number(el))!==true).join('');
    return nums.length;
}

console.log(countNumbers('fsdf532fasaaa4334ddf4'));