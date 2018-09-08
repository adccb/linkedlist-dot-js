const { LinkedList } = require('../lib/LinkedList')

describe('LinkedList', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList([ 1, 2, 3, 4, 5 ])
  })

  it('can be made into an array', () => {
    expect(linkedList.toArray()).toEqual([ 1, 2, 3, 4, 5 ])
  })

  it('can provide length', () => {
    expect(linkedList.length()).toEqual(5)
  })

  it('can be pushed onto', () => {
    linkedList.push(6)
    expect(linkedList.toArray()).toEqual([ 1, 2, 3, 4, 5, 6 ])
  })

  it('correctly implements forEach', () => {
    const arr = []
    linkedList.forEach(i => arr.push(i))
    expect(arr).toEqual([ 1, 2, 3, 4, 5 ])
  })

  it('correctly implements map and filter', () => {
    expect(linkedList.map(i => i + 1).toArray()).toEqual([ 2, 3, 4, 5, 6 ])
    expect(linkedList.filter(i => i >= 3).toArray()).toEqual([ 3, 4, 5 ])
  })

  it('can find if it contains an element', () => {
    expect(linkedList.contains(2)).toBe(true)
    expect(linkedList.contains(9)).toBe(false)
  })
})
