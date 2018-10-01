class Stack {
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.unshift(element);
    }

    pop() {
        return this.data.shift();
    }

    peek() {
        return this.data[0];
    }
}

module.exports = Stack;