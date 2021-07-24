//I could NOT solve this problem... the solution below is by brute force
//and its adapted (my implementation) from https://exercism.io/tracks/typescript/exercises/alphametics/solutions/fad100b8e86840139c724af143b05d8b

const G = require('generatorics'); 

type map = { [key: string]: number }

export default class {
  private characters: Set<string>

  constructor(private puzzle: string) {
    this.characters = new Set(this.puzzle.replace(/[\s\=\+]/g, ''))
  }

  solve(): map | undefined {
    let [left, right] = this.puzzle.split(' == ')
    let sumAlphabet: string = right
    let partsAlphabet: string[] = left.split(' + ')

    for (let perm of G.permutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], this.characters.size)) { //could implement your own permunation generator?
      let map: map = this.assignNumToChars(this.characters, perm) 
      const leftSum = this.calculateSumFromChars(partsAlphabet, map)
      const rightSum = this.calculateSumFromChars([sumAlphabet], map) //passing the sum as array to reuse the function
      if (!leftSum || !rightSum) continue;
      if (leftSum === rightSum) return map;
    }

    return undefined
  }

  private assignNumToChars(characters: Set<string>, perm: number[]): map {
    let map: map = {}
    let index = 0
    for (const [value, _] of characters.entries()) { // should be [value, value], key doesnt exists
      map[value] = perm[index++]
    }
    return map
  }

  private calculateSumFromChars(parts: string[], map: map): number | undefined {
    let total = 0
    for (const part of parts) {
      let numString = ''
      for (const char of part) {
        numString += map[char]
      }
      if (numString[0] === '0') return; //exit early if the number starts with 0
      total += parseInt(numString, 10)
    }
    return total
  }


}