// ! Activity : 01 Object Creation and Access

// Task : 01
const book = {
  title: "The Code",
  author: "Rajeev Kannan",
  year: 2020,
};

// console.log(book);

// Task : 02
// console.log(book.title);
// console.log(book.author);

// ! Activity : 02 Object Methods

// Task : 03
// book.getDetails = () => {
//   return `The book ${book.title} was written by ${book.author}`;
// };

// console.log(book.getDetails());

// Task : 04
// book.updateDetails = (year) => {
//   book.year = year;
// };

// book.updateDetails(2021);
// console.log(book);

// ! Activity : 03 Nested Objects

// Task : 05
const Library = {
  name: "Library",
  books: [
    {
      title: "The Code",
      author: "Rajeev Kannan",
      year: 2020,
    },
    {
      title: "The Js Code",
      author: "Kundan Kumar",
      year: 2018,
    },
  ],
};

// console.log(Library);

// Task : 06
// console.log(Library.name);

// Task : 07
// Library.books.forEach((book) => {
//   console.log(book.title);
// });

// ! Activity : 04 The this Keyword

// Task : 08
const Book2 = {
  title: "The Js Code",
  author: "Kundan Kumar",
  year: 2018,
  getDetails: function () {
    return `The book ${this.title} was published in ${this.year}`;
  },
};

// console.log(Book2.getDetails());

// ! Activity : 05 Object Iteration

// Task : 09
const Library2 = {
  name: "Library",
  books: [
    {
      title: "The Code",
      author: "Rajeev Kannan",
      year: 2020,
    },
    {
      title: "The Js Code",
      author: "Kundan Kumar",
      year: 2018,
    },
  ],
};

// Task : 10
// for (let property in book) {
//   if (book.hasOwnProperty(property)) {
//     console.log(`${property}: ${book[property]}`);
//   }
// }

// Task : 11

const keys = Object.keys(book);
console.log("Keys:", keys);

const values = Object.values(book);
console.log("Values:", values);
