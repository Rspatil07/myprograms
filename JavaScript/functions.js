/*  function syntax :
 
function function_name (parameter2,parameter2) {
        do some work 
}
    function_name();

*/

 // create a function

function myfunction()      {
    console.log("Hii myself Rohit");
    console.log("I am from Barshi");
} 
    myfunction();               //after creating function then we call it



// parmeters and argument

function js(msg)        {       // (_) : parameter
    console.log(msg);
}

        js("I love JS, i learn JS");            // (_) : argument



// create a function of sum two numbers

function sum(x,y)   {
    console.log(x + y);
}
    sum(565,665);

//another method

function add(x,y)   {
    sum = x + y;
    return sum;
}
let val = add(646,486);
console.log("Adiition is",val);


// function parameter like a local variables of functions and it is block scope

// Arrow functions

    // using normal function

    function mul(x,y)       {
        m = x*y;
        return m;
    }
        mul();

    // using arrow function

    const arrowMul = (x,y) =>   {
        console.log(x*y);
    }



// create a function using  "function" keyword that takes a string as an argument & returns the number of vowels in the string

function count_vowel(str)   {
    let count = 0;
    for (let char of str)  {
        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
        {
            count++;
        } 
    }

    return count;               // we also write this console.log(count);
}     


// For each loop in arrays ->

// arr.forEach(callbackfunction) 

// call back function : It is function to execute for each element in array

let arr = [1,2,3,4,5,6,7];

arr.forEach(function number(val)  {
    console.log(val);
})

// using arrow function

arr.forEach((val) => {
    console.log(val);
})

// another example

let cities = ["Pune","Mumbai","Kolhapur"];

cities.forEach((val) => {
    console.log(val.toUpperCase());         //here we perform differnt operation also
})


// Q. for a given array numbers, prints the square of each value using the forEach loop

let num = [25,55,54,48,78];

num.forEach((square) => {
    console.log(square ** 2);
}
)

// Array methods used in functions

// 1.Map (Creates a new array with the result of some operation. The value its callback returns are used to form new array)

let country = ["India","USA","England","Africa"];

let array = country.map((val)   => {
    return val;
})
console.log(array);

// // 2.Filter (Creates new array of elements that give true for a condition / filter)

let num2 = [1,2,3,4,5,6,7,8,9];

let even = num2.filter((val)    =>  {
    return val %2 === 0;                     // even numbers condition
})
    console.log(even);


// 3.Reduce (Performs some operation & reduce the array to a single value. It returns that single value. )

let num3 = [1,2,3,4,5];

const result = num3.reduce((previous_value,current_value) =>  {
    return previous_value * current_value;
})
    console.log(result);


// Q.We are given array of marks of student. filter out of the marks of student that scored 90+.

let marks = [68,38,98,75,85,94,70,96];

let toppers = marks.filter((val)    =>  {
    return val > 90;
})
    console.log(toppers);


/* Q. Take a number n as input from user. Create an array of numbers from 1 to n. 
use the reduce method to calculate sum of all numbers in the array. 
use the reduced methods to calculate product of all numbers in the array 
*/


let n = prompt("Enter a Number : ");
let arr1 = [];

for(let i=1; i<=n; i++) {
    arr1[i - 1] = i;
}
    console.log(arr);

let sum = arr.reduce((prev,curr)    =>  {
    return prev + curr;
})
    console.log(`Sum of first ${n} numbers = `,sum);

let factorial = arr.reduce((prev,curr)    =>  {
    return prev * curr;
    })
    console.log(`Factorial of first ${n} numbers = `,factorial);