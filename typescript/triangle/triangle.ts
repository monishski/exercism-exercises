type TypeOfTriangle = "equilateral" | "isosceles" | "scalene";

export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  public kind(): TypeOfTriangle {
    const [x, y, z] = this.sides

    if (!(this.sides.every(e => e > 0))) {
      throw new Error();
    }
    if (x + y < z || z + x < y || y + z < x) { //apparently this is equivalent to 2 * Math.max(...this.sides) >= x + y + z
      throw new Error();
    }

    if (x === y && y === z) return 'equilateral'; 
    else if (x === y || y === z || x === z) return 'isosceles';
    else return 'scalene';
  }

}

export class _Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides.sort((a, b) => a - b)
  }

  public kind(): TypeOfTriangle {
    const [x, y, z] = this.sides
    if (x <= 0 || x + y < z) throw new Error();
    if (x === z) return 'equilateral';
    if (x === y || y === z) return 'isosceles';
    else return 'scalene';
  }


}