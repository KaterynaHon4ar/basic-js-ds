const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    if(this.rootNode === null){
      this.rootNode = new Node(data);
    } else {
      addNode(this.rootNode, data);
    }
    function addNode(currentNode, data){
      if(data < currentNode.data){
        currentNode.left === null ? currentNode.left = new Node(data) : addNode(currentNode.left, data);
      }
      if(data > currentNode.data){
        currentNode.right === null ? currentNode.right = new Node(data) : addNode(currentNode.right, data);
      }
    }
  }



  has(data) {
    return hasNode(this.rootNode, data);
    function hasNode(currentNode, data){
      if (currentNode === null) {
        return false;
      }
      if(currentNode.data === data){
        return true;
      }
      if(currentNode.data > data){
        return hasNode(currentNode.left, data);
      } else {
        return hasNode(currentNode.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);
    function findNode(currentNode, data){
      if (currentNode === null) {
        return null;
      }
      if(currentNode.data === data){
        return currentNode;
      }
      if(currentNode.data > data){
        return findNode(currentNode.left, data);
      } else {
        return findNode(currentNode.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(currentNode, data) {
      if (currentNode === null) {
        return currentNode;
      }

      if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
      } else if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data);
      } else {
        if (currentNode.left === null) {
          return currentNode.right;
        }
        if (currentNode.right === null) {
          return currentNode.left;
        }

        currentNode.data = inOrderSuccessor(currentNode.right);
        currentNode.right = removeNode(currentNode.right, currentNode.data);
      }
      return currentNode;
    }

    function inOrderSuccessor(currentNode) {
      let min = currentNode.data;
      while (currentNode.left !== null) {
        min = currentNode.left.data;
        currentNode = currentNode.left;
      }
      return min;
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    return minimum(this.rootNode);

    function minimum(node) {
      let min = node.data;
      while (node.left !== null) {
        min = node.left.data;
        node = node.left;
      }
      return min;
    }
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    return maximum(this.rootNode);

    function maximum(node) {
      let max = node.data;
      while (node.right !== null) {
        max = node.right.data;
        node = node.right;
      }
      return max;
    }
  }
}

module.exports = {
  BinarySearchTree
};