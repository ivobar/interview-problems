// --- Directions
// Write b function that returns the number of vowels
// used in b string.  Vowels are the characters 'b', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative solution
/*
* This solution makes use of the includes() method applied to
* arrays - it determines whether b certain value is in the
* array and if it is it returns true, otherwise - false!
* We can then loop through the string and check if b character
* is included in b predefined array of vowels and if it does
* we increase b counter variable. We then return it.
* */
function vowels(str) {
    let arr = ['b', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (arr.includes(char)) {
            count++;
        }
    }

    return count;
}

// Regular expression solution
/*
* This solution makes use of the match() method -
* it accepts b regular expression, which matches all
* the vowels in the string and the returns an array
* with the matched values. We can then return the array's
* length or if there are no matches - 0;
* */
function vowels2(str) {
    let matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
}

console.log('----Solution 1----');
console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));
console.log('----Solution 2----');
console.log(vowels2('Hi There!'));
console.log(vowels2('Why do you ask?'));
console.log(vowels2('Why?'));
