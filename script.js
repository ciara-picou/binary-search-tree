class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      console.log(this);
      return this;
    } else {
      let current = this.root;
      if (value === current.value) {
        console.log(undefined);
        return undefined;
      }
      while (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          console.log(this);
          return this;
        } else {
          current = current.left;
        }
      }
      while (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          console.log(this);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      console.log(false);
      return false;
    }
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
        console.log(found);
      }
    }
    if (!found) {
      console.log(undefined);
      return undefined;
    }
    console.log(current);

    return current;
  }
}

var myBST = new BinarySearchTree();
myBST.insert(10);
myBST.insert(5);
myBST.insert(15);
myBST.find(3);
myBST.find(10);
