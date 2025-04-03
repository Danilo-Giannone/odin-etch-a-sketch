let container = document.querySelector("#container");
let btn = document.querySelector(".btn");
const startDimension = 16;

generateGrid(startDimension);

window.onload = refresh();
window.addEventListener('resize', function(event){
    refresh();
  });

btn.addEventListener("click", function (e){
    let dim = Number(prompt("Select the numbers of tiles per side!"))
    if(dim>100){
        refreshGrid(100);
    }else{
        refreshGrid(dim);
    }
})


function refresh(){
    if(window.innerWidth > window.innerHeight){
        container.setAttribute("style", "height:70vh; width: 70vh")
    }else{
        container.setAttribute("style", "height:70vw; width: 70vw")
    }
};



function refreshGrid(dimension){
    container.removeChild(container.lastChild);
    generateGrid(dimension)
};

function generateGrid(dimension){
    let grid = document.createElement("grid");
    grid.classList.add("grid")
    container.appendChild(grid);
    for(let i = 0; i < dimension; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.id = "row" + i.toString();
        grid.appendChild(row);
        for (let j = 0; j < dimension; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = i.toString() + "_" + j.toString();
            row.appendChild(square);
            
        }
    }

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
    square.addEventListener("mouseover", function (e){
        let opacity = e.target.style.opacity;
            if (opacity) { 
                e.target.style.opacity = Number(opacity) + 0.1 ;
            } else { 
                e.target.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
                e.target.style.opacity = 0.1;
            }});
});
};


