type BufferItem<T> = T | undefined

export default class CircularBuffer<T> {
  private buffer: BufferItem<T>[]
  private length: number;
  private writeCounter: number = 0;
  private readCounter: number = 0;
;
  constructor(initial: number) {
    this.length = initial
    this.buffer = new Array<T>(initial)

  }

  write(value: T): void {
    if (this.buffer[this.writeCounter % this.length] !== undefined) {
      throw new BufferFullError()
    }
    this.buffer[this.writeCounter % this.length] = value
    this.writeCounter++
  }

  read(): T {
    let res = this.buffer[this.readCounter % this.length]
    if (res === undefined) throw new BufferEmptyError()
    this.buffer[this.readCounter % this.length] = undefined
    this.readCounter++
    return res
  }

  
  forceWrite(value: T): void {
    // Note the writeCounter will by default be pointing to the OLDEST value when the buffer is full!
    if (this.hasSpace()) { //we have to perform this check
      this.buffer[this.writeCounter % this.length] = value
      this.writeCounter++
      return;
    }
    this.buffer[this.writeCounter % this.length] = value
    this.writeCounter++
    this.readCounter++
  }

  clear(): void {
    this.buffer = new Array<T>(this.length) //I couldnt mutate the original buffer to just contain 'undefined' 
    this.readCounter = 0
    this.writeCounter = 0
  }

  hasSpace(): boolean {
    for (let i = 0; i < this.length; i++) {
      if (this.buffer[i] === undefined) return true;
    }
    return false
  }
}

export class BufferFullError extends Error {
  constructor() {
    super()
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super()
  }
}
