const {LinkedList, Node} = require('../linked-lists/linked-list');

function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);
list.insertFirst(5);

console.log(midpoint(list));