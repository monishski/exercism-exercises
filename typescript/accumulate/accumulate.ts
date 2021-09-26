// export function accumulate<T>(collection: T[], accumulator: Function): T[] {
export function accumulate<T, U>(
  collection: T[],
  accumulator: (e: T) => U
): U[] {
  let res: U[] = [];
  for (let i = 0; i < collection.length; i++) {
    res.push(accumulator(collection[i]));
  }
  return res;
}
