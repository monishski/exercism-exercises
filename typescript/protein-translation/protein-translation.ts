const codon2protein: { [key: string]: string } = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
}

class ProteinTranslation {
  static proteins(rna: string): string[] {
    let index = 0
    let proteins: string[] = []
    while (index < rna.length) {
      const codon: string = rna[index] + rna[index+1] + rna[index+2]
      if (codon2protein[codon] === 'STOP') break;
      else proteins.push(codon2protein[codon])
      index += 3
    }
    return proteins
  }
}

export default ProteinTranslation
