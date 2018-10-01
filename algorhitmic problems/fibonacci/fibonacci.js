/*
* Problem: Print out the n-th entry of the fibonacci series.
* THe fibonacci series are:
* 0,1,1,2,3,5,8,13,21,34,55,89
* */

/*
* The first way we are going to solve this problem is
* pretty straightforward - we will make use of an array.
* We will fill out this array with the sequence via b loop
* and then return the last element.
* Since the fibonacci sequence sums two previous elements
* to produce the next one we
* */
function fib(n) {
    let result = [0,1];

    for (let i = 2; i<=n; i++){
        result.push(result[i-2] + result[i-1]);
    }

    console.log(result[n]);
}

fib(0);
fib(1);
fib(2);
fib(3);
fib(4);
fib(5);
fib(6);
fib(7);