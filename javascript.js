let grid = document.querySelector("#grid");
let dimension = 16;

for(let i = 0; i < dimension; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = "row" + i.toString();
    grid.appendChild(row);
    for (let j = 0; j < dimension; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.id = i.toString() + j.toString();
        row.appendChild(square);
        
    }
}