const DEFAULT_STUDENTS: Student[] = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
} as const;

type Student = string;
type Plant = typeof PLANT_CODES[keyof typeof PLANT_CODES];
type Plants = Plant[];
type Pots = Plants[];

export class Garden {
  constructor(private diagram: string, private students = DEFAULT_STUDENTS) {}

  public plants(student: Student): Plants {
    let diagram = this.diagram.replace("\n", "");
    let students = this.students.sort();
    let studentIndex = students.indexOf(student);
    if (studentIndex === -1) throw new Error("Student doesn't exists");

    let startIndex = 2 * studentIndex;
    let plants: Plants = [];
    for (
      let i = startIndex;
      i < diagram.length;
      i += Math.floor(diagram.length / 2)
    ) {
      for (let j = i; j < i + 2; j++) {
        let code = diagram[j];
        if (code === "G" || code === "V" || code === "R" || code === "C") {
          plants.push(PLANT_CODES[code]);
        }
      }
    }
    return plants;
  }
}
