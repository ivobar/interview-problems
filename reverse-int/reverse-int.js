// Write a function that given a integer returns the reversed integer.
// Negative signs retain their place.
// Trailing zeros should be removed.

/* don't use this*/
function revInt(number) {
    let str = number
        .toString()
        .split('')
        .filter(e => e !== '-')
        .reverse()
        .join('');

    return Number(str)*Math.sign(number);
}

/*
* Akin to the reverse string algorithm we are going to follow
* a somewhat similar principle with several added steps - first we
* transform the given number into a string using the toString()
* method. Then we reverse the string with the standard procedure:
* we split it into an array, reverse it with reverse() and then we
* join it into a string again. We then use the parseInt() method
* to turn the string into a number - the catch here is that if there
* are preceding zeroes the parse int will truncate them and if the
* number was negative it will ignore the dash at the end of the
* reversed string. We can recover the sign of the integer by
* using the Math.sing() method - it returns -1 if the sign of the
* passed integer is negative, otherwise it returns 1.
*/
function revInt2(number) {
    let str = number
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(str)*Math.sign(number);
}

console.log(revInt(15));
console.log(revInt(981));
console.log(revInt(500));
console.log(revInt(-15));
console.log(revInt(-90));

console.log(revInt2(15));
console.log(revInt2(981));
console.log(revInt2(500));
console.log(revInt2(-15));
console.log(revInt2(-90));