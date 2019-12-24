// Your code goes here

let a = prompt('Enter a:');
let b = prompt('Enter b:');
let c = prompt('Enter c:');
let d = 0;

// eslint-disable-next-line eqeqeq
if(a==0 && b==0 && c==0) {
    console.log('Error! You enter all 0!');
} else {
    // eslint-disable-next-line eqeqeq
    if(a == 0) {
        // eslint-disable-next-line no-magic-numbers
        d = Math.pow(b,2)-4*c;
    }
    // eslint-disable-next-line eqeqeq
    if(b == 0) {
        // eslint-disable-next-line no-magic-numbers
        d = -(4*a*c);
    }
    // eslint-disable-next-line eqeqeq
    if(c == 0) {
        // eslint-disable-next-line no-magic-numbers
        d = Math.pow(b,2)-4*a;
    }

    if(d<0) {
        console.log('no solution');
    }

    console.log('Discriminant: '+ d + ';');

    let sqrtD = Math.sqrt(d);
    let x1;
    let x2;
    // eslint-disable-next-line eqeqeq
    if(a == 0) {
        // eslint-disable-next-line no-magic-numbers
        x1 = (-b - sqrtD)/2;
        // eslint-disable-next-line no-magic-numbers
        x2 = (-b + sqrtD)/2;
    }
    // eslint-disable-next-line eqeqeq
    if(b == 0) {
        // eslint-disable-next-line no-magic-numbers
        x1 = -sqrtD/(2*a);
        // eslint-disable-next-line no-magic-numbers
        x2 = sqrtD/(2*a);
    }
    // eslint-disable-next-line eqeqeq
    if(a!=0 && b!=0) {
        // eslint-disable-next-line no-magic-numbers
        x1 = (-b - sqrtD)/(2*a);
        // eslint-disable-next-line no-magic-numbers
        x2 = (-b + sqrtD)/(2*a);
    }
    console.log('x1 = '+ x1 + ';');
    console.log('x2 = '+ x2 + ';');
}