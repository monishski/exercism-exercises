class _AbtashCipher {

  constructor() {}

  public encode(text: string): string {
    let _text = text.toLowerCase()
    let cipher = ''
    let temp = ''
    for (let i = 0; i < text.length; i++) {
      let cipherChar = _text[i]
      if (!/[0-9a-zA-Z]/.test(cipherChar)) continue;
      if (!/[0-9]/.test(cipherChar)) {
        cipherChar = String.fromCharCode('z'.charCodeAt(0) - (cipherChar.charCodeAt(0) - 'a'.charCodeAt(0))) 
      }
      temp += cipherChar 
      if (temp.length === 5) {
        cipher += cipherChar + ' '
        temp = ''
      } else {
        cipher += cipherChar
      }
    }
    return cipher.trim()
  }

  public decode(cipher: string): string {
    let text = ''
    for(let i = 0; i < cipher.length; i++) {
      let cipherChar = cipher[i] 
      if (!/[0-9a-zA-Z]/.test(cipherChar)) continue; //skip spaces
      if (!/[0-9]/.test(cipherChar)) { //if its alphabet character
        cipherChar = String.fromCharCode('a'.charCodeAt(0) + ('z'.charCodeAt(0) - cipherChar.charCodeAt(0)))
      } 
      text += cipherChar
    }
    return text
  }
}

//Tbe class above works but note there is repetitive code!
export default class AbtashCipher {
  private readonly offset;

  constructor() {
    this.offset = 'z'.charCodeAt(0) + 'a'.charCodeAt(0)
  }

  public encode(text: string): string {
    return this.transform(text).match(/.{1,5}/g)!.join(' ');
    // You can also split a string based on index using the following:
    // return this.transform(text).split('').reduce((prev, curr, index) => index > 0 && index % 5 === 0 ? prev + ' ' + curr : prev + curr, '')
  }

  public decode(cipher: string): string {
    return this.transform(cipher)
  }

  public transform(string: string): string {
    return string.replace(/./g, char => {
      if (/[^a-z\d]/i.test(char)) return ''
      if (/\d/.test(char)) return char
      return String.fromCharCode(this.offset - char.toLowerCase().charCodeAt(0))
    })
  }

}