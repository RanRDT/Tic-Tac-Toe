import { useState } from "react";

import "./App.css";

function App() {
  const [turn, setTurn] = useState('x')
  const [board, setBoard] = useState(Array(9).fill(undefined))
  
  function buttonOnClick(event) {
    handelClick(val.target.value)
  }

  function handelClick(buttonClicked) {
    board[buttonClicked-1] = turn
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
        <button value={1} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[0]}>{board[0]}</button>
        <button value={2} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[1]}>{board[1]}</button>
        <button value={3} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[2]}>{board[2]}</button>
        <button value={4} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[3]}>{board[3]}</button>
        <button value={5} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[4]}>{board[4]}</button>
        <button value={6} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[5]}>{board[5]}</button>
        <button value={7} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[6]}>{board[6]}</button>
        <button value={8} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[7]}>{board[7]}</button>
        <button value={9} onClick={(val)=>{handelClick(val.target.value)}} disabled={board[8]}>{board[8]}</button>
      </div>
    </>
  );
}

export default App;
