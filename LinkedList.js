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

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const size = () => {
    let count = 0;
    let current = head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  };

  const at = (i) => {
    if (i < 0 || !Number.isInteger(i)) {
      return null;
    }

    let count = 0;
    let current = head;

    while (current) {
      if (count === i) {
        return current;
      }

      current = current.next;
      count++;
    }

    return null;
  };

  return {
    prepend,
    append,
    print,
    getHead,
    getTail,
    size,
    at,
  };
};
