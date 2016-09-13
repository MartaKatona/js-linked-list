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
  remove: function (number) {
    // body...
  },
  get: function (number) {
    // body...
  },
  insert: function (value, number) {
    // body...
  }
};
}

//let listGen = linkedListGenerator();

//let myHead = listGen.getHead();



  // add
  // add.()

