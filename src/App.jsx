import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [turn, setTurn] = useState('x')
  const [board, setBoard] = useState([...Array(3)].map(_ => Array(3).fill(undefined)))

  function handelClick(buttonClicked) {
    buttonClicked = buttonClicked.split(',');
    const newBoard = [...board];
    newBoard[buttonClicked[0]][buttonClicked[1]] = turn;
    setBoard(newBoard);

    if (turn == 'x') {
      return setTurn('o')
    } else {
      return setTurn('x')
    }
  }

  useEffect(function () {
    // Check row win
    let isWinningInRow = board.reduce((won, row) => {
      return won || (row[0] !== undefined && row.every(val => val === row[0]));
    }, false)
    console.log(isWinningInRow);

    // Check col win
    // Check diagnal win
  }, [board]);

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
