import { createLinkedList } from "./LinkedList.js";

const linkedList = createLinkedList();
linkedList.append(1);
console.log(linkedList.print());
linkedList.append(2);
console.log(linkedList.print());
