class CollatzConjecture {
  static steps(n: number) {
    if (n <= 0) throw new Error("Only positive numbers are allowed");
    let count = 0;
    while (n > 1) {
      count++;
      if (n % 2 === 0) n = n / 2;
      else n = 3 * n + 1; 
    }
    return count
  }
}

export default CollatzConjecture
