// ! Activity 1:  If - else Statements
function NegativeOrPositiveOrZero(num) {
  if (num > 0) {
    console.log("num is positive");
  } else if (num < 0) {
    console.log("num is negative");
  } else {
    console.log("num is zero");
  }
}

// NegativeOrPositiveOrZero(0);

function AdultOrChild(age) {
  if (age >= 18) {
    console.log("Eligible for vote ");
  } else if (age === 0) {
    console.log("invalid age");
  } else {
    console.log("Not eligible for vote");
  }
}

// AdultOrChild(15);

// ! Activity 2: Nested If - else Statements
function largest(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is largest number`);
    } else {
      console.log(`${num3} is largest number`);
    }
  } else if (num2 > num3) {
    console.log(`${num2} is largest number`);
  } else {
    console.log(`${num3} is largest number`);
  }
}

// largest(14, 16, 11);

// ! Activity 3: Switch Statements
const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day");
}

const marks = 50;

switch (true) {
  case marks >= 90:
    console.log(`Your ${marks} and you got Grade A`);
    break;
  case marks >= 80:
    console.log(`Your ${marks} and you got Grade B`);
    break;
  case marks >= 70:
    console.log(`Your ${marks} and you got Grade C`);
    break;
  case marks >= 60:
    console.log(`Your ${marks} and you got Grade D`);
    break;
  case marks <= 59:
    console.log(`Your ${marks} and you got Grade F`);
    break;
  default:
    console.log("Invalid marks");
}

// ! Activity 4: Conditional (ternary) Operator

let num = 13;

num % 2 === 0 ? console.log("num is even") : console.log("num is odd");

// ! Activity 5: Combining Conditions

const year = 2020;

(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log("Leap year")
  : console.log("Not a leap year");
