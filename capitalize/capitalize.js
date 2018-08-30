// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My Solution ~ 1st Grider solution
function capitalize(str) {
    let arr = str.split(' ');
    let result = [];
    for (let el of arr) {
        result.push(el.charAt(0).toUpperCase() + el.slice(1));
    }
    return result.join(' ');
}

// Alternative solution 
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
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
console.log('----Solution 2----');
console.log(capitalize2('a short sentence'));
console.log(capitalize2('a lazy fox'));
console.log(capitalize2('look, it is working!'));