export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  validateInputBase(inputBase);
  validateOutputBase(outputBase);
  if (digits.some((x) => x >= inputBase)) {
    throw new Error("Input has wrong format");
  }
  if (digits.length === 1 && digits[0] === 0) return [0]; //exception
  validateInput(digits);

  let n = convertFromBaseXToBase10(digits, inputBase);
  let res = convertFromBase10ToBaseX(n, outputBase);
  return res;
}

function convertFromBaseXToBase10(arr: number[], baseX: number): number {
  let n = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let power = arr.length - i - 1;
    n += arr[i] * baseX ** power;
  }
  return n;
}

function convertFromBase10ToBaseX(n: number, baseX: number): number[] {
  let res: number[] = [];
  let power = 0;
  while (baseX ** power++ <= n);
  power -= 2;

  //This method works but the neater way to do it is to use modulo and division...
  while (power >= 0) {
    let count = 0;
    while (n - baseX ** power >= 0) {
      n -= baseX ** power;
      count++;
    }
    power--;
    res.push(count);
  }

  return res;
}

function validateInputBase(n: number): void {
  if (n <= 1 || n % 1 !== 0) {
    throw new Error("Wrong input base");
  }
}

function validateOutputBase(n: number): void {
  if (n <= 1 || n % 1 !== 0) {
    throw new Error("Wrong output base");
  }
}

function validateInput(arr: number[]): void {
  if (
    arr.length === 0 ||
    arr.every((x) => x === 0) ||
    !arr.every((x) => x >= 0) ||
    /^0.*/.test(arr.join(""))
  ) {
    throw new Error("Input has wrong format");
  }
}
