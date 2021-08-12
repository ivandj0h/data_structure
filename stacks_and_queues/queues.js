/* ========== QUEUE ========== */

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue = new Queue();

queue.enqueue("seahorse");
queue.enqueue("dolphin");
queue.enqueue("whale shark");

queue.dequeue();
queue.dequeue();
