// SOLUTIONS TO MAP ANALYZER LEVELS


// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById('currentTile');

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
    if (column >= 5){
        tile.innerHTML = "WATER"
    }
    else {
        tile.innerHTML = "SAND"
    }
  
}

function level2Solution() {
    if (column <= 2 ){
        tile.innerHTML = "Hill"
    } if (column >= 3){tile.innerHTML = "SAND"}
    if (column >= 8){tile.innerHTML = "WATER"}

}

function level3Solution() {
 if (column <= 2 ){
  tile.innerHTML = "Hills"}
  if (column >= 3){tile.innerHTML = "SAND"}
  
  if (column >= 8){tile.innerHTML = "Hills"}
}

function level4Solution() {
    if (row <= 2){tile.innerHTML = "Hills"}
    else{tile.innerHTML = "sand"}

}

function level5Solution() {
 if (row <= 2){tile.innerHTML = "Hilll"}
 if (row >= 3){tile.innerHTML = "Sand"}
 if (row >= 6){tile.innerHTML = "Water "}

}

function level6Solution() {
    if ( row <= 2){tile.innerHTML = "Water"}
    if (row >= 2){tile.innerHTML = "Sand"}
    if (row >= 6){tile.innerHTML = "Water"}

}

function level7Solution() {
 if (row == 4 && column== 7 ){tile.innerHTML = "Water"}
 else{tile.innerHTML = "Sand"}

}

function level8Solution() {
    if (column === 2) {
        tile.innerHTML = "tree";
    }
 
    else if (row === 5) {
        tile.innerHTML = "tree";
    }

    else {
        tile.innerHTML = "sand";
    }
}

function level9Solution() {
if ( row == 5 ){tile.innerHTML = "water"}
if(column >=6 ){tile.innerHTML = "sand"}

}

function level10Solution() {
    if(column <= 1){tile.innerHTML = "Hills"}
if (column >= 2)tile.innerHTML = "tree"
if(column >= 4){tile.innerHTML = "sand"}
if(column >=8){tile.innerHTML = " water"}
}

function level11Solution() {
    if (row <= 3 && column <= 4) {
        tile.innerHTML = "water";
      } else if (row <= 3 && column >= 5) {
        tile.innerHTML = "hills";
      } else if (row >= 4 && column <= 6) {
        tile.innerHTML = "sand";
      } else if (row >= 4 && column >= 7) {
        tile.innerHTML = "tree";
      }
    }


function level12Solution() {
    if (row <= 4 && column <= 4) {
        tile.innerHTML = "water";
      } else if (row <= 4 && column >= 5) {
        tile.innerHTML = "sand";
      } else if (row >= 5 && column <= 4) {
        tile.innerHTML = "sand";
      } else if (row >= 5 && column >= 5) {
        tile.innerHTML = "water";
      }
}

function level13Solution() {
    if (row === 0 || row === 7 || column === 0 || column === 11) {
        tile.innerHTML = "tree";
    } else {
        tile.innerHTML = "sand";
    }
}

function level14Solution() {
    if (row >= 1 && row <= 3 && column >= 2 && column <= 4) {
        tile.innerHTML = "tree";
    }
    
    else if (row >= 3 && row <= 6 && column >= 7 && column <= 10) {
        tile.innerHTML = "water";
    }
   
    else {
        tile.innerHTML = "sand";
    }
}
