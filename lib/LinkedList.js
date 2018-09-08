const { Node } = require('./Node')

const last = arr => arr[arr.length - 1]
const penultimate = arr => arr[arr.length - 2]
const inc = itm => itm + 1

class LinkedList {
  constructor(data) {
    this.list = data.map(i => new Node(i))

    this.list.forEach((n, i, l) => {
      if(i === l.length - 1) {
        return
      }

      n.next = l[i + 1]
    })
  }

  length() {
    return this.list.reduce(inc, 0) 
  }

  toArray() {
    return this.list.map(i => i.data)
  }

  forEach(f) {
    let node = this.list[0]
    while(node) {
      f(node.data)
      node = node.next
    }
  }

  map(f) {
    const arr = []
    this.forEach(i => arr.push(f(i)))
    return new LinkedList(arr)
  }

  filter(f) {
    const arr = []
    this.forEach(i => f(i) && arr.push(i))
    return new LinkedList(arr)
  }

  push(d) {
    this.list.push(new Node(d))
    last(this.list).next = penultimate(this.list)
  }

  contains(val) {
    let node = this.list[0]
    while(node) {
      if(node.data === val)
        return true
      node = node.next
    }

    return false
  }
}

module.exports = { LinkedList }

