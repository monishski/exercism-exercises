type Predicate<T> = (e: T) => boolean;

export function keep<T>(collection: T[], predicate: Predicate<T>) {
  return strain(collection, predicate, "keep");
}

export function discard<T>(collection: T[], predicate: Predicate<T>) {
  return strain(collection, predicate, "discard");
}

type strainTypes = "keep" | "discard";
function strain<T>(
  collection: T[],
  predicate: Predicate<T>,
  type: strainTypes
) {
  let res: T[] = [];
  for (let i = 0; i < collection.length; i++) {
    let bool = predicate(collection[i]);
    if ((type === "keep" && bool) || (type === "discard" && !bool)) {
      res.push(collection[i]);
    }
  }
  return res;
}
