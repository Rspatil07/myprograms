// strings (string is written as single colon and as well as double colon )

let str = "Hii myself Rohit";
console.log(str);
 
str.length                  //we can print length uning .length function

console.log(typeof str);    //using this we can find type of object

console.log(str[5]);        //we can access any character in the string



// template literals

let string = `this is Template Literals`;
console.log(string);

//string interpolation

let obj = {
    item: "Pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);



// Escape character (\n,\t)

console.log("My name is Rohit.\nI am from Barshi");     //(\n) is give you to next line 
console.log("My name is Rohit.\tI am from Barshi");     //(\t) is give extra space


// String methods

let name = "Rohit Patil";
name=name.toUpperCase();                //this method print all char to upper case
console.log(name);

let char = "Rohit Patil";
char =char.toLowerCase();               //this method print all char to lower case
console.log(char);

let str2 = "    I am Rohit    ";        // it removes white spaces in string
console.log(str2.trim());

let str3 = "Parallelogram";
console.log(str3.slice(2,8));           //it slices the string


let word1 = "Rohit";
let word2 = "Patil";
let result = word1.concat(word2);       //it add multiple strings together
console.log(result);

let str4 = "Hello";
console.log(str4.replace("H","k"));     //it replace the word in string

let str5 = "Universe";
console.log(str5.charAt(3));            //it helps to find char in string



// Q. prompt the user to their full name and generate the username based on their input.
  //start username with @ and follwed with full name and end with length of their full name.

let fullname = prompt("Enter your full name :");

let username = "@" + fullname + fullname.length;
console.log(username);