export function _twoFer(name?: string): string {
  return `One for ${name ? name : 'you'}, one for me.`;
}

//You can simplify this dramatically
export function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me.`;
}

