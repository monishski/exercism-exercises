class Gigasecond {

  constructor(private time: Date) {}

  public date(): Date {
    return new Date(this.time.getTime() + 10 ** 12); //1 giga seconds in ms 
  }
}

export default Gigasecond
