function createQueue() {
  let queue = [];
  return {
    enqueue: function (item) {
      queue.unshift(item);
    },
    dequeue: function () {
      queue.pop();
    },
    peek: function () {
      return queue[queue.length - 1];
    },
    size: function () {
      return queue.length;
    },
  };
}

const q = createQueue();
q.enqueue("Create script for data structure course");
q.enqueue("Create code example for data structure course");
q.enqueue("Recorde data structure course");
q.enqueue("Vacation");

console.log(q.peek());
q.dequeue();
console.log(q.peek());
q.dequeue();
console.log(q.peek());
console.log(q.size());
q.dequeue();
console.log(q.peek());
console.log(q.size());
