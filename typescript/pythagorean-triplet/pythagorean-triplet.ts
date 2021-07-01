interface Filter { maxFactor: number, minFactor?: number, sum?: number }

export default class Triplet {

  constructor(private a: number, private b: number, private c: number) {}

  public sum(): number {
    return this.a + this.b + this.c
  }

  public product(): number {
    return this.a * this.b * this.c
  }

  public isPythagorean(): Boolean {
    return this.a ** 2 + this.b ** 2 === this.c ** 2
  }

  // public static where(filters: Filter): Triplet[] {
  public static where({ minFactor = 1, maxFactor, sum }: Filter): Triplet[] { //destructure right away
    
    let triplets: Triplet[] = []
    // let { maxFactor, minFactor, sum } = filters
    
    // for (let i = minFactor || 1; i <= maxFactor; i++) {
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        let c = (i ** 2 + j ** 2) ** 0.5 
        let _sum = i + j + c
        if (c % 1 === 0 //i.e. c is an integer
          && c <= maxFactor //make sure, c doesn't exceed maxFactor
          && (_sum === (sum || _sum))) { //if sum is provided check if i + j + c === sum other _sum === _sum
          triplets.push(new Triplet(i, j, c))
        } 
      }
    }

    return triplets
  }

}