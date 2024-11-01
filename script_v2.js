"use strict";

// почитал, что лучше использовать null
class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  add(value) {
    if (this.value === value)
      return console.log("такое значение уже есть в дереве");
    if (value < this.value) {
      this.addLeft(value);
    } else {
      this.addRight(value);
    }
  }

  addLeft(value) {
    if (this.left) {
      return this.left.add(value);
    }
    this.left = new TreeNode(value);
  }

  addRight(value) {
    if (this.right) {
      return this.right.add(value);
    }
    this.right = new TreeNode(value);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root) {
      return this.root.add(value);
    }
    this.root = new TreeNode(value);
  }

  find(value) {
    let current = this.root;
    let cout = 0;
    while (true) {
      cout++;
      if (current === null) {
        console.log("нет такого элемента в дереве");
        return null;
      }
      if (current.value === value) {
        console.log(`элемент найден с ${cout} попытки`);
        return current;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    // если элемент найден
    if (node.value === value) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }
      // для случая с двумя дочерними
      const rightMinNode = this.findMin(node.right);
      node.value = rightMinNode.value;

      node.right = this.deleteNode(node.right, rightMinNode.value);
      return node;
    }

    //хотел использовать find(), но так и не придумал как это сделать
    if (value < node.value) {
      if (node.left === null) return node;

      node.left = this.deleteNode(node.left, value);
      return node;
    }
    if (value > node.value) {
      if (node.right === null) return node;

      node.right = this.deleteNode(node.right, value);
      return node;
    }
  }

  findMin(node) {
    if (node.left === null) return node;

    return this.findMin(node.left);
  }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(11);
tree.add(20);

console.log(tree.find(20));

tree.delete(20);
console.log(tree.find(20));
