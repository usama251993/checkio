/**
 * # Max Digit
 *
 * - Difficulty: Elementary
 *
 * ## Description
 * You have a number and you need to determine which digit in this
 * number is the biggest.
 * 
 * ## Input
 * A positive `int`.
 *
 * ## Output
 * An `int` (0-9).
 * 
 * ## Example
 * ```ts
 * maxDigit(0) == 0;
 * maxDigit(52) == 5;
 * maxDigit(634) == 6;
 * maxDigit(1) == 1;
 * maxDigit(10000) == 1;
 * ```
 *
 * @param {number} value
 * @return {*}  {number}
 */
function maxDigit(value: number): number {
  return Math.max(...`${value}`.split('').map(_ => +_));
}

export { maxDigit as my };
