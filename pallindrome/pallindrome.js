function pal1(str) {
    return str.split('').reduce((acc, val) => val + acc, '') === str;
}

function pal2(str) {
    return str.split('').reverse().join('') === str;
}

function pal3(str) {
    revStr = '';

    for (const el of str) {
        revStr = el + revStr;
    }

    return revStr === str;
}


function pal4(str) {
    return str.split('').every((el, i) => {
        return el === str[str.length - 1 - i];
    })
}

console.log(pal1('aba123ba'));
console.log(pal2('aba123ba'));
console.log(pal3('aba123ba'));
console.log(pal4('aba123ba'));