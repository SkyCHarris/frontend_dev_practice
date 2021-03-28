// declare program variables
var num1;
var num2;
var message;

// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
if (num1 === '0') {
    alert("Not a number, please reload and try again.");
}

num2 = prompt("Please type another number.");
num2 = parseFloat(num2);
if ( isNaN(num1) || isNaN(num2) ) {
    alert("At least one of the values you typed is not a number. Please reload and try again.");
} else {
    message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
    message += num1 + " + " + num2 + " = " + (num1 + num2);
    message += "<br>";
    message += num1 + " * " + num2 + " = " + (num1 * num2);
    message += "<br>";
    message += num1 + " / " + num2 + " = " + (num1 / num2);
    message += "<br>";
    message += num1 + " - " + num2 + " = " + (num1 - num2);   
    document.write(message);
}

// build an HTML message

  
// write message to web page


