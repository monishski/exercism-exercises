export default class Squares {
  public squareOfSum: number;
  public sumOfSquares: number;
  public difference: number;

  constructor(n: number) {
    let sum = n * (n + 1) / 2;
    this.squareOfSum = sum * sum;
    this.sumOfSquares = n * (n + 1) * (2*n + 1) / 6;
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}