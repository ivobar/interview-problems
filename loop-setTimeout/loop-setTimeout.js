// interviewer: what will the following code output?
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     // pass in the variable i so that each function
//     // has access to the correct index
//     setTimeout(function(i_local) {
//         return function() {
//             console.log('Index: ' + i_local + ', element: ' + arr[i_local]);
//         }
//     }(i), 3000);
// }

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     // using the ES6 let syntax, it creates a new binding
//     // every single time the function is called
//     // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//     setTimeout(function() {
//         console.log('The index of this number is: ' + i);
//     }, 3000);
// }
//
// const arr = [];
// for (var i=0; i < 3; i++) {
//     arr.push(() => i);
// }
// console.log(arr.map(x => x())); // [3,3,3]

/*
* THE  CLASS DOESN'T FOLLOW THE SRP PRINCIPLE
*/