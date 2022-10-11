import Square from "./Square";
import { useState, useEffect } from "react";

export default function Board() {
  const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [xTurn, setXTurn] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);

  const regex = new RegExp(/^[0-9]$/);

  function checkWin() {
    if (board[0] === board[1] && board[1] === board[2]) {
      setWin(true);
    } else if (board[3] === board[4] && board[4] === board[5]) {
      setWin(true);
    } else if (board[6] === board[7] && board[7] === board[8]) {
      setWin(true);
    } else if (board[0] === board[3] && board[3] === board[6]) {
      setWin(true);
    } else if (board[1] === board[4] && board[4] === board[7]) {
      setWin(true);
    } else if (board[2] === board[5] && board[5] === board[8]) {
      setWin(true);
    } else if (board[0] === board[4] && board[4] === board[8]) {
      setWin(true);
    } else if (board[2] === board[4] && board[4] === board[6]) {
      setWin(true);
    }
  }

  function noNumbers(array) {
    return array.every((element) => {
      return typeof element === "string";
    });
  }

  useEffect(() => {
    checkWin();
    if (win) {
      setDisabled(true);
    }
    if (noNumbers) {
      setDraw(true);
    }
  });

  function handleClick(e) {
    if (xTurn) {
      setBoard((board) => {
        const newArray = [...board];
        if (
          board[e.target.value - 1] !== "X" &&
          board[e.target.value - 1] !== "O"
        ) {
          newArray[e.target.value - 1] = "X";
          setXTurn(false);
        } else {
          setXTurn(true);
        }
        return newArray;
      });
    } else {
      setBoard((board) => {
        const newArray = [...board];
        if (
          board[e.target.value - 1] !== "X" &&
          board[e.target.value - 1] !== "O"
        ) {
          newArray[e.target.value - 1] = "O";
          setXTurn(true);
        } else {
          setXTurn(false);
        }
        return newArray;
      });
      setXTurn(true);
    }
  }

  function restartGame() {
    setBoard([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    setWin(false);
    setDisabled(false);
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        {!win ? <div>{xTurn ? "Xs Turn" : "Os Turn"}</div> : <div></div>}
        <div className="absolute t-50">
          {win ? (
            <div className="w-[280px] h-[280px] bg-black text-white text-xl flex justify-center items-center flex-col">
              {!xTurn ? `X's win!` : `O's win!`}
              <button className="text-white" onClick={restartGame}>
                restart
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 w-[600px] h-[600px] border-solid border-2 border-black">
          <Square onClick={handleClick} value={1} disabled={disabled}>
            {isNaN(board[0]) ? board[0] : ""}
          </Square>
          <Square onClick={handleClick} value={2} disabled={disabled}>
            {isNaN(board[1]) ? board[1] : ""}
          </Square>
          <Square onClick={handleClick} value={3} disabled={disabled}>
            {isNaN(board[2]) ? board[2] : ""}
          </Square>
          <Square onClick={handleClick} value={4} disabled={disabled}>
            {isNaN(board[3]) ? board[3] : ""}
          </Square>
          <Square onClick={handleClick} value={5} disabled={disabled}>
            {isNaN(board[4]) ? board[4] : ""}
          </Square>
          <Square onClick={handleClick} value={6} disabled={disabled}>
            {isNaN(board[5]) ? board[5] : ""}
          </Square>
          <Square onClick={handleClick} value={7} disabled={disabled}>
            {isNaN(board[6]) ? board[6] : ""}
          </Square>
          <Square onClick={handleClick} value={8} disabled={disabled}>
            {isNaN(board[7]) ? board[7] : ""}
          </Square>
          <Square onClick={handleClick} value={9} disabled={disabled}>
            {isNaN(board[8]) ? board[8] : ""}
          </Square>
        </div>
      </div>
    </>
  );
}
