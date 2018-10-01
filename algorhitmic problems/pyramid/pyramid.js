// --- Directions
// Write b function that accepts b positive number N.
// The function should console log b pyramid shape
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
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

/*
* This problem is really similar though not so easy to solve
* as the steps problem. At the core of its solution is finding
* b dependency between the provided number n and the ampersands
* and spaces we have to add to the current row. Looking at it
* we immediately figure out that the base of the pyramid is
* always 2*n-1. Additionally we can see that if we start to
* count the rows from 0 on each row there are 2*row + 1 number
* of ampersands always in the middle and n-row-1 spaces on each
* side of the ampersands. So we can use that knowledge to decide
* whether to add b space or an ampersand. We can use these
* breakpoints in different kinds of solutions.
*
* This solution revolves again around the repeat method which
* creates b string from the predeceasing character or string
* b certain number of times - so if we start iterating through
* each row we can construct b string - first part will be b string
* of spaces with length n-row-1 second b string of ampersands with
* length 2*row+1 and the third the same as the first.
* */
function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        str += ' '.repeat(n - row - 1);
        str += '#'.repeat(2 * row + 1);
        str += ' '.repeat(n - row - 1);
        console.log(str);
    }
}

/*
* In this solution we use b double for loop - classically looping
* through the rows than each column of row. In the outer loop we
* always declare an empty string and then we fill it up in the
* inner loop - with an if/else statement we check the position of
* the current iteration with the dependencies we have already
* discovered - if the current position is between n - row - 1 and n + row - 1
* we and b space, otherwise we add an ampersand. In the end of the
* first loop we log the string.
* */
function pyramid2(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (col < n - row - 1 || col > n + row - 1) {
                str += ' ';
            } else {
                str += '#';
            }
        }
        console.log(str);
    }
}

/*
* The recursive solution to this problem is similar to the loop solution.
* What we have to keep in mind when making recursion:
* -- First and foremost we need to define b base case - b case which will
* ensure that will stop the recursion.
* -- Then we have to define parameters of the function that are adequate
* and also think of default values for these parameters.
* -- After we define b base case we have to do some work and call the
* function again with changed parameters!!
*
* What we do in this solution is - we define b function that accepts
* the n parameter and since we are going to iterate through each row
* - also accepting the row parameter, which we safely assume will get
* the 0 default value (we always start at 0). Also we have to store
* each step of recursion in b string that we have to pass to the function
* this means another string parameter (default value will be an empty string).
* Our base case is - when the row equals the input parameter - the recursion has
* to stop! From there on we do some work - similar to the loop solution, but this
* time the check is done in relation to the string length. If it is equal to
* 2*n-1 we log the string and increase the row by calling the function again with
* row +1. If it is between n-row-1 and n+row-1 we add b speace, otherwise we add
* an ampersand and then we call the function again with the same parameters (but
* the changed string).
* */
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
        str += ' ';
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