type Position = readonly [number, number];

type Positions = {
  white: Position;
  black: Position;
};

const NUM_ROWS = 8;
const NUM_COLS = 8;

export class QueenAttack {
  public readonly black: Position;
  public readonly white: Position;

  constructor({ white, black }: Partial<Positions> = {}) {
    this.white = white || [7, 3];
    this.black = black || [0, 3];

    this.validateIsDifferentSpace(this.white, this.black);
    this.validateBoardPosition(this.white);
    this.validateBoardPosition(this.black);
  }

  toString(): string {
    let [whiteRow, whiteCol] = this.white;
    let [blackRow, blackCol] = this.black;

    let board: string[] = [];
    for (let row = 0; row < NUM_ROWS; row++) {
      let temp = "";
      for (let col = 0; col < NUM_COLS; col++) {
        if (row === whiteRow && col === whiteCol) temp += "W ";
        else if (row === blackRow && col === blackCol) temp += "B ";
        else temp += "_ ";
      }
      board.push(temp.trim());
    }

    return board.join("\n");
  }

  get canAttack(): boolean {
    let [whiteRow, whiteCol] = this.white;
    let [blackRow, blackCol] = this.black;

    //vertical and horizontal captures
    if (whiteRow === blackRow || whiteCol === blackCol) return true;

    //diagonals captures
    //top-left to bottom-right equation (basically north-west/south-east) => y = x + column - row
    if (whiteCol === whiteRow + blackCol - blackRow) return true;
    //bottom-left to top-right equation (basically north-east/south-west) => y = -x + column + row
    if (whiteCol === -1 * whiteRow + blackCol + blackRow) return true;

    return false;
  }

  validateBoardPosition(position: Position): void {
    let [row, col] = position;
    if (row < 0 || row > NUM_ROWS - 1 || col < 0 || col > NUM_COLS - 1) {
      throw new Error("Queen must be placed on the board");
    }
  }

  validateIsDifferentSpace(white: Position, black: Position): void {
    let [whiteRow, whiteCol] = white;
    let [blackRow, blackCol] = black;
    if (whiteRow === blackRow && whiteCol === blackCol) {
      throw new Error("Queens cannot share the same space");
    }
  }
}
