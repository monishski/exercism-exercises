export default (...proverbs: string[]): string => {
  let result = ''
  for (let i = 0; i < proverbs.length - 1; i++) {
    result += `For want of a ${proverbs[i]} the ${proverbs[i+1]} was lost.\n` 
  }
  result += `And all for the want of a ${proverbs[0]}.`
  return result
}