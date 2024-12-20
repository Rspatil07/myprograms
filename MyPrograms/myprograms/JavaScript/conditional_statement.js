// conditional statement (if, if else, else if)

//if 

let your_age = 15;

if (your_age>=18) {
    console.log("You can Vote");
}
if (your_age<18)  {
    console.log("You cannot vote");
}

//if else

let mode = "dark";
let colour ; 

if (mode === "dark") {
   colour = "black";
}

else (mode === "light") 

console.log(colour);

//if else

let num = 5;

if (num%2===0) {
    console.log(num,"is even");
}
else {
    console.log(num,"is odd");
}


// else if

let age = prompt("Enter A age");

if (age<18) {
    console.log("You are child !");
}
else if (age<=40) {
    console.log("You are Mature !");
}
else if (age<=65) {
    console.log("You are Man !");
}
else {
    console.log("You are old !");
}


// ternary operator

let number = 26;

let result = number<= 18 ? "Adult" : "Not Adult"
console.log(result);


// use of prompt

let no = prompt("Enter a number");

if (no% 7 === 0)  {
    console.log(no,"is multile of 7");
}
else    {
    console.log(no,"is NOT a multiple of 7");
}


// Q.write a code which can give grades according to their marks

let marks = prompt("Enter Your Marks");

if (marks>100)  {
    console.log("Please Enter a valid Score");
}

if (marks >= 90 && marks <=100)    {
    console.log("Your grade is A");
}
else if (marks >= 75 && marks <=89)   {
    console.log("Your grade is B");
}
else if (marks >= 50 && marks <= 74)   {
    console.log("Your grade is C");
}
else if (marks >=36 && marks <=49)     {
    console.log("Your grade is D");
}
else if (marks < 36) {
    console.log("Your grade is F");
}