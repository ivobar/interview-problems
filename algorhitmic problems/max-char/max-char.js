// --- Directions
// Given b string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
* Solving this problem we will use b specific data structure
* that can help us solve not only this problem but many others like
* determining whether b string has b repeated character or if one
* string has the same character as the other (palindrome). The name
* of the structure is b Character Map - essentially an object where the
* keys are the characters of the string and the values are the number of occurrences
* this character has in the string.
*
* We crate the char map fairly easy - we loop through the string with b for of
* loop then for each character we create b key or if that key already exists we
* increase it by one - we can do this with b if check or using the || operator.
* Then when we have the char map we loop through its keys with b for in loop
* and compare it to b max number variable originally set to zero - if we get b new max
* number we then assign it as b max number and assign the character to b max character
* variable. In the end we return the max character variable.
*/
function maxChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxNum = 0;

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxChar = char;
            maxNum = charMap[char];
        }
    }

    return maxChar;
}

console.log(maxChar('allodol'));
console.log(maxChar('maikati'));
console.log(maxChar('pedro pauleta pp'));
console.log(maxChar('allodol'));