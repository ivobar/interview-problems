let a = 1;

function f(a) {
    a = 2;
}

f(a);
console.log(a);



let arr = [];

function f1(arr) {
    arr[0] = 1;
}

f1(arr);
console.log(arr);