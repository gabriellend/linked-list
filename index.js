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
linkedList.size();
