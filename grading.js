const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Enter the marks: ", (marks) => {
  if (marks > 79.9 && marks <= 100.0) {
    console.log("A");
  } else if (marks > 59.9 && marks <= 79.9) {
    console.log("B");
  } else if (marks > 49.9 && marks <= 59.9) {
    console.log("C");
  } else if (marks > 40.0 && marks <= 49.9) {
    console.log("D");
  } else if (marks > 0 && marks < 40) {
    console.log("E");
  } else {
    console.log("Out of Range");
  }
  reader.close();
 
});
