const Queue = require('./queue');

function weave(q1, q2) {
    let queue = new Queue();

    while (q1.peek() || q2.peek()) {
        if (q1.peek()) {
            queue.add(q1.remove());
        }
        if (q2.peek()) {
            queue.add(q2.remove());
        }
    }

    return queue;
}

let queueOne = new Queue();
queueOne.add('Why');
queueOne.add('Hello');


let queueTwo = new Queue();
queueTwo.add('1');
queueTwo.add('2');
queueTwo.add('3');
queueTwo.add('4');
queueTwo.add('5');

console.log(weave(queueOne, queueTwo));