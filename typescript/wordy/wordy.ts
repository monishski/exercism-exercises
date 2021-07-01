export class ArgumentError extends Error {
  constructor() {
    super("Make sure you dont have unsupported operations, non-math questions & invalid syntax");
    this.name = "ArgumentError";
  }
}

interface OperationsMap {
  [key: string]: (a: number, b: number) => number
}

export class WordProblem {
  private question: string;
  private operationsMap: OperationsMap;

  constructor(input: string) {
    this.question = input
    this.operationsMap = {
      "plus": this.plus,
      "minus": this.minus,
      "multiplied by": this.multiplied_by,
      "divided by": this.divided_by
    }
  }

  public answer(): number {
    //Worth remembering what the .bind function does... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    const isValid = this.question.match(/-?\d+\splus\s-?\d+|-?\d+\sminus\s-?\d+|-?\d+\sdivided by\s-?\d+|-?\d+\smultiplied by\s-?\d+/g) //operation must have a number to either side
    if (!isValid) {
      throw new ArgumentError()
    }
    const variables: number[] = this.question.match(/-?\d+/g)?.map(Number) || [] //map(Number) is short for map(e => Number(e))
    const operations: string[] = this.question.match(/plus|minus|divided by|multiplied by/g) || []
    let result = variables![0];
    for (let i = 1; i < variables!.length; i++) {
      result = this.operationsMap[operations![i-1]](result, variables![i])
    }
    return result
  }

  private plus = (a: number, b: number): number => a + b
  private minus = (a: number, b: number): number => a - b
  private multiplied_by = (a: number, b: number): number => a * b
  private divided_by = (a: number, b: number): number => a / b


}