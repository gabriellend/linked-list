import { createLinkedList } from "./LinkedList.js";

const linkedList = createLinkedList();

// Append
console.log("APPEND FIRST NODE");
linkedList.append("b");
linkedList.print();
console.log("APPEND SECOND NODE");
linkedList.append("c");
linkedList.print();

// Prepend
console.log("PREPEND THIRD NODE");
linkedList.prepend("a");
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
linkedList.print();
const popped = linkedList.pop();
console.log({ popped });
linkedList.print();
const sizeAfterPop = linkedList.size();
console.log({ sizeAfterPop });

// Contains
const containsB = linkedList.contains("b");
console.log({ containsB });
const containsC = linkedList.contains("c");
console.log({ containsC });

// Find
const indexOfA = linkedList.find("a");
console.log({ indexOfA });

// Insert at
console.log("INSERTING Z AT INDEX 2");
linkedList.insertAt("z", 2);
linkedList.print();

// Remove at
console.log("REMOVING ITEM AT INDEX 2");
linkedList.removeAt(2);
linkedList.print();
