import { access } from "fs";

export default class {

  constructor(private series: string) {}

  get digits(): number[] {
    return this.series.split('').map(val => +val)
  }

  public _slices(n: number): number[][] {
    if (n > this.series.length) throw new Error();
    let result: number[][] = []
    for (let i = 0; i < this.series.length - n   + 1; i++) {
      let temp: number[] = [] //alternatve to this is to use the slice method here...
      for (let j = i; j < i + n; j++) { 
        temp.push(+this.series[j])
      }
      result.push(temp)
    }
    return result
  }

  public slices(n: number): number[][] { //using reduce...
    if (n > this.series.length) throw new Error()
    const arr = this.digits.slice(0, this.digits.length - n + 1)
    return arr.reduce((acc: number[][], _, i) => [...acc, this.digits.slice(i, i + n)], [])
  }
}