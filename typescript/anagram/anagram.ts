export default class {

  constructor(private word: string) {}

  public matches(...anagrams: string[]): string[] {
    let _word = this.sort(this.word.toLowerCase())
    return anagrams.filter((val: string) => {
      let _val = this.sort(val.toLowerCase())
      return _word === _val 
        && val.toLowerCase() !== this.word.toLowerCase()
    })
  }

  private sort(str: string): string {
    return str.split('').sort().join('')
  }

}