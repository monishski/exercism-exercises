
export default class PigLatin {

  static _translate(phrase: string): string {
    const vowels = 'aeiou'
    let result: string[] = []
    let words = phrase.split(' ')

    for (const word of words) {

      if (vowels.indexOf(word[0]) !== -1  //rule 1
        || word.substring(0, 2) === 'xr'
        || word.substring(0, 2) === 'yt') { //i.e. we start with a vowel/xr/yt
        result.push(word + 'ay')
        continue;
      } 
  
      if (vowels.indexOf(word[0]) === -1) { //i.e. we start with a consonant 
        if (word.substring(0, 2) === 'qu') { //rule 3
          result.push(word.substring(2) + word.substring(0, 2) + 'ay')
          continue;
        }
        if (word.substring(1, 3) === 'qu') { //rule 3
          result.push(word.substring(3) + word.substring(0, 3) + 'ay')
          continue;
        }
        if (word.length == 2 && word[1] === 'y') { //rule 4
          result.push(word[1] + word[0] + 'ay')
          continue;
        } 

        let consonantCluster = word[0]
        let index = 1
        while (vowels.indexOf(word[index]) === -1) { //rule 2
          consonantCluster += word[index]
          index++
        }
        if (word[index] === 'y') { //rule 4
          result.push(word[index] + word.substring(index+1) + consonantCluster + 'ay')
          continue;
        } else {
          result.push(word.substring(index) + consonantCluster + 'ay')
          continue;
        }
      }
    }  

    return result.join(' ')
  }

  //one of the solutions within the community
  static translate(phrase: string): string {
    let result: string[] = []
    let words: string[] = phrase.split(' ')

    for (const word of words) {
      result.push(PigLatin.doTranslation(word))
    }

    return result.join(' ')
  }

  private static doTranslation(word: string): string {
    if (/^([aeiou]|yt|xr).+/.test(word)) { //does it start with vowel/yt/xr
      return word + "ay" 
    }
    if (/^[^aeiou]{3}(?=[aeiou])|[^aeiou]qu.*/.test(word)) { //does it start with 3 consonants/1 consonant with qu
      return word.substr(3) + word.substr(0, 3) + "ay"
    }
    if (/^[^aeiou]{2}(?=[aeiou])|qu.*/.test(word)) { //does it start with 2 consonant / qu
      return word.substr(2) + word.substr(0, 2) + "ay"
    }
    if (/^[^aeiou][aeiouy].*/.test(word)) { //does it start with one consonant / 1 vowel
      return word.substr(1) + word.substr(0, 1) + "ay"
    }
    return ''
  }

}