// Your code goes here
const two = 2;
const three = 3;
const eight = 8;
const four = 4;
const seven = 7;
const ourYear = 2019;
const date = new Date(ourYear,0,two);
let thirty = 30;
let thirtyone = 31;
const a = ['1', two, three, '4', '5'];
const b = [1,two,three];
const c = [two,'5',eight];
const d = [two,four,three,eight];
const e = [two,thirtyone,thirty];
const actors = [
    {name: `tommy`, age: 36},
    {name: `lee`, age: 28}
]


function convert(items) {
    let newArr = [];
    items.forEach(function(item, i) {
        if(typeof item === 'string'){
            newArr[i] = Number(item);
        }else{
            newArr[i] = item + '';
        }
    });
    return newArr;
}

console.log('#1 convert');
console.log(convert(a));

function pow(el) {
    return el * two;
}

function executeforEach(b) {
    let callback = arguments[1];
    if(arguments[two]!==undefined) {
        for(let i = 0;i<actors.length;i++) {
            b.push(actors[i][callback(arguments[two])]);
        }
    }
    b.forEach(function(item, i) {
        b[i]=callback(item);
    });
}

console.log('#2 executeforEach');
executeforEach(b,pow);
console.log(b);

function plus(el) {
    return el + three;
}

function mapArray(c,plus) {
    let res = [];
    c.forEach(function(item, i) {
        if(typeof item === 'string') {
            res[i]=Number(item);
        }else {
            res[i]=item;
        }
    });
    executeforEach(res, plus);
    return res;
}

console.log('#3 mapArray');
console.log(mapArray(c, plus));

function remains(el) {
    return el%two===0 ? el : null;
}

function filterArray(d, remains) {
    let res = [];
    executeforEach(d, remains);
    d.forEach(function(item) {
        if(item !== null) {
            res.push(item);
        }
    });
    return res;
}

console.log('#4 filterArray');
console.log(filterArray(d, remains));

function flipOver(words) {
    let newString = '';
    for (let i = words.length - 1; i >= 0; i--) { 
        newString += words[i];
    }
    return newString;
}

console.log('#5 flipOver');
console.log(flipOver('hey world'));

function makeListFromRange() {
    let res = [];
    for(let i = arguments[0][0];i<=arguments[0][1]; i++) {
        res.push(i)
    }
    return res;
}

console.log('#6 makeListFromRange');
console.log(makeListFromRange([two,seven]));

function get_keyName(name) {
    return name;
}

function getArrayOfKeys(actors, keyName) {
    let newArr = [];
    executeforEach(newArr, get_keyName, keyName)
    return newArr;
}

console.log('#7 getArrayOfKeys');
console.log(getArrayOfKeys(actors, 'name'));

function changingLowerThanThirty(el){
    if(el<thirty) {
        el='*';
    }
    return el;
}

function substitute() {
    let newArr = [];
    newArr = mapArray(e,changingLowerThanThirty)
    return newArr;
}

console.log('#8 substitute');
console.log(substitute());

function getPastDay(date, amount) {
    let copyDate=new Date();
    copyDate.setDate(date.getDate()-amount);
    return copyDate.getDate();
}

console.log('#9 getPastDay');
console.log(getPastDay(date, three));

function formatDate(date) {
    let month = date.getMonth()+1;
    let formatedDate = date.getFullYear()+'/'+month+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
    return formatedDate;
}

console.log('#10 formatDate');
console.log(formatDate(new Date('6/15/2018 09:15:00')));