class Node {
  constructor(data, next) {
    this.data = data
    this._next = next
  }

  get next() {
    return this._next
  }

  set next(node) {
    this._next = node
  }
}


module.exports = { Node }
