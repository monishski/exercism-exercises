export default class PhoneNumber {
  
  constructor(private num: string) {}

  public _number(): string | undefined {
    if (this.num.match(/[a-z]/g)) return;
    let number = this.num.replace(/[^\d]/g, '')
    if (number.length === 11 && number[0] === '1') return number.split('').splice(1).join('');
    else if (number.length !== 10) return;
    else return number
  }

  public number(): string | undefined {
    const cleaned = this.num.replace(/[(). -]/g, '')
    const match = /^1?(\d{10})$/.exec(cleaned);
    return match ? match[1] : undefined;
}

}