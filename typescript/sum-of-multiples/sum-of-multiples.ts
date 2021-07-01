export const _SumOfMultiples = (multiples: number[]): { [key: string]: Function } => {   
  return {
    to(n: number): number {
      let sum = 0 
      for(let i = 1; i <  n; i++) {
        for(let j = 0; j < multiples.length; j++) {
          if (i % multiples[j] === 0) {
            sum += i
            break;
          }
        }
      }
      return sum
    }
  }
}

//Most solutions took the class based approach
class SumOfMultiples {

  constructor(readonly multiples: number[]) {}

  public to(num: number): number {
    return Array.from(Array(num).keys())
      .filter(val => this.multiples.some(multiple => val % multiple === 0)) //some breaks after find the first instance of the statement
      .reduce((sum, val) => sum + val, 0)
  }

}

export default (multiples: number[]): SumOfMultiples => new SumOfMultiples(multiples) 