function transpose(_lines: string[]): string[] {
  if (!_lines.length) return [];

  let nRows = _lines.length

  let nCols = -1
  for (let i = 0; i < _lines.length; i++) {
    nCols = Math.max(nCols, _lines[i].length)
  }

  let transpose: string[] = []

  for (let col = 0; col < nCols; col++) {
    let temp = ''
    for (let row = 0; row < nRows; row++) {
      temp += _lines[row][col] || ' ' 
    }
    col === nCols - 1 ? transpose.push(temp.trimEnd()) : transpose.push(temp) //hack?
  }

  return transpose
}

export default transpose
