export default class Triangle {

  constructor(private n: number) {}

  get length(): number {
    return this.pascal(this.n).length
  }

  get rows(): number[][] {
    return this.pascal(this.n)
  }

  get lastRow(): number[] {
    return this.pascal(this.n)[this.length - 1]
  }

  private pascal(n: number): number[][] {
    if (n === 0) return [[]]
    let arr: number[][] = [[1]]
    for (let row = 1; row < n; row++) {
      let prevRow = arr[row - 1]
      let currRow = new Array(row + 1)
      for (let col = 0; col < currRow.length; col++) {
        currRow[col] = (prevRow[col] || 0) + (prevRow[col - 1] || 0)
      }
      arr.push(currRow)
    }
    return arr
  }


}

// 1 - row = 0
// 1 1 - row = 1
// 1 2 1 - row = 2 [e.g. 2 = arr[row - 1][col] + arr[row - 1][col - 1]] 
// 1 3 3 1 - row = 3
// 1 4 6 4 1 - row = 4