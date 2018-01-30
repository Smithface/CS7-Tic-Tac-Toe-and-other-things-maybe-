let isMyTurn = true; // a variable that alternates between true and false, to simulate "turns" before any real game logic is in place

const addLetter = (id, letter) => { // function with 2 parameters, one that takes the id of the clicked square, and one that takes which letter to insert in that square
  document.getElementById(`${id}`).innerHTML = `${letter}`; // grab the element by its id and change its "innerHTML" (<-- I don't really know what this means)
  isMyTurn = !isMyTurn; // I don't think the ternary operator was working, but this will
};

const checkSquare = (id) => { // function to check if square has already been marked; returns a boolean
  if (document.getElementById(`${id}`).innerHTML) return true;
  return false;
};

addEventListener("click", (event) => { // EventListener, I assume on the whole document, that looks for a click
  let idNum = event.target.id; // store the id of what I clicked on
  let squareStatus = checkSquare(idNum); // Call function to check if square has already been marked and store into variable 
  if(idNum && isMyTurn && !squareStatus) {  // if there is an idNum, it is my turn and square has not already been marked, then do the following
    addLetter(idNum, 'X'); // call addLetter function from line 4, give it the idNum we stored and the letter X to insert into the "innerHTML"
  }
  else if (idNum && !isMyTurn && !squareStatus) { // if it is not my turn, insert the letter O on the element (with an id) that was clicked
    addLetter(idNum, 'O');
  }
  console.log(event.target); // have the console tell me what I clicked on
});
