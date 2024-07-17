// ! Activity 01 : Function Declaration

// Task:01
function EvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// EvenOrOdd(5);

// Task : 02
function SquareOfNumber(number) {
  console.log(number * number);
}

// SquareOfNumber(10);

// ! Activity 02 : Function Expression

// Task : 03

function MaxNumber(number1, number2) {
  console.log(number1 > number2 ? number1 : number2);
}

// MaxNumber(10, 20);

// Task : 04
function Concatenate(string1, string2) {
  console.log(string1 + string2);
}

// Concatenate("Hello", " World");

// ! Activity 03 : Arrow Function

// Task : 05
const add = (a, b) => console.log(a + b);

// add(10, 20);

// Task : 06
const Contains = (string, subString) => console.log(string.includes(subString));

// Contains("Hey Aman", "a");

//! Activity 04 : Function Parameters and Default Values

// Task : 07
const Multiply = (number1, number2 = 2) => {
  console.log(number1 * number2);
};

// Multiply(10);
// Multiply(10, 20);

// Task : 08

function Greet(name, age = 20) {
  console.log(`Hello ${name} your age is ${age}`);
}

// Greet("Aman", 18);
// Greet("Ram");

//! Activity 05 : Higher Order Functions

// Task : 09
function repeat(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

// repeat(() => console.log("Hello"), 3);

// Task : 10

const Add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function result(func1, func2, value) {
  const res = func1(value, 10);
  console.log(func2(res, 3));
}

// result(Add, multiply, 10);
