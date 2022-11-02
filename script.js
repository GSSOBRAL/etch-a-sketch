//I want to create a grid of 16x16px using javascript
//when the mouse hovers over the divs, they change color to black
let blackMode = true;
let rainbowMode = false;

const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-btn");
const blackModeButton = document.querySelector(".black-mode-btn");
const rainbowModeButton = document.querySelector(".rainbow-mode-btn");
const resetCanvasButton = document.querySelector(".reset-canvas-btn");

const gridWidth = container.offsetWidth;

createGrid();

container.addEventListener("mouseover", paintDiv);
gridSizeButton.addEventListener("click", chooseGridSize);
blackModeButton.addEventListener("click", () => {
    blackMode = true;
    rainbowMode = false;
});
rainbowModeButton.addEventListener("click", () => {
    blackMode = false;
    rainbowMode = true;
});
resetCanvasButton.addEventListener("click", resetGrid);

function createGrid(){
    for(let i = 0; i < gridWidth * 2; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = "16px";
        newDiv.style.height = "16px";
        container.appendChild(newDiv);
    }
}

function paintDiv(event){
    let valueRed;
    let valueGreen;
    let valueBlue;
    if(event.target.parentElement === container){
        if(blackMode){
            event.target.style.backgroundColor = "black";
        }
        else
        {
            valueRed = Math.floor(Math.random() * 255);
            valueGreen = Math.floor(Math.random() * 255);
            valueBlue = Math.floor(Math.random() * 255);
            event.target.style.backgroundColor = `rgb(${valueRed},${valueGreen},${valueBlue})`;
        }
    }
}

function chooseGridSize(){
    let newGridSize = +prompt("What size in pixels do you want your grid?");
    if(newGridSize === 0){
        return;
    }
    else if(newGridSize > 100 || newGridSize < 1){
        newGridSize = +prompt("Choose a number between 1 and 100");
        if (newGridSize === 0) return;
    }
    createNewGrid(newGridSize);
}

function createNewGrid(size){
    //Determine the size of the divs, so they fit inside the grid
    const divSize = gridWidth / size;
    //Clear the grid
    document.querySelectorAll(".container div").forEach(element => element.remove());

    //Create new grid
    for(let i = 0; i < size ** 2; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = `${divSize}px`;
        newDiv.style.height = `${divSize}px`;
        container.appendChild(newDiv);
    }
}

function resetGrid(){
    document.querySelectorAll(".container div").forEach(element => element.style.backgroundColor = "white");
}