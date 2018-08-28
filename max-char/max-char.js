// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

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