// Import the prompt module
const prompt = require("prompt");

// Start the prompt
prompt.start();

// Prompt for the speed
prompt.get(["inputSpeed"], (error, result) => {
  //call speed function pass inputed value
  calculateSpeed(result.inputSpeed);
});

function calculateSpeed(speed) {
  //determine for 70 and below
  if (speed > 0 && speed <= 70) {
    console.log("Ok");
  }
  //determine between 70 and 320
  else if (speed > 70 && speed < 320) {
    let difference = speed - 70;
    dPoints = (difference - (difference % 5)) / 5;
    dPoints <= 12 ? console.log(dPoints) : console.warn("License suspended");
  }
  //determine otherwise
  else {
    console.log("invalid my guy");
  }
}
