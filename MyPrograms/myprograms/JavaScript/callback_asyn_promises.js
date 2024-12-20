/*
//  Synchronous : synchronous means the code runs in a particular sequence of instruction given in the program. Each instruction waits for the previous instruction to complete its execution.
*/

 console.log("one");
 console.log("two");
 
/*
//  Asynchronous  : Due to asynchronous, sometime important instruction get blocked due to some previous instruction,
    which causes a delay in the UI. Asynchronous code execution allows to execute next instruction immediatly & doesn't block the flow.
*/

 console.log("one");
 console.log("two");

 setTimeout(() => {
    console.log("three");
 },5000);                                      //5000 msec = 5 sec    

 console.log("four");



 // CallBack : A callback is a function as an argument to another function.

        function sum(a, b)  {
            console.log(a+b);
        }

        function calculator(a, b, sumCallBack)  {
            sumCallBack(a, b);
        }

        calculator(5,8,sum);


/* Callback Hell : Nested callback stacked below one another forming a pyramid structure.(Pyramid of Doom)
This style of programming becomes difficult to understands & manage.
*/

function getData(dataId, getNextData)    {
    setTimeout (()     => {
        console.log("data", dataId);

        if (getNextData)    {
            getNextData();
        }
    },3000);
}
    console.log("Getting Data1....");
    getData(1, () => {
    console.log("Getting Data2....");
    getData(2, ()  => {
    console.log("Getting Data3....");
    getData(3, ()  =>  {
    console.log("Getting Data4....");
    getData(4);
        })
    })
 })


/*  Promises :

    Promises is for "Eventual" completion of task. It is an object in JS. It is a solution to callback hell.

 # A JavaScript Promise can be :
1. Pending : thr result is undefined
2. Resolved : the result is a value (Fullfilled)
3. Rejected : the result is an error object

Syntax :
let promises = new Promises((resolve, reject) => {...})
*/

  
function getdata(dataid, getnewdata)    {
    return new Promise((resolve, reject)    => {
        setTimeout(() => {
            console.log("data",dataid);
            resolve("Success");
            if (getnewdata) {
                getnewdata();
            }
        }, 5000);
    })
}


/* Then() & catch()
    1. promise.then((res)   => {...})
    2. promise.catch((err)  => {...})
*/

const getPromise = () =>   {
    return new Promise((resolve, reject)    => {
        console.log("I am a Promise");
        // resolve("SUCCESS");
        reject("Network Error");
    })
}

let promise = getPromise();
    promise.then((res) =>   {
        console.log("Promise is FullFilled", res);
    })

    promise.catch((err) =>  {
        console.log("Rejected!", err);
    }) 



// Promise Chaining :  (This concept easy to understand compare to Callback)

function asyncFun1(num)  {
    return new Promise ((resolve, reject)   => {
        setTimeout(()   => {  
        console.log("Data",num);
        resolve("Success");
    }, 2000)
})
}

// 1st way

console.log("Fetching Data 1...");
asyncFun1(1)
.then((res) =>  {
    console.log("Fetching Data 2...");
    return asyncFun1(2);
})
.then((res) =>  {
    console.log("Fetching Data 3...");
    return asyncFun1(3);
})
.then((res) =>  {
    console.log(res);
})

//2nd way

function asyncFun2()  {
    return new Promise ((resolve, reject)   => {
        setTimeout(()   => {  
        console.log("Data 2");
        resolve("Success");
    }, 2000)
})
}

function asyncFun3()  {
    return new Promise ((resolve, reject)   => {
        setTimeout(()   => {  
        console.log("Data 3");
        resolve("Success");
    }, 2000)
})
}

// Also write this way  (This get also same result)

console.log("Fetching Data 1...");
    asyncFun1().then((res)  =>{
        console.log("Fetching Data 2...");
            asyncFun2().then((res)  => {
                console.log("Fetching Data 3...");
                asyncFun3().then((res)  =>  {})
            })
    })



/*  Async-await :    (This function is simpler to any other like callback, callback hell or promise chaining)

---> Async function always returns a promise.

      Syntax :  async function myFunc() {...}

---> Await pauses the execution of its surrounding async function until the promises is settled.
*/


function api()  {
    return new Promise((resolve, reject)   =>  {
        setTimeout(()   =>  {
            console.log("Whether Data");
            resolve("Succied");
        }, 3000)
    })
}

    async function getWhetherData() {
        await api();
        await api();
    }


    // Example  --->

function getData(id)  {
    return new Promise((resolve, reject)    =>  {
        setTimeout(()   =>  {
            console.log("DATA",id);
            resolve("Successs");
        },2000)
    })
}

    async function  getAllData()    {
        
        console.log("Fetching Data 1...");
        await getData(1);
        console.log("Fetching Data 2...");
        await getData(2);
        console.log("Fetching Data 3...");
        await getData(3);
        console.log("Fetching Data 4...");
        await getData(4);
        console.log("Fetching Data 5...");
        await getData(5);
        console.log("Fetching Data 6...");
        await getData(6);
        console.log("Fetching Data 7...");
        await getData(7);
        console.log("Fetching Data 8...");
        await getData(8);      
    }

/* IIFE :  Immediately Invoked Function Expression
    
----> IIFE is a function is called immediatly as soon as it is defined.
    syntax : 1.(function  ()  {
                //__
                })  (); 
             2.(function  () => {
                //__
                })  ();
*/

function getData(id)  {
    return new Promise((resolve, reject)    =>  {
        setTimeout(()   =>  {
            console.log("DATA",id);
            resolve("Successs");
        },2000)
    })
}

    ( async function  getAllData()    {
        
        console.log("Fetching Data 1...");
        await getData(1);
        console.log("Fetching Data 2...");
        await getData(2);
        console.log("Fetching Data 3...");
        await getData(3);
        console.log("Fetching Data 4...");
        await getData(4);
        console.log("Fetching Data 5...");
        await getData(5);
        console.log("Fetching Data 6...");
        await getData(6);
        console.log("Fetching Data 7...");
        await getData(7);
        console.log("Fetching Data 8...");
        await getData(8);
         
        
    })  ();         