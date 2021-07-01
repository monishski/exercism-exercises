export default {
  isArmstrongNumber(n: number): boolean {
    let str: string[] = n.toString().split('')
    return str.reduce((acc: number, val: string) => acc + ((+val) ** str.length), 0) === n
  }
}