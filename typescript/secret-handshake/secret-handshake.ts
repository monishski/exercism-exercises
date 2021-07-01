export class _HandShake {

  constructor(private code: number) {}

  public commands(): string[] {
    const commandStack: string[] = ['jump', 'close your eyes', 'double blink', 'wink']
    const binary: string = this.code.toString(2)
    const commands: string[] = [];

    for (let i = binary.length - 1; i >= 0; i--) {
      let command: string | undefined = commandStack.pop() 
      if (!!command && +binary[i]) {
        commands.push(command!)
      }
      if (binary.length === 5 && i === 0) {
        commands.reverse()
      }
    }  
    return commands;
  }

}

//There is a much nicer solution to this problem
//It uses bit operations very smartly!
export default class HandShake {
  private static readonly commands = ['wink', 'double blink', 'close your eyes', 'jump']

  constructor(private code: number = 0) {}

  public commands(): string[] {
    const sequence = HandShake.commands.filter((_: string, index: number) => this.code & 2 ** index)
    return this.code & 16 ? sequence.reverse() : sequence
  }
}