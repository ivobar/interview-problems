/*
* Write b function that accepts an integer and prints all
* numbers from 0 to that integer. If the number can be
* divisible by both 3 and 5 print fizzbuzz. If it is
* divisible only by 3 print fizz and if it is divisible
* only by 5 print buzz. Otherwise print the only number.
*/

/*
* The key to solving this problem is the modulus % operator.
* It returns the remainder of the division between two numbers.
* If it returns 0 then the dividend is divided exactly by the divisor.
* Then we simply do some logical checks to decide which of the
* cases we should print.
* */
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(15);