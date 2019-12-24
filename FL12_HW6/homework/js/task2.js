// Your code goes here
let a = Number(prompt('Enter a:'));
let b = Number(prompt('Enter b:'));
let c = Number(prompt('Enter c:'));

// eslint-disable-next-line eqeqeq
if(isNaN(a)==true || isNaN(b)==true || isNaN(c)==true) {
    alert('Input values should be ONLY numbers!');
// eslint-disable-next-line eqeqeq
} else if(a == 0 || b == 0 || c==0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if(a+b>c && a+c>b && b+c>a) {
        // eslint-disable-next-line eqeqeq
        if(a==b && b==c && c==a) {
            alert('Equilateral triangle');
        // eslint-disable-next-line eqeqeq
        } else if(a==b || a==c || b==c) {
            alert('Isosceles triangle');
        } else {
            alert('Scalene triangle');
        }
    } else {
        alert('Triangle doesn’t exist!')
    }
}