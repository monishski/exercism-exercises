const animals: string[] = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse']
const description: { [key: string]: string } = {
  "fly": "I don't know why she swallowed the fly. Perhaps she'll die.\n",
  "spider": "It wriggled and jiggled and tickled inside her.\n",
  "bird": "How absurd to swallow a bird!\n",
  "cat": "Imagine that, to swallow a cat!\n",
  "dog": "What a hog, to swallow a dog!\n",
  "goat": "Just opened her throat and swallowed a goat!\n",
  "cow": "I don't know how she swallowed a cow!\n",
  "horse": "She's dead, of course!\n"
}
const connections: { [key: string]: string } = {
  "fly": "",
  "spider": "She swallowed the spider to catch the fly.\n",
  "bird": "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n",
  "cat": "She swallowed the cat to catch the bird.\n",
  "dog": "She swallowed the dog to catch the cat.\n",
  "goat": "She swallowed the goat to catch the dog.\n",
  "cow": "She swallowed the cow to catch the goat.\n",
  "horse": ""
}

export default class {

  static verse(verse: number): string {
    let animal = animals[verse-1]
    let _verse = `I know an old lady who swallowed a ${animal}.\n`
    _verse += description[animal]
    if (animal !== "horse") {
      for (var i = verse - 1; i >= 0 ; i--) {
        _verse += connections[animals[i]]
      }
      if (animal !== "fly") {
        _verse += description["fly"]
      }
    }
    return _verse
  }

  static verses(start: number, end: number): string {
    let _verses = ''
    for(let i = start; i <= end; i++) {
      _verses += this.verse(i) + (i !== end ? '\n' : '')
    }
    return _verses
  }
}