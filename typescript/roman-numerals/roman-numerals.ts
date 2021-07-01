const intToRomanNum: { [key: number]: string } = {
  1: 'I',
  // 2: 'II',
  // 3: 'III',
  4: 'IV',
  5: 'V',
  // 6: 'VI',
  // 7: 'VII',
  // 8: 'VIII',
  9: 'IX',
  10: 'X',
  40: 'XL', 
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

// Logic works as follows (e.g. for 84 = LXXXIV)
// x = 84 / 10 = 8
// if x * 10 not in intToRoman => if x * 10 > 50 break => add L => x * 10 - 50 = X * (x * 10 - 30)/10 = 3 => add XXX 
// x = x % 10
// divisor/10 (divisor = 10) 

const build = (n: number, divisor: number): string => {
  let result = ''
  while (n > 0) {
    let x = Math.floor(n / divisor)
    if (x === 0) { //e.g. 402, we need to skip a factor
      divisor /= 10
      continue;
    }
    if (intToRomanNum[x * divisor]) {
      result += intToRomanNum[x * divisor]
    } else {
      let keys: string[] = Object.keys(intToRomanNum)
      for (var i = 0; i < keys.length; i++) {
        if ((x * divisor) < +keys[i]) break;
      }
      result += intToRomanNum[+keys[i-1]]
      result += intToRomanNum[divisor].repeat((x * divisor - +keys[i-1]) / divisor)
    }
    n %= divisor
    divisor /= 10
  }
  return result
}

//The recursive approach is so much cleaner!
const integerToRomanNumeral: [string, number][] = [
  ['M', 1000], 
  ['CM', 900],
  ['D', 500], 
  ['CD', 400],
  ['C', 100], 
  ['XC', 90],
  ['L', 50], 
  ['XL', 40],
  ['X', 10], 
  ['IX', 9],
  ['V', 5], 
  ['IV', 4],
  ['I', 1]
]

class RomanNumerals {

  public static _roman(n: number): string {
    if (intToRomanNum[n]) return intToRomanNum[n];    
    if (n > 1000) return build(n, 1000);
    else if (n > 100) return build(n, 100);
    else if (n > 10) return build(n, 10);
    else return build(n, 1);
  }

  public static roman(n: number): string { //BEAUTIFUL
    const x = integerToRomanNumeral.find(([_, val]) => n >= val)
    if (x) {
      return x[0] + RomanNumerals.roman(n - x[1])
    } else {
      return ''
    }
  }
}

export default RomanNumerals
