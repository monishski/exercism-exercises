export default class Words {

  constructor() {}

  public count(text: string): Map<string, number> {
    const map: Map<string, number> = new Map()
    text.toLowerCase()
      .replace(/[\r\n\s]+/g, ' ') //remove multiple tabs/newlines/spaces with single space
      .trim() //remove start & end spaces
      .split(' ') 
      .map(word => { 
        // map.set(word, map.get(word)! + 1 || 1) //one liner
        if (!map.has(word)) {
          map.set(word, 0)
        } 
        map.set(word, map.get(word)! + 1)
      })
    return map
  }
}