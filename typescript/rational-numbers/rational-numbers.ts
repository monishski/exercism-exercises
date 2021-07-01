interface RationalInterface {
  [key: string]: number
}

class _Rational {
  public readonly rational: RationalInterface

  constructor(a: number, b: number) {
    this.rational = {
      'numerator': a,
      'denominator': b
    }
  }

  public add(rational: _Rational): _Rational {
    const [a1, b1, a2, b2] = this.extract_variables(rational['rational'])
    const numerator: number = a1 * b2 + a2 * b1;
    const denominator: number = b1 * b2;
    return this.refactor(numerator, denominator)
  }

  public sub(rational: _Rational): _Rational {
    const [a1, b1, a2, b2] = this.extract_variables(rational['rational'])
    const numerator: number = a1 * b2 - a2 * b1;
    const denominator: number = b1 * b2;
    return this.refactor(numerator, denominator)
  }

  public mul(rational: _Rational): _Rational {
    const [a1, b1, a2, b2] = this.extract_variables(rational['rational'])
    const numerator: number = a1 * a2;
    const denominator: number = b1 * b2;
    return this.refactor(numerator, denominator)
  }

  public div(rational: _Rational): _Rational {
    const [a1, b1, a2, b2] = this.extract_variables(rational['rational'])
    const numerator: number = a1 * b2;
    const denominator: number = a2 * b1;
    return this.refactor(numerator, denominator)
  }

  public abs(): _Rational {
    const [a1, b1] = [this.rational.numerator, this.rational.denominator]
    return new _Rational(Math.abs(a1), Math.abs(b1))
  }

  public exprational(value: number): _Rational {
    const [a1, b1] = [this.rational.numerator, this.rational.denominator]
    return value > 0 ? new _Rational(a1 ** value, b1 ** value) : new _Rational(b1 ** -value, a1 ** -value)  
  }

  public expreal(value: number): number {
    const [a1, b1] = [this.rational.numerator, this.rational.denominator] 
    return +Number.parseFloat(value ** (a1 / b1) + '').toPrecision(15) //hack?
  }

  public reduce(): _Rational {
    const [a1, b1] = [this.rational.numerator, this.rational.denominator] 
    return this.refactor(a1, b1)
  }

  private extract_variables(rational: RationalInterface): number[] {
    const [a1, b1] = [this.rational.numerator, this.rational.denominator]
    const [a2, b2] = [rational.numerator, rational.denominator]
    return [a1, b1, a2, b2]
  }

  private refactor(numerator: number, denominator: number): _Rational {
    [numerator, denominator] = this.fix_sign(numerator, denominator)
    const gcd: number = this.gcd(Math.abs(numerator), Math.abs(denominator))
    return new _Rational(numerator / gcd, denominator / gcd)
  }

  private gcd(a: number, b: number): number {
    if (!b) return a;
    return this.gcd(b, a % b);
  }

  private fix_sign(numerator: number, denominator: number): number[] {
    if (denominator < 0) { //if denominator is neg, then change the sign of then numerator and denominator
      numerator = -1 * numerator
      denominator = -1 * denominator
    }
    return [numerator, denominator]
  } 
}

//What I've done works, but it is overkill! The trick is to refactor right at in the constructor
export default class Rational {

  constructor(public num: number, public den: number) {
    const divisor = this.gcd(num, den);
    const _num = num / divisor;
    const _den = den / divisor;
    [this.num, this.den] = _den < 0 ? [-_num, -_den] : [_num, _den]
  }

  private gcd(a: number, b: number): number {
    if (!b) return a;
    return this.gcd(b, a % b);
  }

  add(that: Rational): Rational {
    return new Rational(this.num * that.den + this.den * that.num, this.den * that.den);
  }

  sub(that: Rational): Rational {
    return new Rational(this.num * that.den - this.den * that.num, this.den * that.den);
  }

  mul(that: Rational): Rational {
    return new Rational(this.num * that.num, this.den * that.den);
  }

  div(that: Rational): Rational {
    return new Rational(this.num * that.den, this.den * that.num);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.num), Math.abs(this.den));
  }

  exprational(x: number): Rational {
    return x >= 0
      ? new Rational(this.num ** x, this.den ** x)
      : new Rational(this.den ** -x, this.num ** -x); //when x < 0, we need to multiply the exponent by -1 but reverse the order
  }

  expreal(x: number): number { // x ^ (a / b)
    // See https://en.wikipedia.org/wiki/Nth_root#Logarithmic_calculation
    return 2 ** (Math.log2(x ** this.num) / this.den); // Using logarithmic calculation gets us the precision necessary to pass
  }

  reduce(): Rational {
    return this;
  }

}