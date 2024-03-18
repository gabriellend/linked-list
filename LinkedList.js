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

  return {
    prepend,
    append,
    print,
  };
};
