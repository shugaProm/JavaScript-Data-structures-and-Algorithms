// Stack!
// function: push, pop, peek, length

// ====Palindrome implementation

// let letter = [] //stack

// let word = 'racecar'

// let rword = ''

// for (let i = 0; i < word.length; i++) {
//     letter.push(word[i])
// }

// for (let x = 0; x < word.length; x++) {

function myStack() {
  this.count = 0;
  this.storage = {};

  this.push = value => {
    this.storage[this.count] = value;

    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let itemRemoved = this.storage[this.count];
    delete this.storage[this.count];
    return itemRemoved;
  };

  this.peek = () => {
    if (this.count === 0) {
      return undefined;
    }

    let result = this.storage[this.count--];
    return result;
  };

  this.length = () => {
    return this.count;
  };
}

// Set
// ======== : has, add, remove, union, intersection, difference

function mySet() {
  this.size = 0;
  this.collection = [];

  this.has = item => {
    return this.collection.includes(item);
  };

  this.add = item => {
    if (!this.has(item)) {
      this.collection.push(item);
      return true;
    } else {
      return false;
    }
  };

  this.remove = item => {
    if (this.has(item)) {
      let idx = collection.indexOf(item);
      collection.splice(idx, 1);
      return true;
    } else {
      return false;
    }
  };

  this.values = () => {
    return this.collection;
  };

  this.union = otherSet => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(element => {
      unionSet.add(element);
    });
    secondSet.forEach(element => {
      unionSet.add(element);
    });

    return unionSet;
  };

  this.intersection = otherSet => {
    let intersectionSet = new mySet();
    firstSet = this.values();
    secondSet = otherSet;
    firstSet.forEach(item => {
      if (secondSet.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet;
  };

  this.subset = otherSet => {
    let firstSet = this;
    let secondSet = otherSet.values();
    return secondSet.every(item => {
      return firstSet.has(item);
    });
  };
}

// let bookSet = new mySet()
// let bookSetB = new mySet()
// bookSet.add('tyler')
// bookSet.add('perry')
// bookSet.add('jobs')
// bookSet.add('steve')

// bookSetB.add('perry')
// bookSetB.add('steve')
// bookSetB.add('jobs')

// console.log(bookSet.has('tyler'))
// console.log(bookSet.union(bookSetB).values())
// console.log(bookSet.intersection(bookSetB).values())
// console.log(bookSet.subset(bookSetB))

// QUEUE --- enqueue, dequeue, front, size, empty

function Queue() {
  collection = [];

  this.size = () => {
    return collection.length;
  };

  this.print = () => {
    console.log(collection);
  };

  this.enqueue = item => {
    console.log("old");
    collection.push(item);
    return true;
  };

  this.dequeue = () => {
    if (this.size() > 0) {
      let item = collection.shift();
      return item;
    } else {
      return false;
    }
  };

  this.front = () => {
    return collection[0];
  };

  this.isEmpty = () => {
    return this.size === 0;
  };
}

// let queue = new Queue()
// queue.enqueue('emeka')
// queue.enqueue('ebuka')
// queue.enqueue('uche')
// queue.enqueue('emela')
// queue.enqueue('udo')
// queue.print()
// console.log(queue.empty())
// console.log(queue.front())
// console.log(queue.dequeue())
// console.log(queue.front())
// queue.print()

// Priority Queue===============================
function PriorityQueue() {
  Queue.call(this);
  collection = [];

  this.enqueue = item => {
    let added = false;
    // console.log("here")
    if (this.isEmpty()) {
      console.log("empty");
      collection.push(item);
    } else {
      for (let x = 0; x < collection.length; x++) {
        if (item[1] < collection[x][1]) {
          collection.splice(x, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        console.log("!added");
        collection.push(item);
      }
    }
  };
}

// let pq = new PriorityQueue()
// pq.enqueue(['emeka', 3])
// pq.enqueue(['ebuka', 5])
// pq.enqueue(['uche', 2])
// pq.enqueue(['emela', 8])
// pq.enqueue(['udo', 5])
// pq.enqueue(['precious', 10])
// pq.print()

/* Binary Search Tree */
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      //if root node is empty
      this.root = new Node(data); //data becomes the root node
      return;
    } else {
      const searchTreeToInsert = function (node) {
        if (data < node.data) {
          //if data is less than the root node
          if (node.left === null) {
            //if left child of root node is empty
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            //if left child is not empty
            return searchTreeToInsert(node.left); //left child becomes the root and we perform the recursive seach on it again
          }
        } else if (data > node.data) {
          //if data is greater than the root node
          if (node.right === null) {
            //if right child is empty, then our data becomes the right child
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            //if the right child is not empty
            return searchTreeToInsert(node.right); //perform recursive search
          }
        } else {
          return null;
        }
      };
      return searchTreeToInsert(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        // case 1: node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // case 2: node has only one child
        if (node.left === null) {
          //has just right node
          return node.right;
        }
        if (node.right === null) {
          //has just left node
          return node.right;
        }
        // case 3: node has both child
        // here, we choose to use the leftmost node on the right to substitute the root node.
        // the rightmost node on the left can also be used in your case
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data); //removing the node that was substituted and then making sure that side is balanced
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.findMaxHeight() - this.findMinHeight() <= 1;
  }

  findMinHeight(node = this.root) {
    if (node == null) return -1;

    let left = this.findMinHeight(node.left);

    let right = this.findMinHeight(node.right);

    if (left < right) return left + 1;
    else return right + 1;
  }

  findMaxHeight(node = this.root) {
    if (node == null) return -1;

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) return left + 1;
    else return right + 1;
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = [];
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = [];
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = [];
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let Q = [];
    let result = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        node.left && Q.push(node.left);
        node.right && Q.push(node.right);
      }
      return result;
    } else {
      return null;
    }
  }
}

