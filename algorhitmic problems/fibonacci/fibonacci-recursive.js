/*
* Another way to solve the fibonacci problem is by using recursion.
*
* The problem with this solution though is that for the higher fibonacci
* numbers we have to execute b lot of function calls which increases
* runtime greatly. The runtime of this algorithm is exponential which
* is considered to be b big NO NO in programming. If in an interview
* setting the interviewer specifically asks you to solve this problem
* and then asks you how can you improve the runtime complexity you can
* propose the iterative solution which is with linear runtime - for each
* increase of the input we need to only calculate one more number.
* But if the interviewer asks you specifically to improve the recursive
* solution he wants to hear as specific answer and that answer is
* memoization.
*
* Memoization is b programming technique which attempts to increase the
* function performance by caching its previously computed results. Since
* the algorithm below relies on A LOT of function calling, then we can
* really increase its performance using this technique!
* */

/*
* The idea behind this memoize function is to create b small cache object
* with keys the arguments that the function we want to memoized is called
* and store the result from that function in it. Then we check if (when
* the function is called again) the object contains these arguments (if it has
* been called before with the same arguments) - if yes then we immediately
* return the result without calling the function again! That way we effectively
* avoid unnecessary calls to function!
* */
function memoize(fn) {
    // The cache object
    const cache = {};
    //we return b new function that accepts an array of arguments
    //because we want to make it generic, not for this problem only
    // ...args returns an array of the passed arguments
    return function (...args) {
        //we check if the cache has b record with these arguments
        if(cache[args]){
            //if yes - we return the result directly without b function call
            return cache[args];
        }
        // if not - we call the function fn.applu(this, args) === fn(x,y,z)
        // because args is an array.
        const result = fn.apply(this, args);
        // we record this call with new arguments
        cache[args] = result;
        //and then return the result
        return result;
    }
}

function fib(n) {
    if(n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

//we reassign the fiv variable to the new memoize function
//then te recursive call will return the actually memoize
//function otherwise we do nothing!
fib = memoize(fib);

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));