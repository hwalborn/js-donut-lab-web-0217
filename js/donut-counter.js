//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

var guests = parseInt(prompt("Enter number of guests please."));
var donuts = parseInt(prompt("Enter number of donuts please."));

donuts < guests ? alert("SHIT! THERE'S NOT ENOUGH 'NUTS!") :alert("You got plenty of 'nuts!;");
