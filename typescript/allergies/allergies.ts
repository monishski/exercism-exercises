export class _Allergies {
  private _list: string[]
  private allergies: string[] =  ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']

  constructor(private score: number) {
    this._list = []

    let index = 0
    let n = this.score
    while (n >= 1) {
      index++
      if (n & 1) {
        if (this.allergies[index-1]) { //we are not worrying about values > 128
          this._list.push(this.allergies[index-1])
        }
      }
      n >>= 1
    }
  }

  public allergicTo(allergen: string): boolean {
    return this._list.includes(allergen)
  }
  
  public list(): string[] {
    return this._list
  }  
}

//There is another solution which is type heavy:
const ALLERGIES = {
  eggs: 1,
	peanuts: 2,
	shellfish: 4,
	strawberries: 8,
	tomatoes: 16,
	chocolate: 32,
	pollen: 64,
	cats: 128
} as const

type AllergiesType = keyof typeof ALLERGIES

export default class Allergies {
  private allergies: Array<AllergiesType>

  constructor(private score: number) {
    this.allergies = Object.entries(ALLERGIES).reduce((array, [allergy, value]) => {
      if ((value & score) !== 0) {
        array.push(allergy as AllergiesType)
      }
      return array
    }, [] as Array<AllergiesType>)
  }

  public allergicTo(allergy: AllergiesType): boolean {
    return this.allergies.includes(allergy)
  }
  
  public list(): string[] {
    return this.allergies
  }  

}