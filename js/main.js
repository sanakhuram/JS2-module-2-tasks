import { ipsum, dolor } from "./script.js";

/*lorem ipsum dolor sit amet consectetur adipiscing elit 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua */

/**
 * Rename, move and add JSDoc to this function
 */
function lorem(a, b) {
  return a + b;
}

/**
 * This function takes in text and two words, and returns the text with the instances of the word replaced with the other word
 */
function change(t, x, y) {}

/**
 * This function takes in a text and a word, and returns true of the word is in the text, and false if it is not
 */
function find(x, y) {}

/**
 * This function takes in two arrays and returns a single array with all the elements of the two arrays
 */
function mergearrays() {}
/**
 * This function takes in two objects and returns a single object with all the properties of the two objects
 */
function mergeobjects() {}

//Examples to test the functions
console.log(lorem(1, 2)); // 3

console.log(ipsum({ firstName: "John", lastName: "Doe" })); // Hello, John Doe

console.log(dolor([1, 2, 3, 4, 5, 9, 7, 6])); // 9

console.log(change("Hello, world", "world", "mars")); // Hello, mars

console.log(find("Hello, world", "world")); // true

console.log(mergearrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

console.log(
  mergeobjects(
    { firstName: "John", lastName: "Doe" },
    { age: 33, email: "john@doe.com" }
  )
);
