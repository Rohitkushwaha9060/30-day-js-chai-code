// ! Activity 1: Arithmetic Operators
const num1 = 10;
const num2 = 5;

// Addition
// console.log(num1 + num2);

// Subtraction
// console.log(num1 - num2);

// Multiplication
// console.log(num1 * num2);

// Division
// console.log(num1 / num2);

// Remainder
// console.log(num1 % num2);

// Activity 2: Assignment Operators
let num3 = 10;

// Addition Assignment
num3 += 5;
// console.log(num3);

// Subtraction Assignment
num3 -= 5;
// console.log(num3);

// ! Activity 3: Comparison Operators
const num4 = 10;
const num5 = 5;
// Greater than
// console.log(num4 > num5);

// Less than
// console.log(num4 < num5);

// Greater than or equal to
// console.log(num4 >= num5);

// Less than or equal to
// console.log(num4 <= num5);

//  Equal to
// console.log(num4 === num5);
// console.log(num4 == num5);

// ! Activity 4: Logical Operators
const num6 = 10;
const num7 = 5;
// Logical AND
// if (num6 > num7 && num7 < num4) {
//   console.log("num6 is greater than num7 and num7 is less than num4");
// }

// Logical OR (||)
// if (num6 > num7 || num7 < num4) {
//   console.log("num6 is greater than num7 or num7 is less than num4");
// }

// Logical NOT (!)
// if (!(num6 > num7)) {
//   console.log("num6 is not greater than num7");
// }

// ! Activity 5: Ternary Operator
const num8 = 10;
const num9 = -10;

// check if num8 is positive or negative
// num8 > 0 ? console.log("num8 is positive") : console.log("num8 is negative");

// check if num9 is positive or negative
// num9 > 0 ? console.log("num9 is positive") : console.log("num9 is negative");

// ! Feature Request : 01
function ArithmeticOperators(num1, num2) {
  // Addition
  console.log("Addition");
  console.log(num1 + num2);
  // Subtraction
  console.log("Subtraction");
  console.log(num1 - num2);
  // Multiplication
  console.log("Multiplication");
  console.log(num1 * num2);
  // Division
  console.log("Division");
  console.log(num1 / num2);
  // Remainder
  console.log("Remainder");
  console.log(num1 % num2);
}

// ArithmeticOperators(10, 3);

// ! Feature Request : 02
function compareNumbers(a, b) {
  console.log(`Comparing numbers ${a} and ${b}:`);

  // Comparison operators
  const isEqual = a === b;
  const isNotEqual = a !== b;
  const isGreaterThan = a > b;
  const isLessThan = a < b;
  const isGreaterThanOrEqual = a >= b;
  const isLessThanOrEqual = a <= b;

  // Logical operators
  const andOperation = isGreaterThan && isLessThanOrEqual; // Example: a > b AND a <= b
  const orOperation = isEqual || isGreaterThan; // Example: a === b OR a > b
  const notOperation = !isNotEqual; // Example: NOT (a !== b)

  // Logging results
  console.log(`a === b: ${isEqual}`);
  console.log(`a !== b: ${isNotEqual}`);
  console.log(`a > b: ${isGreaterThan}`);
  console.log(`a < b: ${isLessThan}`);
  console.log(`a >= b: ${isGreaterThanOrEqual}`);
  console.log(`a <= b: ${isLessThanOrEqual}`);
  console.log(`(a > b) && (a <= b): ${andOperation}`);
  console.log(`(a === b) || (a > b): ${orOperation}`);
  console.log(`!(a !== b): ${notOperation}`);
}

// Test the function with different values
// compareNumbers(5, 3);

// ! Feature Request : 03
function NegativeOrPositiveOrZero(num) {
  if (num > 0) {
    console.log("num is positive");
  } else if (num < 0) {
    console.log("num is negative");
  } else {
    console.log("num is zero");
  }
}

// NegativeOrPositiveOrZero(10);
// NegativeOrPositiveOrZero(-10);
// NegativeOrPositiveOrZero(0);
