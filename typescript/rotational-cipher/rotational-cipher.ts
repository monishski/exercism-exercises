export function rotate(text: string, key: number): string {
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = alphabetLowerCase.toUpperCase();
  const n = alphabetLowerCase.length;
  let cipher = "";
  for (let i = 0; i < text.length; i++) {
    if (/[a-z]/.test(text[i])) {
      let index = alphabetLowerCase.indexOf(text[i]);
      cipher += alphabetLowerCase[(index + key) % n];
    } else if (/[A-Z]/.test(text[i])) {
      let index = alphabetUpperCase.indexOf(text[i]);
      cipher += alphabetUpperCase[(index + key) % n];
    } else {
      cipher += text[i];
    }
  }
  return cipher;
}
