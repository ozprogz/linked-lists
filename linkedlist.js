class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    node = new Node();
    node.value = value;
    tail = node;
  }

  prepend(value) {
    node = new Node();
    node.value = value;
    head = node;
  }

  size() {
    let size = 0;
    while (head != null) {
      count++;
      head = this.head.head;
    }
    return size;
  }

  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }

  at(index) {
    if (head != null && index === 0) return this.head;
    let count = 0;
    while (head != null && index <= count) {
      head = this.head.head;
      count++;
    }
    return this.head;
  }

  pop() {
    while (head != null) {
      count++;
      head = this.head.head;
    }
    return size;
  }

  contains(value) {}

  find(value) {}

  toString() {}
}
