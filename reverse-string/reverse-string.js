function f(str) {
    return Array.from(str).reverse().join('');
}

function f2(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function f3(str) {
    let result = '';
    for (let char of str) {
        result = char + result;
    }
    return result;
}

function f4(str) {
    return str.split('').reduce((acc, val) => acc = val + acc, '');
}

console.log(f('allodol'));
console.log(f2('allodol'));
console.log(f3('allodol'));
console.log(f4('allodol'));