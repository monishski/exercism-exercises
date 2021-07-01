//Notes a lot of other solutions have opted to use the alphabet explicity layed out
//The forward shift, is achieved by (alphabet.indexOf(char) + alphabet.indexOf(key[index % key.length])) % 26
//The backward shift, is achieved by (alphabet.indexOf(char) - alphabet.indexOf(key[index % key.length]) + 26) % 26 

class SimpleCipher {
  public key: string;

  constructor(input?: string) { 
    this.key = !input ? this.generateKey() : input
  }

  // An alternative constructor you could have written is
  // constructor(public key = SimpleCipher.generateKey()) {} //assuming generateKey is static
  
  private generateKey(): string {
  // private static generateKey(): string {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let key = ''
    for (let i = 0; i < 100; i++) { //many solution again create an empty array and later join [...Array(100)].map(FUNCTION THAT RETURNS A RANDOM CHARACTER).join()
      key += alphabet.charAt(Math.floor(Math.random() * alphabet.length)) //could use simply [] instead of charAt
    }
    return key 
  }

  encode(text: string): string {
    if (this.key.length < text.length) {
      this.key = this.key.repeat(Math.ceil(text.length / this.key.length))
      //note you dont need reassign this.key...
      //for the index where it doesnt exists you could just do this.key[i % this.key.length]
    }
    const a = 'a'.charCodeAt(0)
    let cipher = ''
    for (let i = 0; i < text.length; i++) { //again many opted for single line alternative of split().map((char, index) => LOGIC).join()
      cipher += String.fromCharCode(((text[i].charCodeAt(0) - a) + (this.key[i].charCodeAt(0) - a)) % 26 + a)
    }    
    return cipher
  }

  decode(cipher: string): string {
    if (this.key.length < cipher.length) {
      this.key = this.key.repeat(Math.ceil(cipher.length / this.key.length))
    }
    const a = 'a'.charCodeAt(0)
    const z = 'z'.charCodeAt(0)
    let text = ''
    for (let i = 0; i < cipher.length; i++) {
      const shift = this.key[i].charCodeAt(0) - a
      if (cipher[i].charCodeAt(0) - a - shift < 0) {
        text += String.fromCharCode(cipher[i].charCodeAt(0) + z - this.key[i].charCodeAt(0) + 1)
      } else {
        text += String.fromCharCode(cipher[i].charCodeAt(0) - shift)
      }
    }    
    return text
  }
}

export default SimpleCipher
