export default (n: number): number[] => {
  let primes: number[] = []
  let tempN = n
  while (tempN % 2 === 0) {
    if (tempN === 2) break;
    tempN /= 2
    primes.push(2)
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (tempN !== i && tempN % i === 0) {
      tempN /= i
      primes.push(i)
    }
  } 
  if (tempN !== 1) primes.push(tempN);
  return primes
}
