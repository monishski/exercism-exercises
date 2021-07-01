type ClassificationType = 'perfect' | 'abundant' | 'deficient'

export default class {

  public static classify(n: number): ClassificationType {
    if (n <= 0) {
      throw new Error('Classification is only possible for natural numbers.')
    }
    const factors: number[] = [...Array(n + 1).keys()].filter(i => n % i === 0)
    factors.pop()
    const sum = factors.reduce((a, b) => a + b, 0)
    // const sum = aliquot(n) //You could do the factor finding and sum in the same function
    if (sum === n) return 'perfect';
    else if (sum > n) return 'abundant';
    else return 'deficient'
  }

}

const aliquot = (n: number): number => {
  let sum = 0;
  for (let i = 0; i <= Math.floor(n / 2); i++) {
    if (n % i == 0 && i !== n) {
      sum += i
    }
  }
  return sum
}
