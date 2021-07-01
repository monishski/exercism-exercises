class Node<T> {
  constructor(public value: T, public next: Node<T> | null, public prev: Node<T> | null) {}
}

export default class LinkedList<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  public push(value: T): void { // add to end
    const newNode = new Node<T>(value, null, null)
    if (!this.head) {
      this.head = newNode
    } else {
      let currNode = this.head
      while (currNode.next) {
        currNode = currNode.next
      }
      newNode.prev = currNode //update newNode previous pointer
      currNode.next = newNode //update currNode next pointer
    }
  }

  public pop(): T | undefined { // remove the end
    if (!this.head) return;
    let currNode = this.head
    while (currNode.next) {
      currNode = currNode!.next
    }
    if (currNode.prev) {
      currNode.prev.next = null //the the pointer to the current from the previous node to null
    } else { //i.e. we must be at the head because the point to the previous node is null
      this.head = null
    }
    return currNode!.value
  }

  public unshift(value: T): void { //add to beginning 
    const newNode = new Node<T>(value, null, null)
    if (!this.head) {
      this.head = newNode
    } else {
      let temp = this.head
      this.head = newNode
      temp.prev = newNode
      this.head.next = temp
    }
  }

  public shift(): T | undefined { //remove from beginning
    if (!this.head) return;
    let currNode = this.head
    if (currNode.next) {
      this.head = currNode.next 
      this.head.prev = null
    } else {
      this.head = null
    }
    return currNode.value //which is basically the old head
  }

  public count(): number {
    if (!this.head) return 0;
    let count = 1
    let currNode = this.head
    while (currNode.next) {
      currNode = currNode.next
      count++
    }
    return count
  }

  public delete(value: T): void {
    if (!this.head) return;
    let currNode = this.head

    while (currNode.value !== value) {
      if (currNode.next) {
        currNode = currNode.next
      } else {
        return;
      }
    }

    if (currNode.prev && currNode.next) { //middle of the chain
      let temp = currNode.prev
      currNode.prev.next = currNode.next
      currNode.next.prev = temp
    } else if (currNode.prev && !currNode.next) { //end of the chain with at least 1 node before
      currNode.prev.next = null 
    } else if (!currNode.prev && currNode.next) { //beginning of the chain with at least 1 node after
      currNode.next.prev = null
    } else { //otherwise it must be just the head
      this.head = null
    }
  }

}