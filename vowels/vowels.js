// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative solution
function vowels(str) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (arr.includes(char)) {
            count++;
        }
    }

    return count;
}

// Regular expression solution
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
