import { createLinkedList } from "./LinkedList.js";

const linkedList = createLinkedList();

// Append
linkedList.append(1);
linkedList.print();
linkedList.append(2);
linkedList.print();

// Prepend
linkedList.prepend(0);
linkedList.print();

// Show size
const size = linkedList.size();
console.log({ size });

// Get head
const head = linkedList.getHead();
console.log({ head });

// Get tail
const tail = linkedList.getTail();
console.log({ tail });

// Get node at index
const nodeAtZero = linkedList.at(0);
console.log({ nodeAtZero });
const nodeAtOne = linkedList.at(1);
console.log({ nodeAtOne });
const nodeDoesntExist = linkedList.at(5);
console.log({ nodeDoesntExist });

// Pop
const sizeBeforePop = linkedList.size();
console.log({ sizeBeforePop });
const popped = linkedList.pop();
console.log({ popped });
const sizeAfterPop = linkedList.size();
console.log({ sizeAfterPop });
