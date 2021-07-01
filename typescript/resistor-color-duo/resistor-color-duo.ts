interface ResisterColorMapInterface {
  [key: string]: number
}

export class ResistorColor {
  private colors: string[]
  private colorMap: ResisterColorMapInterface
  // Based on the most popular solution
  // private static colorMap = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }
    this.colors = colors
    this.colorMap = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
    }

  }

  value = (): number => {
    const _color: number = parseInt(this.colors
      .map(e => this.colorMap[e])
      .reduce((acc, curr) => acc + curr.toString(), '').slice(0, 2))
    // Based on the most popular solution
    // const _color = Number(this.colors.slice(0, 2)
    //   .map((color: string) => ResistorColor.colorMap.indexOf(color))
    //   .join(''))
    return _color
  }
}
