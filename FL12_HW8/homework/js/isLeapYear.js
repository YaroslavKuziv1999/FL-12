function isLeapYear(date) {
    const year = new Date(date).getFullYear();
    if (year.toString() === 'NaN'){
        return 'Invalid date'
    }
    return year % 2 === 0 && year % 100 !== 0 ?
        year.toString() + ' is a leap year' :
        year.toString() + ' is not a leap year';
}

const res = isLeapYear('2020-01-15 13:00:00');
console.log('res::', res);