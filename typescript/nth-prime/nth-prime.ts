export default class {

  _nth(n: number): number {
    if (n < 1) throw new Error('Prime is not possible')

    let count = 1
    let prime = 2
    let i = 3
    while (count < n) {

      let isPrime = true
      for (let j = 3; j * j <= i; j += 2) {
        if (i % j === 0 && i !== j) {
          isPrime = false;
          break; //this break is only for the 'for' loop not the 'while' loop!
        }
      }
      
      if (isPrime) {
        count++
        prime = i        
      }

      i += 2
    }


    return prime
  }

  //There is nice Sieve solution
  nth(n: number): number {
    if (n < 1) throw new Error('Prime is not possible')

    let sieve: number[] = []
    let int = 2
    while (sieve.length < n) {
      if (sieve.every(n => int % n !== 0)) {
        sieve.push(int)
      }
      int++
    }

    return sieve[sieve.length - 1]
  }

}