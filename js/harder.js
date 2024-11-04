/**
 * Validates if the input string contains at least one lowercase letter, one uppercase letter, and one number.
 * @param {string} input - The string to validate.
 * @returns {boolean} True if the input meets the criteria; otherwise, false.
 */
export function regexFunction(input) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  return regex.test(input);
}
