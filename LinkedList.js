import { createNode } from "./Node.js";

export const createLinkedList = () => {
  let head = null;
  let tail = null;

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
    return head;
  };

  return {
    append,
    print,
  };
};
