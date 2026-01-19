/**
 * Utilities for checking number parity (even/odd).
 */

/**
 * PUBLIC_INTERFACE
 * Determine whether a number is even.
 *
 * @param {number} value - The number to check.
 * @returns {boolean} True if `value` is an even integer, otherwise false.
 *
 * @example
 * // Import and use:
 * // import { isEven } from './utils/numberParity';
 * // console.log(isEven(4)); // true
 * // console.log(isEven(7)); // false
 */
export function isEven(value) {
  // Guard against non-number inputs and NaN.
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return false;
  }

  // "Even" is defined for integers; non-integers are considered not even.
  if (!Number.isInteger(value)) {
    return false;
  }

  return value % 2 === 0;
}
