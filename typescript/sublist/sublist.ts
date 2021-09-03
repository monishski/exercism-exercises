type sublistType = 'sublist' | 'superlist' | 'equal' | 'unequal'

export class List {
  public elements: number[]

  constructor(...elements: number[]) {
    this.elements = elements
  }
  
  compare(list: List): sublistType {
    if (this.isEqual(this.elements, list.elements)) return 'equal';
    else if (this.isSubset(this.elements, list.elements)) return 'sublist';
    else if (this.isSubset(list.elements, this.elements)) return 'superlist';
    else return 'unequal';

    // let n = this.elements.length
    // let m = list.elements.length
    
    // if (n === 0 && m === 0) return 'equal';
    // else if (n === 0 && m > 0) return 'sublist';
    // else if (n > 0 && m === 0) return 'superlist';
    // else {
    //   let i = 0, j = 0
    //   let matches = 0

    //   while (i < n && j < m) {

    //     // if (this.elements.indexOf(list.elements[j]) === -1
    //     //   || list.elements.indexOf(this.elements[i]) === -1) {
    //     //   return 'unequal';
    //     // }

    //     if (this.elements[i] > list.elements[i]) j++;
    //     else if (this.elements[i] < list.elements[i]) i++;
    //     else matches++; i++; j++;
    //   }

    //   if (i === n && j === m && n === m) return 'equal';
    //   else if (i === n) return 'sublist';
    //   else if (j === m) return 'superlist';
    //   else return 'unequal';
    // }
  
  }

  private isSubset(A: number[], B: number[]): boolean {
    return A.every(val => B.includes(val) && A.filter(el => el === val).length <= B.filter(el => el === val).length)
  }

  private isEqual(a: number[], b: number[]): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}
