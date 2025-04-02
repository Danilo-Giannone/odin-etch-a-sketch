let grid = document.querySelector("#grid");
let dimension = 16;
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
    square.addEventListener("mouseover", function (e){
        let opacity = e.target.style.opacity;
            if (opacity) { 
                e.target.style.opacity = Number(opacity) + 0.1 ;
            } else { 
                e.target.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
                e.target.style.opacity = 0.1;
            }});
});
