export default class {
  private ALPHABET: string = 'ABCDEFGHIJKLMOPQRSTUVXYZ'

  makeDiamond(char: string): string {
    // if (char === 'A') return 'A\n';
    const pos = this.ALPHABET.indexOf(char)
    let result: string[] = []  
    for (let i = 0; i < pos; i++) {
      result.push(this.createPattern(pos, i))
    }
    for (let i = pos; i >=0; i--) {
      result.push(this.createPattern(pos, i))
    }
    return result.join('\n')+'\n'
  } 
  
  createPattern(pos: number, index: number): string {
    const char = this.ALPHABET[index]
    const outside = ' '.repeat(pos - index)
    if (index === 0) return outside + char + outside;
    else {
      const inside = ' '.repeat(2 * index - 1)
      return outside + char + inside + char + outside;
    }
  }

}

