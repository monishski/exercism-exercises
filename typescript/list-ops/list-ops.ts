interface Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}

export default class List<T> implements Iterator<T> {
  public values: T[] 
  private _length: number = 0;

  constructor(list: T[] = []) {
    this.values = list
    for (const value of list) {
      this.values[this._length++] = value
    }
    // let i = 0;
    // while (this.values[i]) i++; //is this abusing 'undefined' property for arrays?
    // this._length = i
  } //the default value is an object with an empty list for the prop values

  
  public length(): number {
    return this._length
  }

  public append(input: List<T>): List<T> { //in place
    let end = this.values.length
    for (let i = end; i < end + input.length(); i++) {
      this.values[i] = input.values[i-end]
    }
    return this
  }

  public concat(input: List<List<T>>): List<T> { //in place
    for(let list of input) { 
      this.append(list)
    }
    return this
  }

  // public filter(callback: Function): List<T> { 
  public filter(callback: (elem: T) => boolean): List<T> { 
    let filtered: T[] = [] //we create a new array, i.e. overwrite the existing one (this is default behaviour in JS?)
    let j = 0
    for (let i = 0; i < this.length(); i++) {
      if (callback(this.values[i])) {
        filtered[j] = this.values[i];
        j++
      } 
    }
    this.values = filtered
    return this
  }

  public map(callback: (elem: T) => T): List<T> { 
    let mapped: T[] = [] //we create a new array, i.e. overwrite the existing one (this is default behaviour in JS?)
    for (let i = 0; i < this.length(); i++) {
      mapped[i] = callback(this.values[i])
    }
    this.values = mapped
    return this
  }

  public foldl(callback: (_acc: T, elem: T) => T, acc: T): T {
    for (let i = 0; i < this.length(); i++) {
      acc = callback(acc, this.values[i])
    }
    return acc
  }

  public foldr(callback: (_acc: T, elem: T) => T, acc: T): T {
    for (let i = this.length() - 1; i >= 0; i--) {
      acc = callback(acc, this.values[i])
    }
    return acc
  }

  public reverse(): List<T> {
    for (let i = 0; i < Math.floor(this.length() / 2); i++) {
      [this.values[i], this.values[this.length()-i-1]] = [this.values[this.length()-i-1], this.values[i]]; 
    }
    return this
  }

  *[Symbol.iterator]() { 
    for (let i of this.values) {
      yield i
    }
  }

} 