function add(a,b){
    return a+b; 
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,sign,b){
    if(sign === "+") return add(a,b);
    if(sign === "-") return sub(a,b);
    if(sign === "X") return multiply(a,b);
    if(sign === "/") return divide(a,b);
    if(sign === "/" && b === 0) return "Error";
}

function signOperation(value){
    switch(value){
        case "+":
        case "-":
        case "X":
        case "/":
            sign = value;
            screenDisplay += value;
            screen.textContent = screenDisplay;
            console.log("operator worked " + value);
            break;
    }
}
function addNewNum(){
    num1 = value;
    num2 = "";
    sign = null;
    result = "";
    screenDisplay = value;
    screen.textContent = screenDisplay;
    isFirstNum = false;
    decimalUsed = false;
    justEvaluated = false;
    console.log("fresh num1:", num1)
    return;
}

function clickNumber(value){
    /*
    if(justEvaluated === true){
        //addNewNum();
        num1 = value; // 
        num2 = "";
        sign = null;
        screenDisplay = value;
        screen.textContent = screenDisplay;
        isFirstNum = false;
        decimalUsed = value === "." ? true : false;
        console.log("fresh num1:", num1);
        return; 
    }
    */

    if (value === "." && decimalUsed) return;
    if (value === ".") decimalUsed = true;

    if(isFirstNum){
        num1 += value;
        screenDisplay += value;
        screen.textContent = screenDisplay;
        isFirstNum = false; 
        console.log(num1);
        console.log("num1:", num1, typeof num1);
    }
    else{
        num2 += value;
        screenDisplay += value;
        screen.textContent = screenDisplay;
        console.log(num2);
        console.log("num2:", num2, typeof num2);
    }
}

function clickOperator(value){
    if(num1 === ""){
        return;
    }
    if(justEvaluated === true){
        num1 = result.toString();
        num2 = "";
        isFirstNum = false
        justEvaluated = false;
        screenDisplay = num1;
        screen.textContent = screenDisplay;
        console.log("2nd operator works")
    }
   
    signOperation(value);
    decimalUsed = false;
}

function clickAction(value){
    if(value === "="){
        showResult();
    }
    else if(value === "AC"){
        clearScreen();
    }
    else if(value === "DEL"){
        if(justEvaluated === true)
        {
            clearScreen();
        }
        delChar();
    }
}

function showResult(){
    result = operate(parseFloat(num1), sign, parseFloat(num2));
    if(result%1 !== 0){
        screen.textContent = parseFloat(result.toFixed(3));
    }
    else{
        screen.textContent = result;   
    }
    console.log(result);
    console.log("result works");
    justEvaluated = true; 
    decimalUsed = false;
}

function clearScreen(){
    num1 = "";
    num2 = "";
    sign = null;
    result = "";
    screenDisplay = "";
    screen.textContent = screenDisplay;
    isFirstNum = true;
    justEvaluated = false;
    decimalUsed = false;
}

function delChar(){
    if(num2.length > 0){
        del = num2.slice(0,-1);
        num2 = num2.slice(0,-1);
        screenDisplay = screenDisplay.slice(0,-1);
        screen.textContent = screenDisplay;   
        console.log("Deleted: ");
    }
    else if(sign !== null){
        sign = null;
        screenDisplay = screenDisplay.slice(0,-1);
        isFirstNum = true;
        screen.textContent = screenDisplay;   
    }
    else if(num1.length > 0){
        num1 = num1.slice(0,-1);
        screenDisplay = screenDisplay.slice(0,-1)
        screen.textContent = screenDisplay; 
    }
    decimalUsed = (num1.includes(".") || num2.includes("."));
}

const pad = document.querySelector("#number-pad");
const screen = document.querySelector("#screen");

let num1 = "";
let num2 = "";
let sign = null;
let result = "";
let screenDisplay = "";
let isFirstNum = true;
let del = "";
let justEvaluated = false;
let decimalUsed = false;


const buttons = [
    {label: "AC", role: "action"}, //0 - r1 
    {label: "DEL", role: "action"}, 
    {label: " ", role: "action"}, 
    {label: "/", role: "operator"}, //4 r1

    {label: "7", role: "number"}, //5 r2
    {label: "8", role: "number"},
    {label: "9", role: "number"}, 
    {label: "X", role: "operator"},//8 r2

    {label: "4", role: "number"}, //9 r3
    {label: "5", role: "number"}, 
    {label: "6", role: "number"},
    {label: "-", role: "operator"}, //12 r3

    {label: "1", role: "number"}, //13 r4
    {label: "2", role: "number"},
    {label: "3", role: "number"}, 
    {label: "+", role: "operator"}, //16 r4

    {label: " ", role: "number"}, //17 r5
    {label: "0", role: "number"}, 
    {label: ".", role: "number"},
    {label: "=", role: "action"}, //20 r5
];

for(let i=0; i < buttons.length; i++){
    const btn = document.createElement("button")
    btn.classList.add("button")
    btn.textContent = buttons[i].label;
    btn.dataset.role = buttons[i].role;
    btn.dataset.value = buttons[i].label;

    const role = btn.dataset.role;
    const value = btn.dataset.value;

    btn.addEventListener(('click'),()=>{
        if(role === "number"){
            clickNumber(value);
        }
        else if(role === "operator"){
            clickOperator(value);
        }
        else if(role === "action"){
            clickAction(value);
        }
    })

    pad.appendChild(btn);
};
