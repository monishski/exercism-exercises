const Rectangle = {

  count(arr: string[]): number { //Brute force?
    if (arr.length === 0) return 0;

    let rows = arr.length, cols = arr[0].length
    let count = 0

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {

        // Search
        if (arr[row][col] === '+') { //Vertice found (top left)
          let topLeft = col 
          for (let tempCol = col + 1; tempCol < cols; tempCol++) { //Search for top right vertices
            
            if (arr[row][tempCol].match(/[\s]/)) break; //broken rectangle
            
            if (arr[row][tempCol] === '+') {
              let topRight = tempCol
              for (let tempRow = row + 1; tempRow < rows; tempRow++) {  // Check if top 2 vertices can be found at same position at any other row
                
                if (arr[tempRow][topLeft].match(/[\s\-]/)
                  || arr[tempRow][topRight].match(/[\s\-]/)) break; //broken rectangle
                
                if (arr[tempRow][topLeft] === '+' 
                  && arr[tempRow][topRight] === '+') {
                  count++
                }
              }
            }  
          }
        }
      }  
    }
    return count
  } 
}

export default Rectangle