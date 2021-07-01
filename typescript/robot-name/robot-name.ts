const store: Set<string> = new Set()

export default class Robot { //Well done! This was spot on and even possibly better than the most starred solution
  private _name: string

  constructor() {
    this._name = this.createName()
  }

  private createName(): string {
    let result: string = this.generateRandomName()
    while (store.has(result)) {
      result = this.generateRandomName()
    } 
    store.add(result)
    return result
  }

  private generateRandomName(): string {
    let result: string = ""
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < 5; i++) {
      if (i < 2) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      } else {
        result += Math.floor(Math.random() * 10).toString()
      }
    }
    return result
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    this._name = this.createName()
  }

  public static releaseNames(): void {
    store.clear()
  }
}
