/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  //let _linkedList = {};
  let _head = null; // _ mans private
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



// const insertNode = {};
    // const beforeNode = this.get(index-1);
    // console.log('value and index: ', value, index);
    // console.log('before node before manipulation : ', beforeNode);

    // if ((beforeNode.next) !== null ) { //&& (index > 0)
    //   insertNode.value = value;
    //   insertNode.next = beforeNode.next;
    //   console.log('insertNode after put next:::', insertNode);
    //   beforeNode.next = insertNode;
    //   console.log('inside first if after insert before Node:', beforeNode);
    //   console.log('inside first if after insert Insert Node:', insertNode);
    //   if ((index-1) === 0 ) {
    //      _head = beforeNode;
    //   }
    //   if (index === 0) {
    //      insertNode.next = null;
    //      head.next = insertNode;
    //      _head = insertNode;
    //   }
    // } else {
    //     return false;
    //  }

  } // eof insert
};
}


