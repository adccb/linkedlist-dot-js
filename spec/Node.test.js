const { Node } = require('../lib/Node')

describe('node', () => {
  it('stores data', () => {
    const node = new Node(3)
    expect(node.data).toEqual(3)
  })

  it('stores next', () => {
    const n1 = new Node(3)
    const n2 = new Node(2, n1)

    expect(n2.next).toBe(n1)
  })

  it('can be assigned a next', () => {
    const n1 = new Node(1)
    const n2 = new Node(2)
    n1.next = n2

    expect(n1.next).toBe(n2)
  })
})

