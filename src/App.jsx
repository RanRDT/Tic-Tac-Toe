import { useState } from "react";

import "./App.css";

function App() {
  const [turn, setTurn] = useState('x')
  const [board, setBoard] = useState([...Array(3)].map(_ => Array(3).fill(undefined)))

  function handelClick(buttonClicked) {
    buttonClicked = buttonClicked.split(',');
    board[buttonClicked[0]][buttonClicked[1]] = turn
    setBoard(board)



    if (turn == 'x') {
      return setTurn('o')
    } else {
      return setTurn('x')
    }
  }


  return (
    <>
      <div className="board-game">
        {board.map((row, rowIndex) => (
          row.map((cell, cellIndex) => (
            <button key={[rowIndex, cellIndex]} value={[rowIndex, cellIndex]} onClick={(val) => { handelClick(val.target.value) }} disabled={board[rowIndex][cellIndex]}>{cell}</button>
          ))
        ))}
      </div>
    </>
  );
}

export default App;
