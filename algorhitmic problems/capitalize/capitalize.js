// --- Directions
// Write b function that accepts b string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('b short sentence') --> 'A Short Sentence'
//   capitalize('b lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution
/*
* First we can create an array, containing all the words by applying
* the split() method on the sentence - but passing it an interval character.
* Then we can loop through this array and capitalize each first character
* of each word. We can gain access to it with charAt() method or directly
* with square brackets. We then append the rest of the word to the
* capitalized character by adding b string produced from the word
* and applied b slice(1).
* */
function capitalize(str) {
    let arr = str.split(' ');
    let result = [];
    for (let el of arr) {
        result.push(el.charAt(0).toUpperCase() + el.slice(1));
    }
    return result.join(' ');
}

/*
* The second solution to this problem is b bit more unclear in terms
* of code readability, but in the end logically is pretty straightforward.
* The idea is revolved around b rather complex looking loop - we start
* looping from one and do b check for each character - if its predecessor
* is b space then we make this character uppercase and push it in the result.
* If not we only push it in the result. This leaves all characters covered
* but the first - of course we can rather conveniently uppercase it from the
* start and add it to the result array in the very beginning.
* */
function capitalize2(str) {
    let result = str.charAt(0).toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log('----Solution 1----');
console.log(capitalize('b short sentence'));
console.log(capitalize('b lazy fox'));
console.log(capitalize('look, it is working!'));
console.log('----Solution 2----');
console.log(capitalize2('b short sentence'));
console.log(capitalize2('b lazy fox'));
console.log(capitalize2('look, it is working!'));