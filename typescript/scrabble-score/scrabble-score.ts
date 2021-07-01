const score2letters: { [key: number]: string[] } = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'] 
}

export default (text: string | undefined): number => {
  if (!text) return 0;
  
  // see etl problem
  const letters2scores: { [key: string]: number } = Object.entries(score2letters).reduce( //creates a 2d array
    (expected: { [key: string]: number }, [key, values]) => { //use destructuring
      values.forEach(value => expected[value.toLowerCase()] = +key)
      return expected
    }
  , {})

  let score = 0
  for (let i = 0; i < text.length; i++) {
    score += letters2scores[text[i].toLowerCase()]
  } 

  return score
}
