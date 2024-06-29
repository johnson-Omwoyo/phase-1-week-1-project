const readline = require("readline"); //its importing readline a property that can be used to receive inputs from the terminal

//below untill line 7 i use the create interface to create an interface that allows users input
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter the marks: ", (marks) => {
  //checking the input against conditions
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
  //breaking the input interface
  reader.close();
});
