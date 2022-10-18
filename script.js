//I want to create a grid of 16x16px using javascript
//when the mouse hovers over the divs, they change color to black

createGrid();
const container = document.querySelector(".container");

function createGrid(){
    const container = document.querySelector(".container");
    const gridWidth = container.clientWidth;
    let newDiv;

    for(let i = 0; i < gridWidth; i++){
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

//when the mouse hovers over a div, it changes color to black
function paintDiv(){
    
}

addEventListener("mouseover", (e) => {
    if(e.target.parentElement === container)
        e.target.classList.add("painted-div");
});