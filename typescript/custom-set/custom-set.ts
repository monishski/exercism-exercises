class CustomSet {

  constructor(public array: number[] = []) {} //array implementation?

  empty() {
    return this.array.length === 0
  }

  contains(n: number): boolean {
    return this.array.indexOf(n) !== -1 
  }

  subset(set: CustomSet): boolean { //every value in this.array must exists in set  
    // a set is a subset if all of its elements are contained in the other set
    return this.array.every(value => set.array.indexOf(value) !== -1)
  }

  disjoint(set: CustomSet): boolean {
    // sets are disjoint if they share no elements'
    return this.array.every(value => set.array.indexOf(value) === -1)
  }

  eql(set: CustomSet): boolean {
    // sets with the same elements are equal
    if (this.array.length !== set.array.length) return false;
    this.array.sort((a, b) => a - b)
    set.array.sort((a, b) => a - b)
    for (let i = 0; i < this.array.length; i++) { //the length will be eql
      if (this.array[i] !== set.array[i]) {
        return false;
      }
    }
    return true  
  }

  add(value: number): CustomSet {
    // unique elements can be added to a set
    if (this.array.indexOf(value) === -1) {
      this.array.push(value)
    }
    return this
  }

  intersection(set: CustomSet): CustomSet {
    // returns a set of all shared elements
    let arr: number[] = this.array.filter(value => set.array.indexOf(value) !== -1)
    return new CustomSet(arr)
  }

  difference(set: CustomSet): CustomSet {
    // difference of a set is a set of all elements that are only in the first set
    let arr: number[] = this.array.filter(value => set.array.indexOf(value) === -1)
    return new CustomSet(arr)
  }

  union(set: CustomSet): CustomSet {
    // returns a set of all elements in either set
    for (let i = 0; i < set.array.length; i++) {
      this.add(set.array[i])
    }
    return this
  }

}

export default CustomSet