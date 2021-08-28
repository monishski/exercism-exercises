class Node<T> {
  constructor(public data: T, 
    public left: Node<T> | null = null, 
    public right: Node<T> | null = null)  {}
}

class BinarySearchTree<T> {
  private root: Node<T>

  constructor(public data: T) {
    this.root = new Node<T>(data)
  }

  get left(): Node<T> | null {
    return this.root.left
  }

  get right(): Node<T> | null {
    return this.root.right
  }

  insert(data: T): void { //iterative
    let node = new Node(data)
    let currNode: Node<T> | null = this.root
    if (!currNode) {
      this.root = node
      return;
    } else {
      let prevNode: Node<T> = currNode;
      while (currNode) {
        prevNode = currNode
        if (data > currNode.data) {
          currNode = currNode.right
        } else {
          currNode = currNode.left
        }
      }
      if (data > prevNode.data) {
        prevNode.right = node
      } else {
        prevNode.left = node
      }
    }
  }

  each(callback: (data: T) => void): void {
    const inorderTraversal = (node: Node<T>): void => { //recursive  
      if (!node) return;
      if (node.left) inorderTraversal(node.left);
      callback(node.data);
      if (node.right) inorderTraversal(node.right);
    } 
    inorderTraversal(this.root)
  }

}

export default BinarySearchTree