type openBracket = "(" | "{" | "[";
type closeBracket = ")" | "}" | "]";

const invertBracket: { [key in closeBracket]: openBracket } = {
  ")": "(",
  "}": "{",
  "]": "[",
};

export function isPaired(input: string): boolean {
  const stacksBracket: openBracket[] = [];

  for (let i = 0; i < input.length; i++) {
    let val = input[i];
    if (val === "(" || val === "{" || val === "[") {
      stacksBracket.push(val);
    } else if (
      (val === ")" || val === "}" || val === "]") &&
      invertBracket[val] === stacksBracket[stacksBracket.length - 1]
    ) {
      stacksBracket.pop();
    } else if (
      (val === ")" || val === "}" || val === "]") &&
      invertBracket[val] !== stacksBracket[stacksBracket.length - 1]
    ) {
      return false;
    }
  }

  return stacksBracket.length === 0;
}
