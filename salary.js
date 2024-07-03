// Import the prompt module
const prompt = require("prompt");

// Start the prompt
prompt.start();
//object that will hold the two inputs
let holder = {
  properties: {
    basicSalary: { description: "Enter the salary" },
    benefits: { description: "Enter the benefits" },
  },
};
// Prompt for both basic salary and benefit
prompt.get(holder, (error, result) => {
  //destructuring the object having the two values
  const { basicSalary, benefits } = result;

  //call salary function pass inputed (destructured values)values
  console.log(calculateSalary(basicSalary, benefits));
});
//function for the salary calculations
let calculateSalary = (basicSalary, benefits) => {
  let salary = parseInt(basicSalary, 10) + parseInt(benefits, 10);
  console.log("Salary before tax:" + salary);
  //checking the input against conditions with the output on the console
  if (salary <= 24000) {
    tax = salary * 0.1;
    return salary - tax;
  } else if (salary >= 24001 && salary <= 32333) {
    tax = salary * 0.25;
    return salary - tax;
  } else if (salary >= 32334 && salary <= 500000) {
    tax = salary * 0.3;
    return salary - tax;
  } else if (salary >= 5000001 && salary <= 800000) {
    tax = salary * 0.325;
    return salary - tax;
  } else if (salary > 800000) {
    tax = salary * 0.35;
    return salary - tax;
  }
};
