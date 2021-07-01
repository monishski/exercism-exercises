const injections: string[][] = [
  ["malt", "lay in"],
  ["rat", "ate"],
  ["cat", "killed"],
  ["dog", "worried"],
  ["cow with the crumpled horn", "tossed"],
  ["maiden all forlorn", "milked"],
  ["man all tattered and torn", "kissed"],
  ["priest all shaven and shorn", "married"],
  ["rooster that crowed in the morn", "woke"],
  ["farmer sowing his corn", "kept"],
  ["horse and the hound and the horn", "belonged to"]
]

export default class {

  static verse(verse: number): string[] {
    let _verse: string[] = ['This is the house that Jack built.']
    for (let i = 0; i < verse - 1; i++) { //verse 2 needs to map to 0 because of the above 'injections' objected
      let prev: string | undefined = _verse.shift()
      let [pre, post] = prev!.split('is the')
      _verse.unshift('that ' + injections[i][1] + ' the' + post)
      _verse.unshift(pre + 'is the ' + injections[i][0])
    }
    return _verse
  }

  static verses(start: number, end: number): string[] {
    let song = []
    for (let i = start; i <= end; i++) {
      song.push(...this.verse(i), '')
    }
    song.pop()
    return song
  }
}