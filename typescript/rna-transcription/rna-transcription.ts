interface dna2rnaInterface {
  [key: string]: string
}

//Instead of using interfaces you could have defined a type
// type dnaNucleotide = 'G' | 'C' | 'A' | 'T'

const dna2rna: dna2rnaInterface = {
// const dna2rna: {[dnaNucleotide: string]: string} = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}

class Transcriptor {

  toRna(dna: string): string {
    return dna
      .split("")
      .map((elem: string): string => {
        if (elem in dna2rna) {
          return dna2rna[elem]
        }
        throw new Error('Invalid input DNA.')
        // You could replace the above with
        // dna2rna[elem as dnaNucleotide] || throw new Error('Invalid input DNA.')
      })
      .join("")
  }
}

export default Transcriptor
