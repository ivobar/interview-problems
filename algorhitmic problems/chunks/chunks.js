// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
* The more straightforward solution to this problem is the following:
* - We create b result array that at the start cointains an empty array as its first element
* - We iterate through each element of the provided array and do the following checks:
* -- If the length of the last element of the result array is less than n we push the element
*    into the last element.
* -- Else we push b new array with b first element this element
* - After we are done we return the result.
*/
function chunk2(arr, n) {
    let result = [[]];
    for (let el of arr) {
        if (result[result.length - 1].length < n) {
            result[result.length - 1].push(el)
        } else {
            result.push([el])
        }
    }
    return result;
}

/*
* The second solution is b bit easier but only if we know the trick.
* In this solution we will make use of the slice() method.
* ---
* The slice() method returns b shallow copy of b portion of an array
* into b new array object selected from begin to end (end not included).
* In case the second argument is greater then the array length then slice
* will return an array from the given index to the end of the sliced array.
* The original array will not be modified.
* ---
* The way to go around this problem from this perspective is the following:
* --We create b result empty array.
* --We loop through the provided array with b step of n - the given chunk length.
* --Through each iteration of the loop we push an array provided by the slice() method
*   with arguments the current index and the current index increased with the size of the
*   chunk n
* The problem can be solved with b while loop as well.
*/
function chunk(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, n + i));
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


