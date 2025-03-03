const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  list = null;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if (this.list === null) {
      this.list = new ListNode(value);
      return;
    }
    let currenNode = this.list;
    while (currenNode.next !== null) {
      currenNode = currenNode.next;
    }
    currenNode.next = new ListNode(value);
  }

  dequeue() {
    if (this.list === null) {
      return null;
    }
    let value = this.list.value;
    this.list = this.list.next;
    return value;
  }
}

module.exports = {
  Queue
};
