export class InvalidInputError extends Error {
  constructor(message?: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]
type Position = { direction: Direction, x: number, y: number }

const CLOCKWISE_ROTATIONS: { [key in Direction]: Direction } = {
  'north': 'east',
  'east': 'south',
  'south': 'west',
  'west': 'north',
}

const ANTICLOCKWISE_ROTATIONS: { [key in Direction]: Direction } = {
  'north': 'west',
  'east': 'north',
  'south': 'east',
  'west': 'south',
}

export class Robot {
  private position: Position

  constructor() {
    this.position = { direction: 'north', x: 0, y: 0 }
  }

  get bearing(): Direction {
    if (this.position.direction !== 'north' 
      && this.position.direction !== 'south' 
      && this.position.direction !== 'east' 
      && this.position.direction !== 'west') {
      throw new InvalidInputError()
    }
    return this.position.direction
  }

  get coordinates(): Coordinates {
    const { x, y } = this.position
    return [x, y]
  }

  // Why is direction type string in the argument, TS type Direction offers type safety already? 
  place(position: { x: number; y: number; direction: string }): void {
    if (position.direction !== 'north' 
      && position.direction !== 'east' 
      && position.direction !== 'south'
      && position.direction !== 'west') {
      throw new InvalidInputError()
    } 
    this.position.direction = position.direction //cant do this.position = position - TS is not smart enough?
    this.position.x = position.x
    this.position.y = position.y
    
  }

  evaluate(instructions: string): void {
    for (const instruction of instructions) {
      if (instruction === 'R') {
        this.position.direction = CLOCKWISE_ROTATIONS[this.position.direction]
      } else if (instruction === 'L') {
        this.position.direction = ANTICLOCKWISE_ROTATIONS[this.position.direction]
      } else if (instruction === 'A') {
        this.move(this.position.direction)
      } else {
        throw new InvalidInputError();
      }
    }
  }

  private move(direction: Direction) {
    if (direction === 'north') this.position.y++
    else if (direction === 'east') this.position.x++
    else if (direction === 'south') this.position.y--
    else this.position.x--
  }
}
