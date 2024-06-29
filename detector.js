const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Enter The Speed of the car:", (speed) => {
  if (speed > 0 && speed < 70) {
    console.log("Ok");
  } else if (speed > 70 && speed < 220) {
    let difference = speed - 70;
    dPoints = (difference - (difference % 5)) / 5;
    dPoints <= 12 ? console.log(dPoints) : console.warn("License suspended");
  } else {
    console.log("invalid my guy");
  }
  reader.close();
});
