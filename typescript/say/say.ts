const map: { [key: number]: string } = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten', 
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

const scales: string[] = [' thousand ', ' million ', ' billion ', ' trillion ']

export default class Say { 

  inEnglish(n: number): string {
    if (n > 999999999999 || n < 0) throw new Error("Number must be between 0 and 999,999,999,999.")
    if (n === 0) return 'zero'
    let result = ''
    let count = 0
    while (n > 0) {
      let chunk = this.hundreds(Math.floor(n % 1000))
      let scale = count > 0 && chunk !== '' ? scales[count-1] : ''
      result = chunk + scale + result 
      n /= 1000
      count++
    }
    return result.trim()
  }

  tenths(n: number): string {
    if (n > 99) throw new Error('Number must be between 0 and 99')
    if (n <= 20) return map[n]
    return map[n - (n % 10)] + '-' + map[n % 10]
  }

  hundreds(n: number): string {
    if (n > 999) throw new Error('Number must be between 100 and 999')
    if (n < 100) return this.tenths(n)
    if (n % 100 === 0) return map[Math.floor(n / 100)] + ' hundred'
    return map[Math.floor(n / 100)] + ' hundred ' + this.tenths(n % 100) 
  }


}