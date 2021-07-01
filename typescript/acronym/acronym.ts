export default class Acronym {
  public static _parse(phrase: string): string {
    return phrase.split('').reduce((result: string, _: string, index: number) => {
      if (!phrase[index-1] //add starting char
        || phrase[index-1] === ' ' 
        || phrase[index-1] === '-'
        || (phrase[index].match(/[A-Z]/)  
          && phrase[index-1] && phrase[index-1].match(/[a-z]/)  
          && phrase[index+1] && phrase[index+1].match(/[a-z]/)  )) {
        return result + phrase[index].toUpperCase()
      } 
      return result
    }, '')
  } 

  public static parse(phrase: string): string {
    return (phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) || [])
      .map(word => word[0].toUpperCase())
      .join('')
  }
}
