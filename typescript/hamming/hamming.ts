export default class Hamming { 

  public compute(p: string, q: string): number {
    if (p.length !== q.length) throw new Error('DNA strands must be of equal length.')
    return p.split('').reduce((count, elem, index) => {
      if (elem !== q[index]) count++; //elem = p[index]
      return count
    }, 0)
  }

}