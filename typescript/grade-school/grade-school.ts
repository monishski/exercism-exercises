type Roster = Map<string, string[]>

export class _GradeSchool {
  private roster: Roster

  constructor() {
    this.roster = new Map()
  }

  addStudent(name: string, grade: number): void {
    //Add student to provided grade
    const list = this.roster.get(grade.toString()) || []
    list.push(name)
    list.sort()
    this.roster.set(grade.toString(), list)

    //Remove student from any old grades (i.e There is another roster other than the one provided (grade) where name exists)
    this.roster.forEach((val: string[], key: string) => {
      if (key !== grade.toString() && val.indexOf(name) !== -1) { 
        val.splice(val.indexOf(name), 1) 
        this.roster.set(key, val)
      }
    })
  }

  studentRoster(): Roster {
    //https://stackoverflow.com/questions/30626070/shallow-clone-a-map-or-set
    return new Map(JSON.parse(JSON.stringify([...this.roster]))) //this how you copy a existing Map
  }

  studentsInGrade(grade: number): string[]   {
    return [...(this.roster.get(grade.toString()) || [])] //Note the destructuring of not allowing others to meddle with
  }

}

//Most other solutions took a reversed approach, that is to have a the names as the keys and the values as the grades...
export default class GradeSchool {
  //private readonly roster: Map<string, number> = new Map<string, number>()
  private roster: Map<string, number>

  constructor() {
    this.roster = new Map()
  }

  addStudent(name: string, grade: number): void {
    this.roster.set(name, grade)
  }

  //Basically, this is transforming the existing map to the desired output
  studentRoster(): Map<string, string[]> { 
    let _roster: Map<string, string[]> = new Map()

    this.roster.forEach((grade: number, name: string) => {
      _roster.get(grade.toString())?.push(name) ?? _roster.set(grade.toString(), [name])
    })
    
    _roster.forEach((students: string[], _) => { students.sort() }) //we dont want to students.sort()
    return _roster
  }

  studentsInGrade(grade: number): string[] {
    return this.studentRoster().get(grade.toString()) || []
  }
 


}
