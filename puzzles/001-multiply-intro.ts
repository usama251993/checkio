/**
 * ### Multiply Intro
 *
 * This is an intro mission, the purpose of which
 * is to explain how to solve missions on CheckiO
 * and how to get the most out of solving them. As
 * you solve missions more stations become
 * available to you, containing more complex
 * missions.
 *
 * ---
 *
 * This mission is the easiest one. Write a
 * function that will receive 2 numbers as input
 * and it should return the multiplication of these
 * 2 numbers.
 *
 * ---
 *
 * **Input**: Two arguments. Both are of type `int`.
 *
 * ---
 *
 * **Output**: `int`.
 *
 *
 * @param a The first number
 * @param b The second number
 * @returns Product of `a` and `b`
 */

function multTwo(a: number, b: number): number {
    return a * b;
}

/**
 * ### Best Solution
 *
 * ```ts
 * function multTwo(a: number, b: number): number {
 *    return a * b;
 * }
 * ```
 *
 * ### Creative Solution
 *
 * ```ts
 * const multTwo = (a, b) => [
 *   ...'🐱'
 *   .repeat(a)
 *   .replace(/./ug,
 *     '🦄'
 *     .repeat(b)
 *   )
 * ].length
 * ```
 */
function solutions() {
    console.log('Refer Documentation of this function');
}
