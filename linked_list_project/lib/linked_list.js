// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.length) {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        } else {
            this.head = this.tail = new Node(val);
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length > 1) {
            let currNode = this.head;
            let prevTail = this.tail;
            for(let i=0; i<this.length-2; i++) {
                currNode = currNode.next;
            }
            currNode.next = null;
            this.tail = currNode;
            this.length--;
            return prevTail;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.length) {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = this.tail = new Node(val);
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length > 1) {
            let prevHead = this.head;
            this.head = this.head.next;
            this.length--;
            return prevHead;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currNode = this.head;
        for(let i=0; i<this.length; i++) {
            if (currNode.value === target) return true;
            currNode = currNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length) return null;
        let currNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) return currNode;
            currNode = currNode.next;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        let currNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                currNode.value = val;
                return true;
            }
            currNode = currNode.next;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false; 
        let currNode = this.head;
        let newNode = new Node(val);
        for (let i = 0; i < this.length; i++) {
            if(index === 0) {
                if (i === 0) {
                    newNode.next = currNode;
                    this.length++;
                    this.head = newNode;
                    return true;
                } 
            }  else {
                if (i === index - 1) {
                    newNode.next = currNode.next;
                    currNode.next = newNode;
                    this.length++;
                    return true;
                } 
            }
            currNode = currNode.next;
        }
        return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined;
        let currNode = this.head;
        let prevNode = null;
        for (let i = 0; i < this.length; i++) {
            if (i === index - 1) prevNode = currNode;
            if (i === index) {
                prevNode.next = currNode.next;
                this.length--;
                return currNode;
            }
            currNode = currNode.next;
        }
        return false;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
