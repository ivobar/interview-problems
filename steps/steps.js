// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Soluton 1
function steps(n) {
    for (let i = 0; i < n; i++) {
        console.log('#'.repeat(i + 1) + ' '.repeat(n - i - 1));
    }
}

// Solution 2
function steps2(n) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (i >= j) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

// Solution 3 - recursive - mine - bleh sucks
function steps3(n) {
    function stepGen(row) {
        if (row === n) {
            return;
        }
        let str = '';
        for (let col = 0; col < n; col++) {
            if (col > row) {
                str += ' ';
            } else {
                str += '$';
            }
        }
        console.log(str);
        stepGen(row + 1);
    }
    stepGen(0);
}

//Solution 4 - recursive - recreation of Grider
function steps4 (n , row = 0, str = '') {
    if (n === row){
        return;
    }

    if(str.length === n) {
        console.log(str);
        steps4(n, row+1);
        return;
    }

    if(str.length <= row) {
        str += '#';
    } else {
        str += ' ';
    }

    steps4(n, row, str);
}

console.log('Solution 1');
steps(2);
console.log('----');
steps(3);
console.log('----');
steps(4);
console.log('Solution 2');
steps2(2);
console.log('----');
steps2(3);
console.log('----');
steps2(4);
console.log('Solution 3');
steps3(2);
console.log('----');
steps3(3);
console.log('----');
steps3(4);
console.log('Solution 4');
steps4(2);
console.log('----');
steps4(3);
console.log('----');
steps4(4);
