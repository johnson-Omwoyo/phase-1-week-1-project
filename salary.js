const readline = require("readline"); //its importing readline a property that can be used to receive inputs from the terminal

//below untill line 7 i use the create interface to create an interface that allows users input
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter your taxable Income: ", (salary) => {
  //checking the input against conditions
  if (salary <= 24000) {
    tax = salary * 0.1;
    console.log(salary - tax);
  } else if (salary >= 24001 && salary <= 32333) {
    tax = salary * 0.25;
    console.log(salary - tax);
  } else if (salary >= 32334 && salary <= 500000) {
    tax = salary * 0.3;
    console.log(salary - tax);
  } else if (salary >= 5000001 && salary <= 800000) {
    tax = salary * 0.325;
    console.log(salary - tax);
  } else if (salary > 800000) {
    tax = salary * 0.35;
    console.log(salary - tax);
  }
  //breaking the input interface
  reader.close();
});
