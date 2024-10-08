/**
 * Finds the element in an array that has the maximum value when applying
 * the `getValue` function to each element.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} items The array of elements to search.
 * @param {(element: T) => number} getValue A function that selects a numeric value from each element.
 * @returns {T | undefined} The element with the maximum value as determined by the `getValue` function.
 * @example
 * maxBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a); // Returns: { a: 3 }
 * maxBy([], x => x.a); // Returns: undefined
 */
export function maxBy<T>(items: readonly [T, ...T[]], getValue: (element: T) => number): T;
export function maxBy<T>(items: readonly T[], getValue: (element: T) => number): T | undefined;
export function maxBy<T>(items: readonly T[], getValue: (element: T) => number): T {
  let maxElement = items[0];
  let max = -Infinity;

  for (const element of items) {
    const value = getValue(element);
    if (value > max) {
      max = value;
      maxElement = element;
    }
  }

  return maxElement;
}