// let bst = new BST()
// bst.add(9)
// bst.add(4)
// bst.add(17)
// bst.add(3)
// bst.add(6)
// bst.add(22)
// bst.add(5)
// bst.add(7)
// bst.add(20)
// bst.add(10)
// console.log(bst.findMax())
// console.log(bst.findMin())
// console.log(bst.isPresent(20))
// bst.remove(20)
// console.log(bst.findMax())
// console.log(bst.isPresent(20))
// console.log(bst)
// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())
// console.log('InOrder =>' +bst.inOrder())
// console.log('PreOrder => '+bst.preOrder())
// console.log('PostOrder =>'+bst.postOrder())
// console.log('levelOrder => '+bst.levelOrder())

// Hash Table
let hashFn = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function () {
  let storage = [];
  const storageLimit = 4;

  this.add = function (key, value) {
    let index = hashFn(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let x = 0; x < storage[index].length; x++) {
        if (storage[index][x][0] === key) {
          storage[index][x][1];
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    let index = hashFn(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let y = 0; y < storage[index].length; y++) {
        if (storage[index][y][0] === key) {
          delete storage[index][y];
        }
      }
    }
  };

  this.lookup = function (key) {
    let index = hashFn(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let z = 0; z < storage[index].length; z++) {
        if (storage[index][z][0] === key) {
          return storage[index][z][0];
        }
      }
    }
  };

  this.print = function () {
    console.log(storage);
  };
};

// //
// console.log(hashFn('damil', 10))

// let ht = new HashTable()
// ht.add('emeka', 'person')
// ht.add('beast', 'dog')
// ht.add('eazy', 'brother')
// ht.print()

function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = Node(element);
    if (head === null) {
      head = node;
    } else {
      currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode.element === element) {
        previousNode.next = currentNode.next;
        length--;
      } else {
        return "Element cannot be found";
      }
    }
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      } else {
        currentNode = currentNode.next;
      }

      if (currentNode.next === null) return "Index not found";
    }
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    let node = Node(element);

    let currentNode = head;
    let currentIndex = 0;
    let previousNode;

    if (index > length) {
      return "Index not within context";
    }

    if (index === currentIndex) {
      node.next = currentNode;
      node = head;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function () {};
}
