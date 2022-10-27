//I want to create a grid of 16x16px using javascript
//when the mouse hovers over the divs, they change color to black

const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-btn");

const gridWidth = container.offsetWidth;

createGrid();

container.addEventListener("mouseover", paintDiv);
gridSizeButton.addEventListener("click", chooseGridSize);

function createGrid(){
    for(let i = 0; i < gridWidth * 2; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = "16px";
        newDiv.style.height = "16px";
        container.appendChild(newDiv);
    }
}

function paintDiv(event){
    if(event.target.parentElement === container)
        event.target.classList.add("painted-div");
}

function chooseGridSize(){
    const newGridSize = +prompt("What size in pixels do you want your grid?");

    createNewGrid(newGridSize);
}

function createNewGrid(size){
    //Determine the size of the divs, so they fit inside the grid
    const divSize = gridWidth / size;
    console.log(divSize);
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