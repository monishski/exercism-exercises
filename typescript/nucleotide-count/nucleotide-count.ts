type Nucleotide = "A" | "C" | "G" | "T";

type Counter = {
  [K in Nucleotide]: number;
};

class NucleotideCount {
  static nucleotideCounts(dna: string): Counter {
    if (dna.match(/[^ACGT]+/)) {
      throw new Error("Invalid nucleotide in strand");
    }
    let count: Counter = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 }
    for(let i = 0; i < dna.length; i++) { 
      count[dna[i] as Nucleotide]++;
    }
    return count
  }
}

export default NucleotideCount
