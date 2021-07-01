export default class {

  constructor(private p: number, private g: number) {
    if (g > p) throw new Error();
    if (!this.isPrime(p) || !this.isPrime(g)) throw new Error()
  }

  getPublicKeyFromPrivateKey(n: number): number {
    if (n < 2 || n >= this.p) throw new Error()
    return (this.g ** n) % this.p
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    return (publicKey ** privateKey) % this.p 
  }

  private isPrime(n: number): boolean {
    if (n < 2) return false; //i.e. if n = 0, 1
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
      if (n % i === 0) return false;
    }
    return true
  }

}