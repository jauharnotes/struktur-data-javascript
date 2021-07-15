function createStack() {
  let array = [];

  return {
    push: function (item) {
      array.push(item);
    },
    pop: function () {
      array.pop();
    },
    peek: function () {
      return array[array.length - 1];
    },
    size: function () {
      return array.length;
    },
  };
}

const bookStack = createStack();
bookStack.push("The Evective Engineer");
bookStack.push("The Pragmatic Programmer");
bookStack.push("Outlers");

// console.log(bookStack.peek());
// console.log(bookStack);

bookStack.pop();
console.log(bookStack.peek());
bookStack.pop();
console.log(bookStack.peek());
console.log(bookStack.size());
