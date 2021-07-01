type array2d = number[][]

class Matrix {
  // private matrix: number[][]
  // public rows: number[][]
  // public columns: number[][]

  private matrix: array2d
  public rows: array2d
  public columns: array2d

  constructor(matrix: string) { //spot on
    this.matrix = matrix //you can assign this directly to this.row
      .split('\n')
      .map(str => str
        .split(' ')
        .map(val => parseInt(val)))
    this.rows = this.matrix
    this.columns =  this.matrix[0].map((_: number, col: number) => this.matrix.map(row => row[col]));
  }

}

export default Matrix
