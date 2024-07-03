// Import the prompt module
const prompt = require("prompt");

// Start the prompt
prompt.start();

// Prompt for the marks
prompt.get(["inputMarks"], (error, marks) => {
  //call grador function pass inputed marks
  console.log(grador(marks.inputMarks));
});

//funcion that assigns grades
let grador = (marks) => {
  //checking the input against conditions
  if (marks > 79.9 && marks <= 100.0) {
    return "A";
  } else if (marks > 59.9 && marks <= 79.9) {
    return "B";
  } else if (marks > 49.9 && marks <= 59.9) {
    return "C";
  } else if (marks > 40.0 && marks <= 49.9) {
    return "D";
  } else if (marks > 0 && marks < 40) {
    return "E";
  } else {
    return "Out of Range";
  }
};
