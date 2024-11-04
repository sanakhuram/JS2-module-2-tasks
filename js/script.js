/**
 * Generates a greeting message using an object with first and last name.
 * @param {Object} person - An object with `firstName` and `lastName` properties.
 * @returns {string} A greeting message.
 */
export function generateGreeting(person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

/**
 * Finds and returns the largest number in an array.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} The largest number in the array.
 */
export function findLargestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  return Math.max(...numbers);
}
