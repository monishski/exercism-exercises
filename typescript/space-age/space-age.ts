//There is a beautiful dynamic solution worth noting
interface PlanetOrbitsInterface {
  [key: string]: number
}

interface SpaceAge {
	[key: string]: any
}

const PlanetOrbits: PlanetOrbitsInterface = {
  Earth: 1, 
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
}

class SpaceAge {
  // public seconds: number

  constructor(public seconds: number) {
    // this.seconds = seconds
    for(const planet in PlanetOrbits) {
      this['on'+planet] = () => this.convert(PlanetOrbits[planet])
      //Note this will throw an error with the interface for SpaceAge 
    }
  }

  convert(ratio: number): number {
    return +(this.seconds / 60 / 60 / 24 / (365.25 * ratio)).toFixed(2)
  }

  // onEarth = (): number => +(this.seconds / 60 / 60 / 24 / 365.25).toFixed(2)
  // onMercury = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 0.2408467)).toFixed(2)
  // onVenus = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 0.61519726)).toFixed(2)
  // onMars = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 1.8808158)).toFixed(2)
  // onJupiter = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 11.862615)).toFixed(2)
  // onSaturn = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 29.447498)).toFixed(2)
  // onUranus = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 84.016846)).toFixed(2)
  // onNeptune = (): number => +(this.seconds / 60 / 60 / 24 / (365.25 * 164.79132)).toFixed(2)

}

export default SpaceAge