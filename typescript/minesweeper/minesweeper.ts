let neighbours: number[][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function annotate(field: string[]): string[] {
  if (field.length === 0) return [];

  let nRows = field.length,
    nCols = field[0].length;
  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
      if (field[row][col] === " ") {
        let mines = minesInNeighbourhood(field, row, col, nRows, nCols);
        if (mines > 0) {
          field[row] =
            field[row].substring(0, col) +
            mines +
            field[row].substring(col + 1);
        }
      }
    }
  }

  return field;
}

const minesInNeighbourhood = (
  field: string[],
  row: number,
  col: number,
  nRows: number,
  nCols: number
): number => {
  let count = 0;
  for (let [x, y] of neighbours) {
    if (
      row + x >= 0 &&
      row + x < nRows &&
      col + y >= 0 &&
      col + y < nCols &&
      field[row + x][col + y] === "*"
    ) {
      count++;
    }
  }
  return count;
};
