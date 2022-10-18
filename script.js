//I want to crate a grid of 16x16px using javascript
//when the mouse hover's over the divs, they change color to black

createGrid();

function createGrid(){
    const container = document.querySelector(".container");
    const gridWidth = container.offsetWidth;
    let newDiv;
    
    for(let i = 0; i < gridWidth; i++){
        newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}