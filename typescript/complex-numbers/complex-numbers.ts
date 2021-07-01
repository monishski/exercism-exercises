export default class ComplexNumber {

  constructor(public real: number, public imag: number) {}
  
  public add(complex: ComplexNumber): ComplexNumber {
    let real = this.real + complex.real
    let imag = this.imag + complex.imag
    return new ComplexNumber(real, imag)
  }

  public sub(complex: ComplexNumber): ComplexNumber {
    let real = this.real - complex.real
    let imag = this.imag - complex.imag
    return new ComplexNumber(real, imag)
  }
  
  public mul(complex: ComplexNumber): ComplexNumber {
    let real = (this.real * complex.real) - (this.imag * complex.imag)
    let imag = (this.real * complex.imag) + (this.imag * complex.real)
    return new ComplexNumber(real, imag)
  }

  
  public div(complex: ComplexNumber): ComplexNumber {
    let denominator = complex.real ** 2 + complex.imag ** 2
    let real = ((this.real * complex.real) + (this.imag * complex.imag)) / denominator
    let imag = ((this.imag * complex.real) - (this.real * complex.imag)) / denominator
    return new ComplexNumber(real, imag)
  }

  get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2)
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.real, !this.imag ? 0 : -1 * this.imag) //a bit weird - JEST is expecting 0 but we were sending -0 ??
  }

  get exp(): ComplexNumber {
    let real = Math.E ** this.real * Math.cos(this.imag)
    let imag = Math.E ** this.real * Math.sin(this.imag)
    return new ComplexNumber(real, imag)
  }

}