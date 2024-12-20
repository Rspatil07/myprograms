// Arrays

let arr = ["VK","MSD","RS","JB","RJ"];
console.log(arr);

arr[2];                         // prints any value in array

console.log(arr.length);        // prints the length of of array 

arr[3] = "MS";                  // changing the values in arrays
console.log(arr);              


// Arrays over a loop

let heroes = ["Ironman","Spiderman","Hulk","Thor","Blackwidow","Capatian America","Superman","Batman"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


// for of loop

let cities = ["Pune","Mumbai","Banglore","Chennai","Hydrabad"];

for (let city of cities)    {
    console.log(city);
}


// Q. find the average marks of student of following data [85,47,44,37,76,60]

let marks = [85,47,44,37,76,60];
let sum = 0;

for(let val of marks)   {
    sum += val;                     // sum = sum + val
}
    let result = sum / marks.length;
    console.log(`The average marks of student is = ${result}`);



// Q. For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF on item. Change the array to store final price after applying offer.

let items = [250,645,300,900,50];
let i = 0;

for (let val of items)  {
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`Items after applying offer = ${items[i]}`);
    i++;
}

// 2nd method
 
let items1 = [250,645,300,900,50];

for(let i=0; i<items1.length;i++)   {
    let offer = items1[i] / 10;
    items1[i] -= offer;
}
console.log(`Items after applying offer is ${items1}`);


// Array Methods

let fruit = ["Apple","Banana","Mango","Chiku","Watermelon"];
console.log(fruit);

fruit.push("Ananas");          // push() method add elements in array

fruit.pop();                   // pop() method delete element from end & return

console.log(fruit.toString());      // to string() methods converts array into string


let marvel_heros = ["Ironman","Thor","Spiderman","Blackwidow","Hulk"];
let dc_heros = ["Superman","Batman","Flash"];

let Super_heros = marvel_heros.concat(dc_heros);        //concat() method join multiple arrays together
console.log(Super_heros);

marvel_heros.unshift("Antman");                // unshift() method add element to start in array

dc_heros.shift();                           // shift() method removes first element in array and 

console.log(marvel_heros.slice(0,2))            //slice() method returns piece of array


// splice() method change original array

//syntax: splice(starting index, delete count, add new element);

let arr = [18,32,20,45,87,56];
console.log(arr);

// add element
 arr.splice(2,0,77);

// delete element
 arr.splice(4,2);

 // replace element
 arr.splice(3,2,101,102);