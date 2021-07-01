function transform(old: { [key: number]: string[] }) {
  let expected: { [key: string]: number } = {};
  for (const [index, key] of Object.keys(old).entries()) { //key here is string
    for (const [index, value] of old[+key].entries()) {
      expected[value.toLowerCase()] = +key
    }
  }
  return expected
}

function _transform(old: { [key: number]: string[] }) { //using reduce
  return Object.entries(old).reduce( //create a 2d array
    (expected: { [key: string]: number }, [key, values]) => { //use destructuring
      values.forEach(value => expected[value.toLowerCase()] = +key)
      return expected
    }
  , {})
}

export default transform
