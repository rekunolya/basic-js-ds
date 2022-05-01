const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   node = null

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.node !== null) {
      return this.node
    } else {
      return null
    }


  }

  add(data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode = new Node(data);
    if(this.node === null){
      this.node = newNode
    } else {
      this.addNode(this.node, newNode)
    }
  }
  addNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
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
     // node - текущий узел
    // data - искомое значение
    if(this.node === null) {
      return false
    } else if (data < this.node.data) {
      return this.hasNode(this.node.left, data)
    } else if (data > this.node.data) {
      return this.hasNode(this.node.right, data)
    } else {
      return true
    }
  }
  
  hasNode(node, data){
    if(node === null) {
      return false
    } else if (data < node.data) {
      return this.hasNode(node.left, data)
    } else if (data > node.data) {
      return this.hasNode(node.right, data)
    } else {
      return true
    }
  }


  find(data) {
    // node - текущий узел
    // data - искомое значение
    if(this.node === null) {
      return null
    } else if (data < this.node.data) {
      return this.findNode(this.node.left, data)
    } else if (data > this.node.data) {
      return this.findNode(this.node.right, data)
    } else {
      return this.node
    }
  }

  findNode(node, data){
    if(node === null) {
      return null
    } else if (data < node.data) {
      return this.findNode(node.left, data)
    } else if (data > node.data) {
      return this.findNode(node.right, data)
    } else {
      return node
    }
  }


  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.node
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.node
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};