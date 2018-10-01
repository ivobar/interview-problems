let a = 1;

function f(a) {
    a = 1232132;
}

f(a);

console.log(a);

/*******/

let b = [];

function ff(b) {
    b[0] = 1;
}

ff(b);

console.log(b);