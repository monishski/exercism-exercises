class Isogram {
  static isIsogram(str: string): boolean {
    let _str = str.toLowerCase().replace(/[^a-zA-Z]/g, '')
    return new Set(_str).size === _str.length
  }
}

export default Isogram
