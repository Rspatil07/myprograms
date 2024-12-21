// /* Windows Object :
//     The window object represent an open window in a browser.
//     It is browser's object (not Javascript's) & it automatically created by browser.

//     It is a global object with lots of properties & methods.
 
// */

// // What is DOM :

// /* when a web page is loaded, the browser creates a Document Object Model (DOM) of the page

//                           [window]
//                              |
//                          [Document]
//                              |
//                           [html]
//               _______________|______________
//               |                            |   
//            [head]                        [body]
//     __________|______________        ______|______
//     |      |       |        |       |            |
//  [meta]  [meta]  [title]  [link]   [div]      [script]    
//                                      |
//                       _______________|_____________
//                       |     |        |             |
//                      img    h1   p(paragraph)     div


// */


console.dir(document);          // using this command we can access any part of document

console.dir(document.body);      // here we can access body in document
console.log(document.body);     // here we can access html code in the body

console.dir(document.head);       // here we can access head object in document

console.dir(document.body.childNodes[2]);       //here we access 2nd node 

console.dir(document.body.childNodes[0].innerText = "RohitPatil");      // here we change the text 3rd node


// DOM manipulation

/* 1.Selecting with id
    syntax -->  document.getElementById("Id_name")
*/

        let button = document.getElementById("myid");
        console.dir(button);
    

/* 2.Selecting with class
    syntax --> document.getElementByClassName("class_name")
*/ 

        let headings = document.getElementsByClassName("myclass");
        console.dir(headings);
        console.log(headings);


/* 3.Selecting with Tags
    syntax --> document.getElementsByTagName("tag_name")
*/

        let parps = document.getElementsByTagName("p");
        console.dir(parps);
 


/* Query Selector
    syntax --> document.querySelector("Id_name"or"class_name"or"tag_name")
*/

        let element = document.querySelector("p");      //this command will return only first node of p
        console.dir(element);

        let element2 = document.querySelectorAll("p");  //this command will return all nodes of p
        console.dir(element2);


/*   Properties ==>

1. tagName : returns tag for element nodes.
2. innerText : returns the texts contents of the element & all its children.
3. innerHTML : returns the plain text or HTML contents in the element.
4. textContent : returns textual content even for hidden elements.

*/


/* Q. creates a H2 heading elements with text- "Hello Javascript".
    Append "Welcome to JS" to this text using JS.
*/

  let heading = document.querySelector("h2");
        console.dir(heading.innerText);
    
     heading.innerText  = heading.innerText + " Welcome to JS.";



/* Q. create 3 divs with common class name- "box". 
    Access them & add some unique text to each of them. 
*/

    let divs = document.querySelectorAll(".box");
   
    divs[0].innerText = "New unique text 1";
    divs[1].innerText = "New unique text 2";
    divs[2].innerText = "New unique text 3";
      
    // another method using loop

    let div1 = document.querySelectorAll(".box");
    idx = 1;
    for(div of div1)    {
        div.innerText = `New unique text ${idx}`;
        idx++;
    }


//  Attributes -->
    
// 1. getAttributes(attribute_name)        //to get the attribute value
 
// 2.setAttribute(attribute_name,value)    //to set or change the attribute value

// 3. style.node    // using this you can change style direct from javascript

    let h1 = document.querySelector("h1");

    h1.style.backgroundColor = "red";
    h1.style.fontSize = "50px";



//  Insertion of Elements -->

/*  for insertion of element first we have to create elements
         document.createElement("div_name")

   1. node.append(element)          // adds at the end of node (inside)
   2. node.prepend(element)         // adds at the start of node (inside)
   3. node.before(element)          // adds before the node (outside)
   4. node.after(element)           // adds sfter the node (outside)
*/

//  Deletion of Element -->
     
//       Node.remove()              // for removes the node



/* Q. create a new button element. Give it a text "click me ", background color of Red & text color of white.
        Insert the button as the element inside the body tag
*/

        let btn = document.createElement("button");
        
        btn.innerText = "click me !";

        btn.style.color = "white";
        btn.style.backgroundColor = "red";

        btn2 = document.querySelector("body");
        btn2.prepend(btn);


        
/*  Q. Create a <p> tag in html, give it a class & some styling.
    Now create a new class in CSS & try to append this class to the <p> element.
    solve this using classlist
*/

        let para = document.querySelector("p");
        console.log(para);

        let X = para.setAttribute("class","newClass");      
        console.log(X);

/*   here we succesfully append "class" to "newClass" but this method change whole style
        but we also have old style then we use below classList method 
*/

        let Y = para.classList.add("newClass");
        console.log(Y);
       

// we also reomve the class to call a classList.remove() function.