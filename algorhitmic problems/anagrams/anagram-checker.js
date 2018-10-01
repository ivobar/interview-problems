/*
* Description:
* Check to see if two provided strings are anagrams of each other.
* Two strings are considered an anagram when they have the exact same
* characters
*/

//Solution 1
function isAnagram(str1, str2) {
    let str1ToCheck = str1.replace(/[^\w]/g, '').toLowerCase();
    let str2ToCheck = str2.replace(/[^\w]/g, '').toLowerCase();
    if (str1ToCheck.length !== str2ToCheck.length) {
        return false;
    }

    let str1CharMap = {};
    let str2CharMap = {};

    let isAnagram = true;

    for (let char of str1ToCheck) {
        str1CharMap[char] = str1CharMap[char] + 1 || 1;
    }

    for (let char of str2ToCheck) {
        str2CharMap[char] = str2CharMap[char] + 1 || 1;
    }

    for (let char in str1CharMap) {
        if (str1CharMap[char] !== str2CharMap[char]) {
            isAnagram = false;
            break;
        }
    }

    return isAnagram;
}

//Solution 2
/*
* In this solution we make use of the sort() function
* */
function isAnagram2(str1, str2) {
    let arr1 = str1.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    let arr2 = str2.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    return arr1 === arr2;
}

console.log('---------Solution 1---------');
console.log(isAnagram('ivaka ', 'akaiv!!!!'));
console.log(isAnagram('gei', 'akaiv'));
console.log(isAnagram('fekal', 'lekar'));
console.log(isAnagram('I am Lord Voldemort', 'Tom Marvolo Riddle'));
console.log(isAnagram('hello', 'hellor'));
console.log(isAnagram('hellor', 'hello'));

console.log('---------Solution 2---------');
console.log(isAnagram2('ivaka ', 'akaiv!!!!'));
console.log(isAnagram2('gei', 'akaiv'));
console.log(isAnagram2('fekal', 'lekar'));
console.log(isAnagram2('I am Lord Voldemort', 'Tom Marvolo Riddle'));
console.log(isAnagram2('hello', 'hellor'));
console.log(isAnagram2('hellor', 'hello'));