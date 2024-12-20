// Loops (for, while, do while)


//for loop

for (let i=1; i<=10; i++)
{
    console.log("Rohit Patil");
}
console.log("loop has ended");


// calculate sum of 1 to 100

let sum = 0;
let n = 100;

for (let i=1; i<=n; i++)
{
    sum = sum+i;
}

console.log("sum of 1 to 100 =",sum);


// while loop

let i = 1;
while (i<=5){
    console.log("i =",i);
    i++;
}


// do while

let num = 1;
do  {
    console.log("num =",num);
    num++;
} 
while (num <= 10);    // In do while loop their are semicolon in last while condition


// for of loop 

let str = "Department";
let len = 0;

for(let val of str) {
    console.log("val =",val);
    len++;
}
    console.log("length is",len);



// for in loop 

let student = {
    name: "Rohit Patil",
    age: 20,
    cgpa: 7.7,
    Pass: true,
};

for (let key in student) {
    console.log(key,"=",student[key]);
}


// Q. print all even numbers between 1 to 100

for(let r=0; r<=100; r++)
{
    if (r % 2===0)                  //even no condition
    {
        console.log("Even number =",r);
}
}


// Q. create a number guessing game

let number = 37;
let usernum = prompt("Guess the number");

while (usernum != number) {
    usernum = prompt("You entered wrong number, Try again");
}
      console.log("Congratulation ! You enterd right number");


