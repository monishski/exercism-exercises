class Bob {
  _hey(phrase: string) {
    if (/[A-Z]/.test(phrase) 
      && phrase === phrase.toUpperCase()
      && phrase.trim()[phrase.trim().length-1] === '?') {
        return "Calm down, I know what I'm doing!"
    } else if (/[A-Z]/.test(phrase) 
      && phrase === phrase.toUpperCase()) {
      return 'Whoa, chill out!'
    } else if (phrase.trim()[phrase.trim().length-1] === '?') {
      return 'Sure.'
    } else if (phrase.replace(/(\r\n|\n|\r| |\t)/g, '') === '') {
      return 'Fine. Be that way!'
    } else {
      return 'Whatever.'
    }
  }

  hey(phrase: string): string {
    if (Bob.hearsNothing(phrase)) {
      return 'Fine. Be that way!'
    } else if (Bob.hearsYell(phrase) && Bob.hearsQuestion(phrase)) {
      return "Calm down, I know what I'm doing!"
    } else if (Bob.hearsYell(phrase)) {
      return 'Whoa, chill out!'
    } else if (Bob.hearsQuestion(phrase)) {
      return "Sure."
    } else {
      return 'Whatever.'
    }
  }

  protected static hearsQuestion(phrase: string): boolean {
    return phrase.trim().endsWith('?')
  }

  protected static hearsYell(phrase: string): boolean {
    return /[A-Z]/.test(phrase) && phrase === phrase.toUpperCase()
  }

  protected static hearsNothing(phrase: string): boolean {
    return phrase.replace(/(\r\n|\n|\r| |\t)/g, '') === ''
  }

}

export default Bob
