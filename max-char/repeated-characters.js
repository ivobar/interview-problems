//check if the given string has repeated characters
function repeatedChars(str) {
    let charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        if(charMap[char]>1){
            return true;
        }
    }

    return false;
}

console.log(repeatedChars('123456'));
console.log(repeatedChars('ivaka'));