class Queue {
    constructor() {
        this.data = [];
    }

    add(element) {
        this.data.unshift(element);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Queue;