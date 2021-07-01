export default class {

  public static valid(n: string): boolean {
    n = n.trim().replace(/\s/g, '')
    if (n.length <= 1 || !n.match(/^\d+$/)) return false;
    let sum = 0
    for (let i = n.length - 1; i >= 0; i--) {
      let x = (n.length - 1 - i) % 2 === 1 ? +n[i] * 2 : +n[i] //all odd are doubled
      if (x > 9) x -= 9;
      sum += x
    }
    return sum % 10 === 0
  }

}