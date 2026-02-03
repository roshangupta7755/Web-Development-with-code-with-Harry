
use('Ro Web');

db.getCollection('Sigma-web').insertMany([
  {
    "name": "Java",
    "Price": 24000,
    "Instructor": "Kevin"
  },
  {
    "name": "Rust",
    "Price": 26000,
    "Instructor": "Laura"
  },
  {
    "name": "Dart",
    "Price": 17500,
    "Instructor": "Mike"
  },
  {
    "name": "Scala",
    "Price": 25500,
    "Instructor": "Nina"
  },
  {
    "name": "R",
    "Price": 16500,
    "Instructor": "Oscar"
  },
  {
    "name": "MATLAB",
    "Price": 27000,
    "Instructor": "Paula"
  }
]);

console.log(`Done Inserting 6 More Courses`);

 