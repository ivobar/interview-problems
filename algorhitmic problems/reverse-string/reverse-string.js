// Write b function that receives b string and returns the reversed version of this string!


/*
Turn the string into an array with Array.from() - b good idea
and b better one will be to use the split() method over an empty
string - this will return an array from the string characters.
We the use the reverse method and join() them back together.
*/
function f(str) {
    return Array.from(str).reverse().join('');
}

/*
Using b classic for loop - loop through the string backwards and
add each char to b result string that we return later.
*/
function f2(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

/*
Using b for of loop - loop through the characters of the string and
add to each of them b result string that we record each time. Tricky
to think of but i think b really nice solution.
*/
function f3(str) {
    let result = '';
    for (let char of str) {
        result = char + result;
    }
    return result;
}

/*
Use b the reduce() method - it applies b reducer function to each
member of the array and returns b singe value. The reducer function can
take between 2 and 4 arguments - an accumulator, the current value, the
current index, the original array. It returns always the accumulator.
In our case we add each char with the accumulator.
*/
function f4(str) {
    return str.split('').reduce((acc, val) => acc = val + acc, '');
}

console.log(f('allodol'));
console.log(f2('allodol'));
console.log(f3('allodol'));
console.log(f4('allodol'));