// https://stackoverflow.com/questions/51672641/how-to-convert-0x80-in-a-7-bit-variable-length-integers
export default class {

  public static encode(n: number[]): number[] {
    let result: number[] = []
    for (let i = 0; i < n.length; i++) {
      let _result: number[] = [] //store byte splits for n[i] here using unshift
      let temp = n[i]
      if (!temp) _result.unshift(0); 
      let power = 1
      let val = 0
      let counter = 0
      while (temp) { //i.e. !== 0
        val += power * (temp & 1)
        power *= 2
        temp >>>= 1 //>>> is the unsigned right shift operator
        counter++
        if (counter % 7 === 0 || temp === 0) { //every 7th bit, stop reset the process
          _result.unshift(counter > 7 ? 128 + val : val) //need to add 1 as msb
          power = 1
          val = 0
        }
      }
      result.push(..._result)
    }
    return result
  }

  public static decode(n: number[]): number[] { //for last byte, msb in byte is 0, it marks the end
    if ((n[n.length - 1] & 128) === 128) throw new Error("Incomplete sequence") //this isnt complete assumes the last entry must have msb as 0
    let result: number[] = []
    for (let i = n.length - 1; i >= 0; i--) {
      let val = n[i] //the last byte doesnt need adjustments
      let power = 2 ** 7 //start the progress of readjustment for 2nd to last byte onwards (they will have msb as 1)
      while (n[--i] & 128) { //i.e. !== 0
        let temp = n[i] - 128 //remove the msb which is 1
        if (!temp) { power *= 2 ** 7 } //if 10000000 (i.e 0) then move to the next byte
        while (temp) { //read byte
          val += power * (temp & 1)
          power *= 2
          temp >>>= 1
        }
      }
      if ((n[i] & 128) === 0) i++; //n[--i] goes 1 step too far down, so index up again
      result.unshift(val)
    }
    return result
  }
}