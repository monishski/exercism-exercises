//Basic rules
//Num. of pins = 10, you have 10 frames (each composing of 1 or 2 throws (obv. if you get strike = one frame))
//Spare: 1st + 2nd throw = 10 => score from next throw (and hence next frame) added to that frame
//Strike: 1st throw = 10 => score from next 2 throws added to that frame

//See comments in tests (logic below is overshaddowed by error handling)

export default class {

  constructor(private rolls: number[]) {}

  score(): number {
    let rolls = this.rolls

    if (rolls.length === 0) {
      throw new Error('Score cannot be taken until the end of the game')
    }

    let frameIndex = 1
    let nRolls = 0 //increments only when an event happens
    let i = 0
    let score = 0
    
    while (frameIndex <= 10) { //the 10th frame will the handled separately
      let roll = rolls[i] 
      if (roll < 0 || roll > 10) {
        throw new Error('Pins must have a value from 0 to 10')
      }

      let frame = roll === 10 ? roll : roll + rolls[i + 1]

      if (frame > 10) {
        throw new Error('Pin count exceeds pins on the lane')
      } else if (frame < 10) { //open frame
        score += frame
        i += 2
        nRolls++
      } else if (roll === 10) { //strike
        if (frameIndex === 10 && rolls[i + 1] !== 10 && rolls[i + 1] + rolls[i + 2] > 10) { //two bonus rolls after a strike in the last frame can not score more than 10 points
          throw new Error('Pin count exceeds pins on the lane')
        }
        if (frameIndex === 10 
          && ((rolls[i + 1] === 10 && rolls[i + 2] === undefined)
            || (rolls[i + 1] === undefined && rolls[i + 2] === undefined))) {
          throw new Error('Score cannot be taken until the end of the game')
        }
        score += frame + rolls[i + 1] + rolls[i + 2] //note we must add back roll[i+1] since frame = roll[i] for this case
        i++;
        nRolls++
      } else if (frame === 10) { //spare 
        if (frameIndex === 10 && rolls[i + 2] === undefined) {
          throw new Error('Score cannot be taken until the end of the game')
        }
        score += frame + rolls[i + 2]
        i+=2 
        nRolls++
      } 
      frameIndex++
    }

    if (nRolls !== 10) {
      throw new Error('Score cannot be taken until the end of the game')
    }

    if (rolls.length > 20 && score === 0) {
      throw new Error('Should not be able to roll after game is over')
    }

    return score
  }
}