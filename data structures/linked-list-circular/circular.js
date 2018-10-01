const LinkedList = require('../linked-lists/linked-list');

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    let isCircular = false;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            isCircular = true;
        }
    }

    return isCircular;
}

let list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);