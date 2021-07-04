export default class Beer {

  static verse(n: number): string {
    if (n > 0) {
      let bottleHandlerOne = n === 1 ? 'bottle' : 'bottles'
      let bottleHandlerTwo = n - 1 === 1 ? 'bottle' : 'bottles'
      let zeroHandler = n === 1 ? 'no more' : n-1
      let adhocHandler = n === 1 ? 'it' : 'one'
      return `${n} ${bottleHandlerOne} of beer on the wall, ${n} ${bottleHandlerOne} of beer.\nTake ${adhocHandler} down and pass it around, ${zeroHandler} ${bottleHandlerTwo} of beer on the wall.\n`
    } else {
      return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
    }
  }

  static sing(start: number = 99, end: number = 0): string {
    let result = '' //an alternate method is to create an array and they join with '\n' at the end
    for (let i = start; i >= end + 1; i--) {
      result += Beer.verse(i) + '\n'
    }
    result += Beer.verse(end)
    return result
  }
}