

// Q. create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.


    let mode = document.querySelector("button");
    let body = document.querySelector("body");
    let currMode = "light mode";

    mode.addEventListener("click", ()   =>  {
        
        if(currMode === "light mode"){
        currMode = "dark mode";
        body.style.backgroundColor = "black";
        body.classList.add("dark"); 	        // here we created one class in css
        body.classList.remove("light");      
        }
         else {
        currMode = "light mode";
        body.style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
        }

        console.log(currMode);
    })

