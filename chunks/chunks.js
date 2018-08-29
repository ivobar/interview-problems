// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//My solution
function chunk(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, n + i));
    }

    return result;
}

//Grider solution
function chunk2(arr, n) {
    let result = [[]];
    for (let el of arr) {
        if(result[result.length -1].length < n){
            result[result.length - 1].push(el)
        }else {
            result.push([el])
        }
    }
    return result;
}

console.log('-----Solution 1-----');
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));
console.log(chunk([1], 10));
console.log('-----Solution 2-----');
console.log(chunk2([1, 2, 3, 4], 2));
console.log(chunk2([1, 2, 3, 4, 5], 2));
console.log(chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk2([1, 2, 3, 4, 5], 4));
console.log(chunk2([1, 2, 3, 4, 5], 10));
console.log(chunk([1], 10));


