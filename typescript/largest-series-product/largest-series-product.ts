export default class {
  private series: string;

  constructor(input: string) {
    if (input.match(/[^\d]/)) throw new Error('Invalid input.')
    this.series = input 
  }

  largestProduct(digits: number) {
    if (digits < 0) throw new Error('Invalid input.')
    if (digits === 0) return 1;
    if (digits > this.series.length) throw new Error("Slice size is too big.") 
    let max = Number.NEGATIVE_INFINITY
    for (let i = 0; i < this.series.length - digits + 1; i++) {
      let product = +this.series[i]
      for (let j = i + 1; j < i + digits; j++) {
        product *= +this.series[j]
      }
      max = Math.max(max, product)
    }
    return max
  }}