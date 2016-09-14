/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  //let _linkedList = {};
  let _head = null;
  let _tail = null;

return {
  getHead: function () {
    return _head;
  },
  getTail: function () {
    return _tail;
  },
  add: function (value) {
    let newNode = {};
    newNode.value = value;
    newNode.next = null;
    if (_head === null) {
      _head = newNode; //{ value next: null}
      _tail = newNode;
    } else {
        _tail.next = newNode; //
        _tail = newNode; // 3. step
      }
    return newNode;
  },
  remove: function (index) {
    const indexNode = this.get(index);
    if (index === 0) {
      if (_head.next === null){
        _head = null;
        _tail = null;
      } else {
          _head = _head.next;
      }
      return;
    }
    if ( indexNode !== false ) {
      const prevNode = this.get(index-1);
      prevNode.next = indexNode.next;
      if ( indexNode.next === null) {
        _tail = prevNode;
      }
    } else {
      return false;
    }
  },
  get: function (index) {
    let currPointer = 0;
    let currNode = {};
    currNode.value = _head.value;
    currNode.next = _head.next;

    while ( currPointer < index && currNode.next !== null) {
      currNode = currNode.next;
      currPointer ++;
    }

    if (currPointer === index) {
      return currNode;
    } else {
        return false;
    }

    if (index < 0){
      return false;
    }
  },
  insert: function (value, index) {
    let currNode = this.get(index);
    let prevNode = this.get(index-1);
    let newNode = {
      value: value,
      next: null
    };
    if (currNode === false) {
      return false;
    }
    if (index === 0) {
      newNode.next = _head;
      _head = newNode;
    } else {
        newNode.next = currNode;
        prevNode.next = newNode;
        _head = prevNode;

    }
    if (currNode.next === null) {
        _tail = newNode;
        currNode.next = newNode;
    } else {
        prevNode.next = newNode;
        newNode.next = currNode;
    }
  } // eof insert
};
}


