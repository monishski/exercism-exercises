export const _RunLengthEncoding = {
  encode(str: string): string {
    if (str.length === 0) return '';
    let result = ''
    let curr = str[0]
    let count = 1
    for(var i = 1; i < str.length; i++) {
      if (str[i] !== curr) { //check if new char is encountered and reset counters
        result += (count > 1 ? count : '') + curr
        curr = str[i];
        count = 0
      }
      count++
    }   
    result += (count > 1 ? count : '') + curr
    return result
  },
  decode(str: string): string {
    let coeff = str.split(/[a-z\s]/ig) //coefficients
    let letters = str.replace(/[\d]/ig, '')
    let result = ''
    for (let i = 0; i < letters.length; i++) {
      result += letters[i].repeat(coeff[i] !== '' ? +coeff[i] : 1)
    }
    return result
  }
}

export default {
  encode(s: string) { 
    return s.replace(/(.)\1+/g, m => m.length + m[0])
  },
  decode(s: string) {
    return s.replace(/([0-9]+)(.)/g, (_, n, c) => c.repeat(Number(n)))
  }
}