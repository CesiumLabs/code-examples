class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left ? new Node(left) : left;
    this.right = right ? new Node(right) : right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root ? new Node(root) : null;

    this.insert = this.insert.bind(this);
    this.delete = this.delete.bind(this);
    this.includes = this.includes.bind(this);
    this.height = this.height.bind(this);
    this.getNumberOfNodes = this.getNumberOfNodes.bind(this);
    this.isValidBST = this.isValidBST.bind(this);
    this.display = this.display.bind(this);
    this.inOrderTraversal = this.inOrderTraversal.bind(this);
    this.preOrderTraversal = this.preOrderTraversal.bind(this);
    this.postOrderTraversal = this.postOrderTraversal.bind(this);
  }

  insert(item, node = this.root) {
    if (!item) {
      return;
    }
    if (!node) {
      this.root = new Node(item);
      return;
    }

    if (item < node.data) {
      node.left ? this.insert(item, node.left) : (node.left = new Node(item));
    } else if (item > node.data) {
      node.right
        ? this.insert(item, node.right)
        : (node.right = new Node(item));
    }
  }

  delete(item, node = this.root) {
    if (!node || (!node.left && !node.right && node.data === item)) {
      this.root = null;
      return;
    }

    if (node.data === item) {
      if (node.left && node.right) {
        // Nodes with full capacity child managed here.
        let tempNode = node.right;
        let parentNode;
        while (tempNode.left) {
          parentNode = tempNode;
          tempNode = tempNode.left;
        }
        parentNode ? (parentNode.left = null) : (node.right = node.right.right);
        node.data = tempNode.data;
      } else {
        // Nodes with single child managed here.
        const singleNode = node.left || node.right;
        node.data = singleNode.data;
        node.left = singleNode.left;
        node.right = singleNode.right;
      }
    } else if (item < node.data && node.left) {
      // Leaf nodes will be managed here.
      node.left.data === item && !node.left.left && !node.left.right
        ? (node.left = null)
        : this.delete(item, node.left);
    } else if (item > node.data && node.right) {
      node.right.data === item && !node.right.left && !node.right.right
        ? (node.right = null)
        : this.delete(item, node.right);
    }
  }

  includes(item, node = this.root) {
    if (!node || !item) return false;

    if (node.data === item) {
      return true;
    } else if (item < node.data) {
      return node.left ? this.includes(item, node.left) : false;
    } else if (item > node.data) {
      return node.right ? this.includes(item, node.right) : false;
    }

    return false;
  }

  height(node = this.root) {
    if (!node) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  getNumberOfNodes(node = this.root) {
    if (!node) return 0;
    return (
      1 + this.getNumberOfNodes(node.left) + this.getNumberOfNodes(node.right)
    );
  }

  isValidBST(node = this.root) {
    if (!node) {
      return true;
    }
    const leftNode = node.left;
    const rightNode = node.right;
    return (
      (!leftNode || leftNode.data < node.data) &&
      (!rightNode || rightNode.data > node.data) &&
      this.isValidBST(leftNode) &&
      this.isValidBST(rightNode)
    );
  }

  display(order) {
    let valuesSequence = [];
    switch (order) {
      case "in": {
        this.inOrderTraversal((item) => valuesSequence.push(item));
        break;
      }
      case "pre": {
        this.preOrderTraversal((item) => valuesSequence.push(item));
        break;
      }
      case "post": {
        this.postOrderTraversal((item) => valuesSequence.push(item));
        break;
      }
    }
    console.log(valuesSequence.join(" ⑅ "));
  }

  inOrderTraversal(callback, onlyData = true, node = this.root) {
    if (!node) return;
    this.inOrderTraversal(callback, onlyData, node.left);
    callback(onlyData ? node.data : node);
    this.inOrderTraversal(callback, onlyData, node.right);
  }

  preOrderTraversal(callback, onlyData = true, node = this.root) {
    if (!node) return;
    callback(onlyData ? node.data : node);
    this.preOrderTraversal(callback, onlyData, node.left);
    this.preOrderTraversal(callback, onlyData, node.right);
  }

  postOrderTraversal(callback, onlyData = true, node = this.root) {
    if (!node) return;
    this.postOrderTraversal(callback, onlyData, node.left);
    this.postOrderTraversal(callback, onlyData, node.right);
    callback(onlyData ? node.data : node);
  }
}

const bst = new BinarySearchTree();
[50, 30, 20, 40, 45, 42, 47, 70, 60, 80].forEach((i) => bst.insert(i));

bst.display("pre"); // 50 ⑅ 30 ⑅ 20 ⑅ 40 ⑅ 45 ⑅ 42 ⑅ 47 ⑅ 70 ⑅ 60 ⑅ 80
bst.display("in"); // 20 ⑅ 30 ⑅ 40 ⑅ 42 ⑅ 45 ⑅ 47 ⑅ 50 ⑅ 60 ⑅ 70 ⑅ 80
bst.display("post"); // 20 ⑅ 42 ⑅ 47 ⑅ 45 ⑅ 40 ⑅ 30 ⑅ 60 ⑅ 80 ⑅ 70 ⑅ 50

console.log(bst.getNumberOfNodes()); // 10
bst.delete(70);
console.log(bst.getNumberOfNodes()); // 9
bst.delete();
console.log(bst.getNumberOfNodes()); // 9

bst.display("pre"); // 50 ⑅ 30 ⑅ 20 ⑅ 40 ⑅ 45 ⑅ 42 ⑅ 47 ⑅ 80 ⑅ 60
