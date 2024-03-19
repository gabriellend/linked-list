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
    if (!head) {
      console.log("Empty list");
      return;
    }

    let current = head;
    let listString = "";

    while (current) {
      listString += `(${current.value})`;
      if (current.next) {
        listString += " -> ";
      } else {
        listString += " -> null";
      }

      current = current.next;
    }

    console.log(listString);
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

  const pop = () => {
    // Empty list
    if (!head) return null;

    // List with one node
    let popped;
    if (head === tail) {
      popped = head;
      head = null;
      tail = null;
      return popped;
    }

    let current = head;
    while (current.next !== tail) {
      current = current.next;
    }
    popped = tail;
    tail = current;
    tail.next = null;

    return popped;
  };

  const contains = (val) => {
    // Empty list
    if (!head) {
      return false;
    }

    let current = head;
    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  const find = (val) => {
    // Empty list
    if (!head) {
      return null;
    }

    let index = 0;
    let current = head;
    while (current) {
      if (current.value === val) {
        return index;
      }
      index++;
      current = current.next;
    }

    return null;
  };

  const insertAt = (val, i) => {
    if (i < 0 || !Number.isInteger(i)) {
      return null;
    }

    const newNode = createNode(val);

    // Empty list or inserting at first index
    if (!head || i === 0) {
      newNode.next = head;
      head = newNode;
      if (!tail) {
        tail = newNode;
      }
      return;
    }

    // Index is greater than/equal to the length of the list
    if (i >= size()) {
      tail.next = newNode;
      tail = newNode;
      return;
    }

    let current = head;
    let parent = null;
    let index = 0;
    while (current && index < i) {
      parent = current;
      current = current.next;
      index++;
    }

    parent.next = newNode;
    newNode.next = current;
  };

  const removeAt = (i) => {
    // Check for invalid index, empty list, or index out of bounds
    if (i < 0 || !Number.isInteger(i) || !head || i >= size()) {
      return null;
    }

    // Remove first node
    if (i === 0) {
      head = head.next;

      // If list is empty after removal
      if (!head) {
        tail = null;
      }
      return;
    }

    let current = head;
    let parent = null;
    let index = 0;
    while (current && index < i) {
      parent = current;
      current = current.next;
      index++;
    }

    parent.next = current.next;
    if (current.next === null) {
      tail = parent;
    }
  };

  return {
    prepend,
    append,
    print,
    getHead,
    getTail,
    size,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
  };
};
