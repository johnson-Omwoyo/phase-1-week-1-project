const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter your taxable Income: ", (salary) => {
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

  reader.close();
});
