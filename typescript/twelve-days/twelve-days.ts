const map: { [key: number]: string[] } = {
  1: ['first', 'a Partridge in a Pear Tree.'],
  2: ['second', 'two Turtle Doves'],
  3: ['third', 'three French Hens'],
  4: ['fourth', 'four Calling Birds'],
  5: ['fifth', 'five Gold Rings'],
  6: ['sixth', 'six Geese-a-Laying'],
  7: ['seventh', 'seven Swans-a-Swimming'],
  8: ['eighth', 'eight Maids-a-Milking'],
  9: ['ninth', 'nine Ladies Dancing'],
  10: ['tenth', 'ten Lords-a-Leaping'],
  11: ['eleventh', 'eleven Pipers Piping'],
  12: ['twelfth', 'twelve Drummers Drumming']
} 

class TwelveDays {
  static recite(start: number, end: number) {
    let result = ''
    for (let i = start; i < end + 1; i++) {
      result += TwelveDays.verse(i)
    }
    return result
  }

  static verse(n: number) {
    let result = ''
    let [day, phrase] = map[n]
    result += `On the ${day} day of Christmas my true love gave to me: ${phrase}`
    for(let j = n - 1; j >= 1; j--) {
      let [_, _phrase] = map[j]
      result += `,${j === 1 ? ' and ' : ' '}${_phrase}`
    }
    return result + '\n'
  }
}

export default TwelveDays
