// set board size
let size = 8;

// outer loop; 
//set variable to count up to the size of the board
for (let y=0; y < size; y++) {
  // immediately after outer loop, create inner loop which
  // also counts up to the size of the board
  for (let x = 0; x < size; x++) {
    // action for the inner loop that sets every other
    // "spot" equal to a blank space or a '#'
    if ((x + y) % 2  == 0) {
      document.getElementById('chessboard').innerHTML += " ";
    } else {
      document.getElementById('chessboard').innerHTML += "#";
    }
  }
  // create newline at the end of the row
  document.getElementById('chessboard').innerHTML += '\n';
}