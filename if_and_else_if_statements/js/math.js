// declare program variables
let num1;
let num2;
let message;

// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
if (num1 === '0') {
    alert("Not a number, please reload and try again.");
}
num1 = parseFloat(num1);

num2 = prompt("Please type another number.");

function checkNum() {
    if ( isNan(num1) || isNan(num2) ) {
        alert("At least one of the values you typed is not a number. Please reload and try again.");
    }
}
num2 = parseFloat(num2);

// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);

