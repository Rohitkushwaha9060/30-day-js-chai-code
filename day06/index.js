//! Activity : 01 Array Creation And Access

// Task : 01
const myNumArray = [1, 2, 3, 4, 5];

// console.log(myNumArray);

// Task : 02
// console.log(myNumArray[0]);
// console.log(myNumArray[4]);

//! Activity : 02 Array Methods (Basic)

//Task : 03
// myNumArray.push(6);
// console.log(myNumArray);

//Task : 04
// myNumArray.pop();
// console.log(myNumArray);

//Task : 05
// myNumArray.shift();
// console.log(myNumArray);

//Task : 06
// myNumArray.unshift(0);
// console.log(myNumArray);

//! Activity : 03 Array Methods (intermediate)

//Task : 07
const myNewNum = [];

myNumArray.map((num) => {
  myNewNum.push(num * 2);
});

// console.log(myNewNum);

// Task : 08
const myNewNum2 = [];

myNumArray.filter((num) => {
  if (num % 2 === 0) {
    myNewNum2.push(num);
  }
});

// console.log(myNewNum2);

// Task : 09
const mySum = myNumArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// console.log(mySum);

// ! Activity : 04 Array Iteration

//Task : 10
// for (let i = 0; i < myNumArray.length; i++) {
//   console.log(myNumArray[i]);
// }

// Task : 11
// myNumArray.forEach((num) => {
//   console.log(num);
// });

// ! Activity : 05 Multi-Dimensional Arrays

//Task : 12
const myMatrix = [];

for (let i = 0; i < 3; i++) {
  myMatrix.push([]);
  for (let j = 0; j < 3; j++) {
    myMatrix[i].push(j);
  }
}

// console.log(myMatrix);

// Task : 13

// console.log(myMatrix[0][0]);
// console.log(myMatrix[1][2]);
