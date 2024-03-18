import { createNode } from "./Node.js";

export const createLinkedList = () => {
  let head = null;
  let tail = null;

  const prepend = (val) => {
    const newNode = createNode(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
  };

  const append = (val) => {
    const newNode = createNode(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  };

  const print = () => {
    console.log(head);
  };

  const size = () => {
    let count = 0;
    let current = head;

    while (current) {
      count++;
      current = current.next;
    }
    console.log(count);
  };

  return {
    prepend,
    append,
    print,
    size,
  };
};
