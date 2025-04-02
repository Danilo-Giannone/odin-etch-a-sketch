let grid = document.querySelector("#grid");
let dimension = 10;
window.onload = refresh();
window.addEventListener('resize', function(event){
    refresh();
  });

function refresh(){
    if(window.innerWidth > window.innerHeight){
        grid.setAttribute("style", "height:70vh; width: 70vh")
    }else{
        grid.setAttribute("style", "height:70vw; width: 70vw")
    }
};


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
    square.addEventListener("mouseover", () => {
        console.log(square.id);
        
    })
});