console.log("Hello World");

//Arthmatic operator

a = 25;
b = 20;

console.log("a+b =",a+b);       //additin 
console.log("a-b =",a-b);       //substraction
console.log("a*b =",a*b);       //multiplication
console.log("a/b =",a/b);       //divide
console.log("a%b =",a%b);       //modulation (reminder)
console.log("a**b =",a**b);     //power 

//unary operator

a = 5;
b = 2;
console.log("a=",a, "& b=",b);


console.log("pre incremenrt of a =",++a);   //pre increment

console.log("post increment of a =",a++);  //first print as it is then from next line it increment the value
console.log("post increment of a =",a);    //post increment


console.log("pre decremenrt of b =",++b);   //pre decrement

console.log("post decrement of b =",b++);   //first print as it is then from next line it increment the value
console.log("post decrement of b =",b);     //post decrement


//Asignment operator

a = 5;
b = 2;

a += 4                       //a=a+4  
console.log("a = ",a);

a -= 2                       //a=a-2  
console.log("a = ",a);

b *= 10                      //b=b*10  
console.log("b = ",b);

b /= 2                       //b=b/2  
console.log("b = ",b);

b **= 2                      //b=b**2  
console.log("b = ",b);


//Comparison operator

a = 7;
b = 5;

console.log("a =",a, "& b =",b);

console.log("a == b is",a == b);        //(equal) it shows boolean value either true or false
console.log("a != b is",a != b);        //(not equal) 
console.log("a === b is",a === b);
console.log("a !== b is",a !== b);
console.log("a > b = ",a>b);
console.log("a >= b = ",a>=b);
console.log("a <= b = ",a<=b);


//logical operator

// logical and[&&]= There is two condition if one is false then ouput is false
// logical or[||] = There is two condition if one is true then ouput is true
// logical not[!] = It reverse the condition

a=8;
b=5;

cond1 = a>=b;   //true
cond2 = b==5;   //true
console.log("cond1 && cond2 =",cond1 && cond2);     //here 2 conditions are true therefore it returns true

cond1 = a>=b;   //true
cond2 = b==1;   //false
console.log("cond1 && cond2 =",cond1 && cond2);     //here 1st condition is true & 2nd condition is false therefore it returns false

cond1 = a>=b;   //true
cond2 = b==2;   //false
console.log("cond1 || cond2 =",cond1 || cond2);      //here 1st condition is true & 2nd condition is false therefore it returns true

cond1 = a==b;   //false
cond2 = b>10;   //false
console.log("cond1 || cond2 =",cond1 || cond2);      //here 1st condition is false & 2nd condition is false therefore it returns false


console.log("!(a==b) =",!(a==b));       //(a==b) is false statement but here we use (!) not operator it reverse the value it shows true