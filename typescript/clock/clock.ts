export default class Clock {
  private totalMinutes: number;
  
  constructor(private hour: number = 0, private minute: number = 0) {
    this.totalMinutes = this.hour * 60 + this.minute
  }

  public toString(): string {
    const h = Math.floor(this.totalMinutes / 60) % 24 
    const m = Math.floor(this.totalMinutes % 60) 
    const _hour: number = h < 0 ? 24 + h % 24 : h % 24
    const _minute: number = m < 0 ? 60 + m : m
    return `${this.digitize(_hour)}:${this.digitize(_minute)}`
  }

  private digitize(x: number): string {
    return x.toString().padStart(2, '0')
  } 

  public plus(minutes: number): string {
    this.totalMinutes += minutes
    return this.toString()
  }

  public minus(minutes: number): string {
    this.totalMinutes -= minutes
    return this.toString()
  }

  public equals(clock: Clock): boolean {
    return this.toString() === clock.toString()
  }


}