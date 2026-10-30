// write a program of  switch.

console.log("choose a number 1 to 3 ");

let num = Number(prompt("enter your number: from 1 to 3"));

switch (num) {
  case 1:
    console.log("python");
    break;

  case 2:
    console.log("javascript:");
    break;

  case 3:
    console.log("django");
    break;

  default:
    console.log("choose a valid number given below: ");
}
