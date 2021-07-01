class _ReverseString {
  static reverse(text: string): string {
    let str: string[] = text.split('')
    for(let i = 0; i < Math.floor(text.length / 2); i++) {
      [str[i], str[text.length-i-1]] = [str[text.length-i-1], str[i]];
    }
    return str.join('')
  }
  //return [...s].reverse().join('')
}

class ReverseString { //O(n) solution!
  static reverse(s: string) : string {
    let r = "";
    for (let i = s.length - 1; i >= 0; i--) {
      r += s[i];
    }
    return r;
  }
}

export default ReverseString
