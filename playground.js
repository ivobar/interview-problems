/*
function anagram(str1, str2) {
    let formattedStr1 = str1.replace(/[^\w]/g,'').toLowerCase();
    let formattedStr2 = str2.replace(/[^\w]/g,'').toLowerCase();

    if(formattedStr1.length !== formattedStr2.length){
        return false;
    }

    let charMap1 = {};
    let charMap2 = {};

    //Generate first char map
    for(let char of formattedStr1){
        charMap1[char] = charMap1[char]++ || 1;
    }

    //Generate second char map
    for(let char of formattedStr2){
        charMap2[char] = charMap2[char]++ || 1;
    }

    for(let char in charMap1){
        if(charMap1[char] !== charMap2[char]){
            return false;
        }
    }

    return true;

}

console.log(anagram('Tom Marvolo Riddle', 'I am Lord Voldemort'));
console.log(anagram('ivo e !!!pechen', 'Chepen ivoe!!'));
console.log(anagram('asdasda', 'asdsadaaaaaa!!'));
*/

function anagram2(str1, str2) {
    let formattedStr1 = str1.replace(/[^\w]/g)
}