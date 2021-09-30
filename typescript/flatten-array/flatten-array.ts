interface DeepArray<T> extends Array<T | DeepArray<T>> {} //love it

export function flatten(arr: DeepArray<number | undefined>) {
  let res: number[] = [];
  unpack(arr, res);
  return res;
}

const unpack = (arr: DeepArray<number | undefined>, res: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    //note (typeof arr[i] === "number") doesnt provide type guard!
    if (typeof val === "number") res.push(val);
    //you could have used Array.isArray(arr[i])
    else if (typeof val === "object") unpack(val, res);
  }
  // return res;
};
