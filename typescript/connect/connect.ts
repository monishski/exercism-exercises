export default class {
  private neighbours: number[][] = [[-1, -1], [-1, 1], [1, -1], [1, 1], [0, 2], [0, -2]] //indexes [row, col] 

  constructor(private board: string[]) {
    this.board = board
  }

  winner(): string {
    const mask: boolean[][] = []

    for (let i = 0; i < this.board.length; i++) {
      mask.push(new Array(this.board[i].length).fill(false))
    }

    let row = 0
    for (let col = 0; col < this.board[row].length; col++) { //Iterate through the first row
      if (this.board[row][col] === 'O') { //O will win if it traverses legally to this.board.length
        let oWin = this.traverse(row, col, mask, "O")
        if (oWin) return 'O'
      }
    }

    for (let row = 0; row < this.board.length; row++) { //Interate through the first diagonal
      let col = row
      if (this.board[row][col] === 'X') { //X will win if traverses legally to the right (This is any of values of the last diagonal)
        let xWin = this.traverse(row, col, mask, "X")
        if (xWin) return 'X'
      }
    }

    return ''
  }

  private traverse(row: number, col: number, mask: boolean[][], player: "O" | "X"): boolean {
    let stack: number[][] = [[row, col]] 
    while (stack.length !== 0) {
      let [_row, _col] = stack.pop()! //There is no way stack will be empty hence !
      mask[_row][_col] = true

      if ((player === "O" && _row === this.board.length - 1) //for O we check if we have reached the last row
        || (player === "X" && _col === _row + this.board[0].length - 1)) { //the check for X is a little more complex, we need to check if column index matches end of that row
        return true; //
      }

      this.neighbours.map(([y, x]) => {
        let __row = _row + y
        let __col = _col + x

        if (__row >= 0 && __row < this.board.length && this.board[__row][__col] === player && !mask[__row][__col]) {
          mask[__row][__col] = true
          stack.push([__row, __col])
        }
      })
    }
    return false;
  }

}