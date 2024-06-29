const readline = require("readline"); //its importing readline a property that can be used to receive inputs from the terminal

//below untill line 7 i use the create interface to create an interface that allows users input
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Enter The Speed of the car:", (speed) => {
  //checking the input against conditions
  if (speed > 0 && speed < 70) {
    console.log("Ok");
  } else if (speed > 70 && speed < 220) {
    let difference = speed - 70;
    dPoints = (difference - (difference % 5)) / 5;
    dPoints <= 12 ? console.log(dPoints) : console.warn("License suspended");
  } else {
    console.log("invalid my guy");
  }
  //breaking the input interface
  reader.close();
});
