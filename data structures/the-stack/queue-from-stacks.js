const Stack = require('./stack');

class Queue {

    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(element) {
        this.s1.push(element);
    }

    remove() {
        while (this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }

        const lastEle = this.s2.pop();

        while (this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        return lastEle;
    }

    peek() {
        while (this.s1.peek()) {
            this.s2.push(this.s1.pop());
        }

        const lastEle = this.s2.peek();

        while (this.s2.peek()) {
            this.s1.push(this.s2.pop());
        }

        return lastEle;
    }

}

let q1test = new Queue();

q1test.add(1);
q1test.add(2);
q1test.add(3);
q1test.add(4);
q1test.add(5);
console.log(q1test.peek());
console.log(q1test.remove());
console.log(q1test.peek());
console.log(q1test.remove());
console.log(q1test.remove());
console.log(q1test.remove());
