interface Coordinates {
  start: number[],
  end: number[]
}

interface Position {
  [key: string]: Coordinates | undefined
}

export class _WordSearch {

  constructor(private grid: string[]) {}

  public find(words: string[]): Position {
    let nRows = this.grid.length, nCols = this.grid[0].length 
    let store: Position = {}

    for(const word of words) {
      for (let row = 0; row < nRows; row++) {
        for (let col = 0; col < nCols; col++) {
          
          if (col < nCols - word.length + 1) { //Horizontal
            let search = this.horizontalSearch(row, col, word)
            let match = this.isMatch(search, word, [row + 1, col + 1], [row + 1, col + word.length])
            if (match) {
              store[word] = match
            }
          }
          
          if (row < nRows - word.length + 1) { //Vertical
            let search = this.verticalSearch(row, col, word)
            let match = this.isMatch(search, word, [row + 1, col + 1], [row + word.length, col + 1])
            if (match) {
              store[word] = match
            }
          }
          
          if (row < nRows - word.length + 1 && col < nCols - word.length + 1) { //Diagonal Right (Down)
            let search = this.diagonalRightSearch(row, col, word)
            let match = this.isMatch(search, word, [row + 1, col + 1], [row + word.length, col + word.length])
            if (match) {
              store[word] = match
            }
          }

          if (row < nRows - word.length + 1 && col > word.length) { //Diagonal Left (Down)
            let search = this.diagonalLeftSearch(row, col, word)
            let match = this.isMatch(search, word, [row + 1, col + 1], [row + word.length, col - word.length + 2])
            if (match) {
              store[word] = match
            }
          }
        }
      }
      if (!store[word]) { //If we can't find it
        store[word] = undefined
      }
    }
    return store
  }

  private horizontalSearch(row: number, col: number, word: string): string {
    let search = ''
    for (let i = col; i < col + word.length; i++) {
      search += this.grid[row][i]
    }
    return search
  }

  private verticalSearch(row: number, col: number, word: string): string {
    let search = ''
    for (let i = row; i < row + word.length; i++) {
      search += this.grid[i][col]
    }
    return search
  }

  private diagonalRightSearch(row: number, col: number, word: string): string {
    let search = ''
    for(let i = row, j = col; i < row + word.length, j < col + word.length; i++, j++) {
      search += this.grid[i][j]
    }
    return search
  }

  private diagonalLeftSearch(row: number, col: number, word: string): string {
    let search = ''
    for(let i = row, j = col; i < row + word.length, j > col - word.length; i++, j--) {
      search += this.grid[i][j]
    }
    return search
  }

  private isMatch(search: string, word: string, start: number[], end: number[]): (Coordinates | undefined) {
    if (word === search) {
      return this.setCoordinates(start, end)
    } else if (word === this.reverse(search)) {
      return this.setCoordinates(end, start)
    }
    return;
  }

  private setCoordinates(_start: number[], _end: number[]): Coordinates { 
    return { start: _start, end: _end }
  }

  private reverse(str: string): string {
    return str.split('').reverse().join('')
  }
}

//There is a great solution in the community solution that is worth noting: 

export default class WordSearch { //I've renamed a few variables
  private directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];

  constructor(private grid: string[]) {}

  public find(words: string[]): Position { 
    return words.reduce((acc, word) => ({ ...acc, [word]: this.search(word) }), {})
  }

  private search(word: string): (Coordinates | undefined) {
    for (const [r, row] of this.grid.entries()) { //.entries is like .enumerate in python, it returns the key,value interator
      for (const [c, char] of [...row].entries()) {
        if (word[0] === char) { //i.e we have a possible match
          for (const direction of this.directions) {
            const end = this.searchDirection(word.slice(1), r, c, direction)
            if (end) {
              return { start: [r + 1, c + 1], end }
            }
          }
        }
      }
    }
    return;
  }

  private searchDirection(word: string, r: number, c: number, direction: number[]): (number[] | undefined) {
    for (const char of word) {
      r += direction[0], c += direction[1]
      if (r < 0 || r >= this.grid.length || char !== this.grid[r][c]) {
        return undefined
      }
    }
    return [r + 1, c + 1]
  }


}