'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // Internal storage for the stack (array-based, LIFO).
    this.items = [];
  }

  // Add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack.
  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  // Return the top element without removing it.
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  // Return true when the stack has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements currently in the stack.
  size() {
    return this.items.length;
  }

  // Return all elements as a comma-separated string (bottom to top).
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions, in order.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the current top action.
console.log('Top Action:', actionHistory.peek());

// Undo the most recent action.
console.log('Undo Action:', actionHistory.pop());

// Display the remaining actions and the current size.
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // Internal storage for the queue (array-based, FIFO).
    this.items = [];
  }

  // Add an element at the back of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element of the queue.
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  // Return the front element without removing it.
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }

  // Return true when the queue has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements currently in the queue.
  size() {
    return this.items.length;
  }

  // Return all elements as a comma-separated string (front to back).
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests, in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the request at the front.
console.log('Next Request:', waitingRequests.front());

// Process (dequeue) two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining queue and its size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // Internal storage for the priority queue (array of {request, priority}).
    this.items = [];
  }

  // Insert a request at the correct position based on priority.
  // Lower priority number = higher priority. Equal priorities keep
  // their original arrival order (stable insertion).
  enqueue(request, priority) {
    const item = { request, priority };

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(item);
    }
  }

  // Remove and return the first (highest-priority) item.
  dequeue() {
    if (this.items.length === 0) return undefined;
    return this.items.shift();
  }

  // Return the number of items currently queued.
  size() {
    return this.items.length;
  }

  // Display every request together with its priority.
  print() {
    this.items.forEach((item) => {
      console.log(`${item.request}, Priority ${item.priority}`);
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests, in the given order.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Print the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first (highest-priority) request.
const processed = urgentRequests.dequeue();
console.log('Processed Priority Request:', `${processed.request}, Priority ${processed.priority}`);

// Print the remaining requests.
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // Store the value held by this node.
    this.element = element;
    // Pointer to the next node in the list.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Number of nodes currently in the list.
    this.length = 0;
    // Reference to the first node.
    this.head = null;
  }

  // Add a node containing the element at the end of the list.
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // Insert a node containing the element at the given position.
  // Position may range from 0 (beginning) to length (end).
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  // Remove and return the element at the given position.
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return undefined;
    }

    let removed;

    if (position === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      removed = previous.next;
      previous.next = removed.next;
    }
    this.length--;
    return removed.element;
  }

  // Traverse the list and return the index of the matching element,
  // or -1 when the element is not found.
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Remove the given element by locating its index, then removing it.
  remove(element) {
    const index = this.indexOf(element);
    if (index === -1) {
      return undefined;
    }
    return this.removeAt(index);
  }

  // Return true when the list contains no nodes.
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes currently in the list.
  size() {
    return this.length;
  }

  // Traverse the list and return all elements as a comma-separated string.
  toString() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }
    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0 (beginning of the list).
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// Insert Ticket #405 at the end using insert().
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Display the complete list.
console.log('Complete List:', completedRequests.toString());

// Search for Ticket #402 and display its index.
console.log('Index of Ticket #402:', completedRequests.indexOf('Ticket #402 - Printer Connected'));

// Remove the item at position 1 using removeAt().
console.log('Removed at Position 1:', completedRequests.removeAt(1));

// Remove Ticket #403 using remove().
console.log('Removed by Value:', completedRequests.remove('Ticket #403 - Antivirus Updated'));

// Display the final list and its size.
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());