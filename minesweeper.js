document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: [
    {row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 0, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 0, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 0, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},

    {row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},  
    {row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 1, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 1, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 1, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},

    {row: 2, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 2, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 2, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 2, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 

    {row: 3, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 3, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 3, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 3, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 3, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 3, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 

    {row: 4, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 4, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 4, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 4, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 4, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 4, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 

    {row: 5, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 5, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 5, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 5, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 5, col: 4, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 5, col: 5, isMine: false, isMarked: false, hidden: true, surroundingMines: 0} 
  ]
}

function startGame () {

  for (i = 0; i < board.cells.length; i++) {
    if (Math.random() < .20) {
    board.cells[i].isMine = true;
    }
  }

  for(var c = 0; c < board.cells.length; c++){
    board.cells[c].surroundingMines = countSurroundingMines(board.cells[c]); 
  }
  
  lib.initBoard()
}




function checkForWin () {
  var numAllMines = 0;
  var numMarkedMines = 0;
  for (var c = 0; c < board.cells.length; c++) { 
    if (board.cells[c].isMine === true){ 
      numAllMines++;
    }
    if (board.cells[c].isMine === true && board.cells[c].isMarked === true){ 
      numMarkedMines++;
    }
    if (board.cells[c].hidden === true  && board.cells[c].isMine === false){ 
      return;
    }
  }
    if (numMarkedMines === numAllMines) {
      lib.displayMessage('You win!');
    } 
    else {
      return;
    }
  }


document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

function resetBoard() {
  document.location.reload()
}

function countSurroundingMines (cell) {
  var numSurrounding = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for(var i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine === true){
      numSurrounding++;
    }
  }
  return numSurrounding;
}


