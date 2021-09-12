import CircularBuffer, {
  BufferFullError,
  BufferEmptyError,
} from './circular-buffer'

describe('CircularBuffer', () => {
  it('reading an empty buffer throws a BufferEmptyError', () => {
    const buffer = new CircularBuffer<string>(1)
    expect(() => buffer.read()).toThrow(BufferEmptyError)
  })

  it('write and read back one item', () => {
    const buffer = new CircularBuffer<string>(1)
    buffer.write('1')
    expect(buffer.read()).toBe('1')
    expect(() => buffer.read()).toThrow(BufferEmptyError)
  })

  it('write and read back multiple items', () => {
    const buffer = new CircularBuffer<string>(2)
    buffer.write('1')
    buffer.write('2')
    expect(buffer.read()).toBe('1')
    expect(buffer.read()).toBe('2')
    expect(() => buffer.read()).toThrow(BufferEmptyError)
  })

  it('clearing a buffer', () => {
    const buffer = new CircularBuffer<string>(2)
    buffer.write('1')
    buffer.write('2')
    buffer.clear()
    expect(() => buffer.read()).toThrow(BufferEmptyError)
    buffer.write('3')
    buffer.write('4')
    expect(buffer.read()).toBe('3')
    expect(buffer.read()).toBe('4')
  })

  it('alternate write and read', () => {
    const buffer = new CircularBuffer<string>(2)
    buffer.write('1')
    expect(buffer.read()).toBe('1')
    buffer.write('2')
    expect(buffer.read()).toBe('2')
  })

  it('reads back oldest item', () => {
    const buffer = new CircularBuffer<string>(3)
    buffer.write('1')
    buffer.write('2')
    buffer.read()
    buffer.write('3')
    expect(buffer.read()).toBe('2')
    expect(buffer.read()).toBe('3')
  })

  it('writing to a full buffer throws a BufferFullError', () => {
    const buffer = new CircularBuffer<string>(2)
    buffer.write('1')
    buffer.write('2')
    expect(() => buffer.write('A')).toThrow(BufferFullError)
  })

  it('forced writes over write oldest item in a full buffer', () => {
    const buffer = new CircularBuffer<string>(2)
    buffer.write('1')
    buffer.write('2')
    buffer.forceWrite('A')
    expect(buffer.read()).toBe('2')
    expect(buffer.read()).toBe('A')
    expect(() => buffer.read()).toThrow(BufferEmptyError)
  })

  it('forced writes act like write in a non-full buffer', () => {
    const buffer = new CircularBuffer<string>(2)
    buffer.write('1')
    buffer.forceWrite('2')
    expect(buffer.read()).toBe('1')
    expect(buffer.read()).toBe('2')
    expect(() => buffer.read()).toThrow(BufferEmptyError)
  })

  it('alternate force write and read into full buffer', () => {
    const buffer = new CircularBuffer<string>(5)
    buffer.write('1') // w = 1, r = 0, b = [1, 2, 3, undefined, undefined]
    buffer.write('2') // w = 2, r = 0, b = [1, 2, 3, undefined, undefined]
    buffer.write('3') // w = 3, r = 0, b = [1, 2, 3, undefined, undefined]
    buffer.read()     // w = 3, r = 1, b = [undefined, 2, 3, undefined, undefined]
    buffer.read()     // w = 3, r = 2, b = [undefined, undefined, 3, undefined, undefined]
    buffer.write('4') // w = 4, r = 2, b = [undefined, undefined, 3, 4, undefined]
    buffer.read()     // w = 4, r = 3, b = [undefined, undefined, undefined, 4, undefined]
    buffer.write('5') // w = 5, r = 3, b = [undefined, undefined, undefined, 4, 5]
    buffer.write('6') // w = 6, r = 3, b = [6, undefined, undefined, 4, 5]
    buffer.write('7') // w = 7, r = 3, b = [6, 7, undefined, 4, 5]
    buffer.write('8') // w = 8, r = 3, b = [6, 7, 8, 4, 5]
    buffer.forceWrite('A') // w = 9, r = 4, b = [6, 7, 8, A, 5]
    buffer.forceWrite('B') // w = 10, r = 5, b = [6, 7, 8, A, B]
    expect(buffer.read()).toBe('6') // w = 10, r = 6, b = [undefined, 7, 8, A, B]
    expect(buffer.read()).toBe('7') // w = 10, r = 7, b = [undefined, undefined, 8, A, B] 
    expect(buffer.read()).toBe('8') // w = 10, r = 8, b = [undefined, undefined, undefined, A, B]
    expect(buffer.read()).toBe('A') // w = 10, r = 9, b = [undefined, undefined, undefined, undefined, B]
    expect(buffer.read()).toBe('B') // w = 10, r = 10, b = [undefined, undefined, undefined, undefined, undefined]
    expect(() => buffer.read()).toThrow(BufferEmptyError) // w = 10, r = 10, b = [undefined, undefined, undefined, undefined, undefined]
  })
})
