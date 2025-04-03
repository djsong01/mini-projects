const grid = document.querySelector("#grid");
const btnCustom = document.querySelector("#custom");
const btnReset = document.querySelector("#reset");


function newPrint(gridnum = 16){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    //const gridSizePx = 833; 
    //const squareSizePx = Math.floor(gridSizePx / gridnum);
    const squareSizePx = 833 / gridnum;
    //const newGridSize = squareSizePx * gridnum;
    //grid.style.width = newGridSize + "px";
    //grid.style.height = newGridSize + "px";

    for (let i=0; i < gridnum*gridnum; i++){
        const square = document.createElement("div")
        square.classList.add("square") //add a class to it
        grid.appendChild(square);
        square.style.width = squareSizePx + "px";
        square.style.height = squareSizePx + "px"; 
        square.addEventListener('mouseover',()=>{
            const r = Math.floor(Math.random() * 100 + 155);
            const b = Math.floor(Math.random() * 100 + 155);
            const g = Math.floor(Math.random() * 100 + 155);
            const color = `rgb(${r},${g},${b})`;
            square.style.backgroundColor = color;

            if(square.dataset.secret === "true"){
                triggerSecretSurprise(square);
            }

        });
    }

    const squares = document.querySelectorAll(".square");
    const randomIndex = Math.floor(Math.random() * squares.length);
    const secretSquare = squares[randomIndex];
    secretSquare.dataset.secret = "true";    


    btnCustom.addEventListener('mouseover',()=>{
        const r = Math.floor(Math.random() * 100 + 155);
        const b = Math.floor(Math.random() * 100 + 155);
        const g = Math.floor(Math.random() * 100 + 155);
        const color = `rgb(${r},${g},${b})`;
        btnCustom.style.backgroundColor = color;
    });

    btnReset.addEventListener('mouseover',()=>{
        const r = Math.floor(Math.random() * 100 + 155);
        const b = Math.floor(Math.random() * 100 + 155);
        const g = Math.floor(Math.random() * 100 + 155);
        const color = `rgb(${r},${g},${b})`;
        btnReset.style.backgroundColor = color;
    });
};

function triggerSecretSurprise(square) {
    alert("💥 You found the hidden square!");
    square.style.backgroundColor = "gold";
    square.style.border = "3px solid red";
    square.textContent = "⭐";
    square.style.color = "black";
};

btnCustom.addEventListener(('click'),()=>{
    let gridnum = prompt("How many squares?");
    if(gridnum > 100 || gridnum < 1 || isNaN(gridnum)){
        alert("Please enter a number between 1 and 100")
        return;
    }
    newPrint(gridnum);
});

btnReset.addEventListener(('click'),()=>{
    newPrint();
})

newPrint();