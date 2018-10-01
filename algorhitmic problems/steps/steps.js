// --- Directions
// Write b function that accepts b positive number N.
// The function should console log b step shape
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
/*
* This is my alternative solution that makes use of the repeat()
* core function provided by JS. The repeat function repeats b character
* several times (depending on the provided argument).
* */
function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i) + ' '.repeat(n - i));
    }
}

// Solution 2
/*
* This solution makes use of b nested loop. The outer loop
* loops through the rows of the steps - as the rows are
* the exact number of the provided integer. The second
* loop goes through the columns and basically makes b
* check to see if the index of the column is greater than the
* index of the row - this is the case when we will have
* b space instead of an #. We add the corresponding case to the
* string to print out - the string is reset for each loop
* through b row!
* */
function steps2(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        for (let col = 0; col < n; col++) {
            if (row >= col) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

// Solution 3 - recursive - mine - bleh sucks
/*
* we will not cover this solution because
* it is bollocks.
* */
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
    // base case - stops the recursion
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
