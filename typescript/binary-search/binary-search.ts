export default class BinarySearch {
  public array: number[] | undefined

  constructor(input: number[]) {
    this.array = this.isArraySorted(input)
  }

  private isArraySorted(arr: number[]): (number[] | undefined) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) return;
    }
    return arr
  }

  public indexOf(number: number): number {
    let left: number = 0
    let right: number = this.array!.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (this.array![mid] < number) { //value must lie on the RHS
        left = mid + 1
      } else if (this.array![mid] > number) {
        right = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }
}
