const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    if (this.rootNode !== null) return this.rootNode;
    return null;
  }

  add(data ) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.addNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.addNode(node.right, newNode)
      }
    }
  }

  has(data) {
    if (this.rootNode === null) {
      return false;
    } else if (data < this.rootNode.data) {
      return this.hasNode(this.rootNode.left, data);
    } else if (data > this.rootNode.data) {
      return this.hasNode(this.rootNode.right, data);
    } else {
      return true;
    }
  }

  hasNode(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.hasNode(node.left, data);
    } else if (data > node.data) {
      return this.hasNode(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    if (this.rootNode === null) {
      return null;
    } else if (data < this.rootNode.data) {
      return this.findNode(this.rootNode.left, data);
    } else if (data > this.rootNode.data) {
      return this.findNode(this.rootNode.right, data);
    } else {
      return this.rootNode;
    }
  }
  findNode(node, data) {
    if(node === null) {
      return null
    } else if (data < node.data) {
      return this.findNode(node.left, data)
    } else if (data > node.data) {
      return this.findNode(node.right, data)
    } else {
      return node;
    }
  }
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);

  }
  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } 
      if (node.right === null) {
        node = node.left;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      }
      let temp = this.findMinNode(node.right);
      node.data = temp.data;

      node.right = this.removeNode(node.right, temp.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  min() {
    let current = this.rootNode;
    if (current.left === null) return current.data
    else {
      while (current.left !== null) {
        current = current.left;
      }
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    if (current.right === null) return current.data
    else {
      while (current.right !== null) {
        current = current.right;
      }
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};