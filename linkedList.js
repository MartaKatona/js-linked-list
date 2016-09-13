/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let _linkedList = {};
  let _head = null;
  let _tail = null;

  //define the head like empty node
  //define the tail like empty node



return {
  getHead: function () {
    return _head;
  },
  getTail: function () {
    return _tail;
  },
  add: function (value) {
    let _newNode = {};
    _newNode.value = value;
    _newNode.next = null;
    if (_head === null) {
      _head = _newNode; //{ value next: null}
      _tail = _newNode;
    } else {
        _tail.next = _newNode; //
        _tail = _newNode; // 3. step
      }
    return _newNode;
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
    let counter = 0;
    let foundNode = {};
    foundNode.value = _head.value;
    foundNode.next = _head.next;

    while ( counter < index && foundNode.next !== null) {
        foundNode = foundNode.next;
        counter ++;
    }

    if (counter === index) {
      return foundNode;
    } else {
      return false;
    }
  },
  insert: function (value, index) {
    const insertNode = {};
    const beforeNode = this.get(index-1);
    console.log('value and index: ', value, index);
    console.log('before node: ', beforeNode);

    if ((beforeNode.next) !== null && (index > 0)) {
      insertNode.value = value;
      insertNode.next = beforeNode.next;
      console.log('insertNode after put next:::', insertNode);
      beforeNode.next = insertNode;
      console.log('inside first if after insert before Node:', beforeNode);
      console.log('inside first if after insert Insert Node:', insertNode.next);
    } else {
      if (index === 0) {
        insertNode.next = null;
        head.next = insertNode;
        _head = insertNode;
      } else {
          return false;
        }
      return false;
    }
  } // eof insert
};
}


