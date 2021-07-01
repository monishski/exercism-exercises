export const Bucket: { [key: string]: string } = {
  One: 'one',
  Two: 'two'
}

// https://www.youtube.com/watch?v=uv9Mgs-cUA0&ab_channel=DrJamesTanton
// http://web.mit.edu/neboat/Public/6.042/numbertheory1.pdf
// https://www.geeksforgeeks.org/two-water-jug-puzzle/ - Algorithm is from here

export class TwoBucket {
  private from: number;
  private to: number;
  private count: number;
  public goalBucket: string;
  public otherBucket: number;

  constructor(private buckOne: number, 
    private buckTwo: number, 
    private goal: number, 
    private starterBuck: string) {

      let fromBuck = this.starterBuck === Bucket.One ? this.buckOne : this.buckTwo
      let toBuck = this.starterBuck === Bucket.One ? this.buckTwo : this.buckOne

      this.from = this.starterBuck === Bucket.One ? this.buckOne : this.buckTwo //make 'from' to based on starterBuck
      this.to = 0
      this.count = 1 //counting the initial fill as one

      while (this.from !== this.goal && this.to !== this.goal) { 
        //note special cases are not handled here! (e.g. if this.goal > Math.max(buckOne, buckTwo) => throw Error())
        //if gcd of buckOne & buckTwo does not divided by this.goal, then solution is not possible => throw Error()
        this.count++

        let temp = Math.min(this.from, toBuck - this.to) //maximum amount that can be poured from 'from' to 'to'

        this.to += temp //pour from 'from' to 'to'
        this.from -= temp 

        if (this.from === this.goal || this.to === this.goal) break;

        if (this.from === 0) { //if 'from' jug becomes empty, fill it
          this.from = fromBuck
          this.count++
        }
        
        if (this.to === toBuck) { //if 'to' jug become full, empty it
          this.to = 0
          this.count++
        }

      }

      this.goalBucket = (this.starterBuck === Bucket.One && this.from === this.goal) || 
        (this.starterBuck === Bucket.Two && this.to === this.goal) ? Bucket.One : Bucket.Two

      this.otherBucket = this.to
    }

  moves(): number {
    return this.count
  }

}
