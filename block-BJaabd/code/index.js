// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = Number(prompt("Enter your age?"));

age<4 ? console.log(" Hey Kiddo! Can You Walk ?") : (age<11) ? console.log(" You are too young to participate in the marathon") : (age<55) ? console.log("You can participate in the marathon") : console.log(" You are too old to participate in the marthon");

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

let num = Number(prompt("Enter Positive Integer"));
let sum = "";
let string = "e";

// while (num > 0) {
//   sum += string;
//   num--;
// }
// alert(`H${sum}llo`);



for (let i=0;i <= num;i++) {
  
  sum += string;
}

alert(`H${sum}llo`);


/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let num1 = Number(prompt("Enter a Number"));
let sum1=0;

for (i=0;i <= num1;i++) {
  sum1 +=i;
}

alert(`Sum of first ${num1} natural number is ${sum1}`)

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let val=Number(prompt("Enter a value"));

switch (true) {
  case val==1:
    alert("ONE");
    break;
  case val==2:
    alert("TWO");
    break;
  case val==3:
    alert("THREE");
    break;
  case val==4:
    alert("FOUR");
    break;
  case val==5:
    alert("FIVE");
    break;
  case val==6:
    alert("SIX");
    break;
  case val==7:
    alert("SEVEN");
    break;
  case val==8:
    alert("EIGHT");
    break;
  case val==9:
    alert("NINE");
    break;
  default :
  alert("PLEASE TRY AGAIN");

}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks=Number(prompt("Enter marks from (0-100)"));

switch (true) {
  case marks>90:
    alert("Your Grade is AA");
    break;
  case (marks>80 || marks==90):
    alert("Your Grade is AB");
    break;
  case (marks>70 || marks==80):
    alert("Your Grade is BB");
    break;
  case (marks>60 || marks==70):
    alert("Your Grade is BC");
    break;
  case (marks>50 || marks==60):
    alert("Your Grade is CC");
    break;
  case (marks>40 || marks==50):
    alert("Your Grade is CD");
    break;
  case (marks>30 || marks==40):
    alert("Your Grade is DD");
    break;
  default :
  alert("Your Grade is FF");

}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let int1 =Number(prompt("Enter the first integer value"));
let int2 =Number(prompt("Enter the first integer value"));

int1>int2 ? alert(int1) : alert(int2);

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let mul1 =Number(prompt("Enter the first number to multiply"));
let mul2 =Number(prompt("Enter the second number to multiply"));
let mul3 =Number(prompt("Enter the third number to multiply"));

let mult=mul1*mul2*mul3;

mult>0 ? alert (`+${mult}`) : alert(mult);



/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let cal1 =Number(prompt("Enter the first number to calculate"));
let cal2 =Number(prompt("Enter the second number to calculate"));
let res =prompt(`Enter the following value to perform calulation
          Add for addition
          Sub for subtraction
          Mul for multiplication
          Div for division`);
          
if (res==="Sub" &&  cal2>cal1) {
  alert ("Number Two is larger then Number one");
}else if (res==="Div" &&  cal2>cal1){
  alert ("Number Two is larger then Number one");
}else if (res==="Add"){
  alert (cal1+cal2);
}else if (res==="Sub"){
  alert(cal1-cal2);
}else if (res==="Mul"){
  alert(cal1*cal2);
}else if (res==="Div") {
  alert(cal1/cal2);
}

/* 
switch (true) {
  case res==="Add" :
    alert (cal1+cal2);
    break;
  case (res==="Sub" &&  cal2>cal1) :
  case (res==="Div" &&  cal2>cal1) :
    alert ("Number Two is larger then Number one");
    break;
  case res==="Sub" :
    alert(cal1-cal2);
    break;
  case res==="Mul" :
    alert(cal1*cal2);
    break;
  case res==="Div" :
    alert(cal1/cal2);
    break;
}
*/