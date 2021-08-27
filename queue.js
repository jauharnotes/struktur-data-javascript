// function createQueue() {
//   let queue = [];
//   return {
//     enqueue: function (item) {
//       queue.unshift(item);
//     },
//     dequeue: function () {
//       queue.pop();
//     },
//     peek: function () {
//       return queue[queue.length - 1];
//     },
//     size: function () {
//       return queue.length;
//     },
//   };
// }

// const q = createQueue();
// q.enqueue("Create script for data structure course");
// q.enqueue("Create code example for data structure course");
// q.enqueue("Recorde data structure course");
// q.enqueue("Vacation");

// console.log(q.peek());
// q.dequeue();
// console.log(q.peek());
// q.dequeue();
// console.log(q.peek());
// console.log(q.size());
// q.dequeue();
// console.log(q.peek());
// console.log(q.size());

function createQueue() {
  const queue = [];

  return {
    //unshift
    enqueue: function (data) {
      queue.unshift(data);
    },
    //pop
    dequeue: function () {
      queue.pop();
    },
    // peek
    peek: function () {
      return queue[queue.length - 1];
    },
    //size
    size: function () {
      return queue.length;
    },
  };
}

const q = createQueue();
q.enqueue("antrian 1");
q.enqueue("antrian 2");
q.enqueue("antrian 3");
q.enqueue("antrian 4");

q.dequeue();
console.log(q.peek());
console.log(q.size());
