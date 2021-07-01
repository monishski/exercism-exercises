export default class {

  constructor(private isbn: string) {}

  _isValid(): boolean {
    if (!this.isbn) return false; //empty string
    let sum = 0
    let power = 10
    for (const char of this.isbn) {
      if (!power) return false; //power is 0, so its too long
      if (char.match(/[0-9]/)) { 
        sum += (+char) * power
        power--;
      } 
      if (power === 1 && char === 'X') { //power === 1 because X can only be used if its the last char
        sum += 10 * power
        power--;
      }
    }
    return sum % 11 === 0
  }

  isValid(): boolean {
    let isbn = this.isbn.replace(/-/g, '')
    if (!isbn.match(/^\d{9}[\dX]$/)) return false;
    let sum = 0;
    for (let i = isbn.length - 1; i >= 0; i--) {
      sum += (isbn[i] === 'X' ? 10 : +isbn[i]) * (i + 1)
    }
    return sum % 11 === 0
  }


} 