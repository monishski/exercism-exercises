const map: { [key: string]: string } = {
  [' _ \n' + '| |\n' + '|_|\n' + '   ']: 0+'',
  ['   \n' + '  |\n' + '  |\n' + '   ']: 1+'',
  [' _ \n' + ' _|\n' + '|_ \n' + '   ']: 2+'',
  [' _ \n' + ' _|\n' + ' _|\n' + '   ']: 3+'',
  ['   \n' + '|_|\n' + '  |\n' + '   ']: 4+'',
  [' _ \n' + '|_ \n' + ' _|\n' + '   ']: 5+'',
  [' _ \n' + '|_ \n' + '|_|\n' + '   ']: 6+'',
  [' _ \n' + '  |\n' + '  |\n' + '   ']: 7+'',
  [' _ \n' + '|_|\n' + '|_|\n' + '   ']: 8+'',
  [' _ \n' + '|_|\n' + ' _|\n' + '   ']: 9+'',
}


export default class OcrParser {

  static convert(n: string): string {
    if (map[n]) return map[n]

    const Y = 4, X = 3
    let lines = n.split('\n')    
    
    let composite = []
    for (let i = 0; i < lines.length; i += Y) {
      let line = lines.slice(i, i + Y)

      let digits = ''
      for (let j = 0; j < line[0].length; j += X) {

        let digit = []
        for (const block of line) {
          digit.push(block.slice(j, j + X)) 
        }  

        digits += map[digit.join('\n')] || '?'
      }

      composite.push(digits)
    }

    return composite.join(',')
  }

}
