export default {
  ofSize(n: number): number[][] {

    let matrix: number[][] = Array.from(Array(n), () => new Array(n))

    let offset = 0
    let count = 1

    while (count <= n ** 2) {
      //Move right 
      for (let right = offset; right < n - offset; right++) { //e.g. row = 0, col = 0 to 3 | row = 1, col = 1 to 2
        matrix[offset][right] = count++
      }
      //Move down
      for (let down = offset + 1; down < n - offset; down++) { //e.g. col = n - 1, row = 1 to 3 | col = 2, row = 2 to 2
        matrix[down][n - 1 - offset] = count++
      }
      //Move left
      for (let left = n - 1 - (offset + 1); left >= offset; left--) { //e.g. row = n - 1, col = 2 to 0 | row = 2, col = 1 to 1 
        matrix[n - 1 - offset][left] = count++
      }
      //Move up
      for (let up = n - 1 - (offset + 1); up >= (offset + 1); up--) { // e.g. col = 0, row = 2 to 1
        matrix[up][offset] = count++
      }

      offset++
    }
    return matrix
  }

}

//There is a very similar implementation which uses a switch:
//https://exercism.io/tracks/typescript/exercises/spiral-matrix/solutions/c19de56ed18d4da584dfc2c2bbc6026c