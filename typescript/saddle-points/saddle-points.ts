type saddle = { row: number, column: number }

class SaddlePoints {
  static saddlePoints(matrix: number[][]): saddle[] {
    if (!matrix.length) return []


    let rows = matrix.length, cols = matrix[0].length
    let result = []

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) { //brute force

        let isSaddle = true

        for (let tempRow = 0; tempRow < rows; tempRow++) {
          if (tempRow !== row && matrix[tempRow][col] < matrix[row][col]) isSaddle = false; 
        }

        for (let tempCol = 0; tempCol < cols; tempCol++) {
          if (tempCol !== col && matrix[row][tempCol] > matrix[row][col]) isSaddle = false; 
        }

        if (isSaddle) {
          result.push({ row: row + 1, column: col + 1})
        }

      }
    }

    return result
  }

}

export default SaddlePoints
