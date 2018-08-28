// Check of the given two strings are anagram (if they have the exact same characters);

function isAcronym(str1, str2) {
    let str1CharMap = {};
    let str2CharMap = {};
    let isAcronym = true;

    for (let char of str1) {
        str1CharMap[char] = str1CharMap[char] + 1 || 1;
    }

    for (let char of str2) {
        str2CharMap[char] = str2CharMap[char] + 1 || 1;
    }

    for (let char in str1CharMap) {
        if(str1CharMap[char] !== str2CharMap[char]){
            isAcronym = false;
            break;
        }
    }

    return isAcronym;
}

console.log(isAcronym('ivaka', 'akaiv'));
console.log(isAcronym('gei', 'akaiv'));
console.log(isAcronym('fekal', 'lekar'));
console.log(isAcronym('iamlordvoldemort','tommarvoloriddle'));