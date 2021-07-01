

export default class Pangram {

  constructor(private phrase: string) {}

  isPangram(): boolean {
    let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let count: number = 0
    for(let i = 0; i < alphabet.length; i++) {
      const pangramArr: string[] = this.phrase.replace(' ', '').toLowerCase().split('')
      const letterExists = pangramArr.indexOf(alphabet[i])
      if (letterExists !== -1) {
        count++
      }
    }
    return count === 26
    //There is solution I really like that uses Sets and RegEx
    // return new Set(this.phrase.toLowerCase().replace(/[^a-zA-Z]/g, '')).size === 26
  }

}