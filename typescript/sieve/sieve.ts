export function primes(n: number): number[] {
  let primes: boolean[] = new Array(n + 1).fill(true)
  primes[0] = false
  primes[1] = false
  for (let i = 2; i <= n; i++) {
    for (let j = i + i; j <= n; j = j + i) {
      primes[j] = false
    }
  }
  return primes.reduce((arr: number[], bool: boolean, index: number) => bool ? arr.concat(index) : arr, [])
}
