const header = document.querySelector("h1");
header.style.textAlign = "center";

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";


//Create variable to hold reference  
const ul = document.querySelector("ul"); 
const input = document.querySelector("input");
const button = document.querySelector("button");

//Create the function to save the Items
function saveItem(){
    //Create new elements with new variables
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    //input.value 
    //save the text in input.value
    span.textContent = input.value;
    btn.textContent = "Delete";

    //when you click bugtton, item should be removed 
    btn.addEventListener(("click"), () =>{
        ul.removeChild(li);
    })

    //add new variables in list 
    //add list to main list
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);

    input.value = "";
    input.focus();
};

button.addEventListener("click", saveItem);


/*
button.addEventListener(("click") => {
    //do something 
    let a = input;
})

*/
