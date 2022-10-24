//I want to create a grid of 16x16px using javascript
//when the mouse hovers over the divs, they change color to black

const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-btn");

createGrid();

container.addEventListener("mouseover", paintDiv);
gridSizeButton.addEventListener("click", chooseGridSize);

function createGrid(){
    const gridWidth = container.clientWidth;
    let newDiv;

    for(let i = 0; i < gridWidth * 2; i++){
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

function paintDiv(event){
    if(event.target.parentElement === container)
        event.target.classList.add("painted-div");
}

function chooseGridSize(){
    let newGridSize = +prompt("What size in pixels do you want your grid?");
}