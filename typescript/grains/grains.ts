export class Grains {
  //Although the below works, its not totally accurate because the max number of bits is 53, 
  //So numbers above 2 ** 53 will be loosely compared
  public static square(n: number): Number { 
    if (n < 1 || n > 64) throw new Error();
    return 2 ** (n - 1)
  }

  public static total(): number {
    return 2 ** 64 - 1
  }
}

//Other people did not even define as class
export default {
  square(n: number): number {
    if (n < 1 || n > 64) throw new Error();
    return 2 ** (n - 1)
  },
  total(): number { return 2 ** 64 - 1}
}