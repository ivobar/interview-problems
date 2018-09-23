/*
Write a function that receives a string and returns true or false depending
if the string is a palindrome or not. A palindrome is a string that is spelled
exactly the same forwards and backwards.
*/

/*
* This problem is strictly related to the reverse string one. The best way
* to go about it is to reverse the string and the compare it to the original.
* If they are equal then the string is a palindrome
*/
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

/*
* A slightly different approach to this is using the every() method. The every() method
* tests whether all elements in the array pass the test implemented by the provided function.
* It returns true if all the elements pass the provided test! The second argument of the
* every() method is the current index. We can use this knowledge to check if the first and
* last characters match, then the inner ones and so on. The downside of this solution is that
* we double check each pair.
* */
function pal4(str) {
    return str.split('').every((el, i) => {
        return el === str[str.length - 1 - i];
    })
}

console.log(pal1('abba'));
console.log(pal2('abba'));
console.log(pal3('abba'));
console.log(pal4('abba'));