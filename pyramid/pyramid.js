// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        str += '*'.repeat(n - row - 1);
        str += '#'.repeat(2 * row + 1);
        str += '*'.repeat(n - row - 1);
        console.log(str);
    }
}

function pyramid2(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (col < n - row - 1 || col > n + row - 1) {
                str += '*';
            } else {
                str += '#';
            }
        }
        console.log(str);
    }
}

function pyramid3(n, row = 0, str = '') {
    if (n === row) {
        return;
    }

    if (str.length === 2 * n - 1) {
        console.log(str);
        pyramid3(n, row + 1);
        return;
    }

    if (str.length < n - row - 1 || str.length > n + row - 1) {
        str += '*';
    } else {
        str += '#';
    }
    pyramid3(n, row, str);
}


pyramid3(1);
console.log('---');
pyramid3(2);
console.log('---');
pyramid3(3);
console.log('---');
pyramid3(4);
console.log('---');
pyramid3(5);