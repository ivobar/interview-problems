class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/*
* A linked list is a data structure that is formed out of nodes
* , each node containing data and a reference to the following
* node. The first node of the linked list is called a head and
* the last node is called a tail. The tail node will always
* point to null (ass there are no more nodes to follow it).
* */
class LinkedList {
    constructor() {
        this.head = null;
    }

    //To implement this method we make use of the Node class.
    //The node class constructor accepts two parameters - if
    //no next param is passed it is assigned a null value.
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    //Implementation of this method will use a very common way
    //of iterating through linked lists - with a while loop
    //which follows the chain from head to tail. When it reaches
    //a null node the iteration is completed.
    size() {
        let node = this.head;
        let counter = 0;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    //ez pz
    getFirst() {
        return this.head;
    }

    //A bit tricky - we first have to check if the linked list
    //has any nodes at all (it may be possible for this method
    //to be called when the list is empty.
    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    //Ez pz
    clear() {
        this.head = null;
    }

    //Here as well we have to be careful and check if
    //the list is not empty.
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    //What we have to do here essentially is change the
    //reference of the node before the tail node to null.
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let node = this.head;
        while (node.next.next) {
            node = node.next;
        }
        node.next = null;
    }

    //Instead of writing anew a logic for accessing the last method
    //like I moronically did at first - we should conclude that we
    //already have a method that gives us that - the getLast() method.
    //In an interview setting it is highly advisable to reuse some piece
    //of code that you have already written!
    insertLast(data) {
        let newNode = new Node(data);
        let lastNode = this.getLast();
        if (!lastNode) {
            this.head = newNode;
        } else {
            lastNode.next = newNode;
        }
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }

        return null;
    }

    removeAt(index) {
        //first we see if the list is empty. If it is - we don't do anything;
        if (!this.head) {
            return;
        }
        //then we see if we want to delete element at index 0. If we do - then we manually do.
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        //then using the already created getAt method we retrieve the previous node of the one at index.
        const prevNode = this.getAt(index - 1);
        //We then check for some edge cases that will throw an error in the code below - when the index
        //is out of bounds and when the index is the following index after the last element! (tricky to think of)
        if (!prevNode || !prevNode.next) {
            return;
        }
        //if all edge cases are covered then we assign the next node of the previous node to be the one one index after
        //the node at index;
        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) {
            this.getLast().next = new Node(data);
            return;
        }
        prevNode.next = new Node(data, prevNode.next);
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

}

module.exports = {Node , LinkedList};