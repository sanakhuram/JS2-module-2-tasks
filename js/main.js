import { generateGreeting , findLargestNumber} from "./script.js";

/**
 * Add two numbers together
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of a and b .
 */
function addNumbers(a, b) {
  return a + b;
}

/**
 * Replaces all instances of a word in a text with another word.
 * @param {string} text - The original text
 * @param {string} targetWord - The word to replace.
 * @param {string} replacementWord - The word to replace with.
 * @returns {string} - The modified text with replacements.
 */
function replaceWord(text, targetWord, replacementWord) {
  return text.replace(new RegExp(targetWord, "g"), replacementWord);
}

/**
 * Checks if a word exists within text.
 * @param {string} text - The text to search within.
 * @param {string} word - The word to search for.
 * @returns {boolean} -  True if the word is found, otherwise false.
 */
function doesContainWord(text, word) {
  return text.includes(word);
}

/**
 * Merges two array into one.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @returns {Array} - A single array containing elements from both input arrays.
 */
function mergeArrays(array1, array2) {
  return[...array1, ...array2]
}
/**
 * Merge two object into one.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object
 * @returns {Object} - A new object containing properties from both object.
 */
function mergeObjects(obj1, obj2) {
  return { ...obj1, obj2 };
}

//Examples to test the functions
console.log(addNumbers(1, 2)); // 3

console.log(generateGreeting({ firstName: "John", lastName: "Doe" })); // Hello, John Doe

console.log(findLargestNumber([1, 2, 3, 4, 5, 9, 7, 6])); // 9

console.log(replaceWord("Hello, world", "world", "mars")); // Hello, mars

console.log(doesContainWord("Hello, world", "world")); // true

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

console.log(
  mergeObjects(
    { firstName: "John", lastName: "Doe" },
    { age: 33, email: "john@doe.com" }
  )
);
