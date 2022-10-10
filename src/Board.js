import Square from "./Square";
import { useState, useEffect } from "react";

export default function Board() {
  const [board, setBoard] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const [mark, setMark] = useState("");
  const [xTurn, setXTurn] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState(false);

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

  useEffect(() => {
    console.log(board);
    console.log(win);
    checkWin();
  }, [board]);

  function handleClick(e) {
    if (xTurn) {
      setMark("X");
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
      setMark("O");
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

  return (
    <>
      <div className="flex justify-center flex-col">
        <div>{xTurn ? "Xs Turn" : "Os Turn"}</div>
        <div>{win ? "winner" : null}</div>
        <div className="grid grid-cols-3 grid-rows-3 w-[600px] h-[600px] border-solid border-2 border-black">
          <Square onClick={handleClick} value={"1"}>
            {board[0]}
          </Square>
          <Square onClick={handleClick} value={"2"}>
            {board[1]}
          </Square>
          <Square onClick={handleClick} value={"3"}>
            {board[2]}
          </Square>
          <Square onClick={handleClick} value={"4"}>
            {board[3]}
          </Square>
          <Square onClick={handleClick} value={"5"}>
            {board[4]}
          </Square>
          <Square onClick={handleClick} value={"6"}>
            {board[5]}
          </Square>
          <Square onClick={handleClick} value={"7"}>
            {board[6]}
          </Square>
          <Square onClick={handleClick} value={"8"}>
            {board[7]}
          </Square>
          <Square onClick={handleClick} value={"9"}>
            {board[8]}
          </Square>
        </div>
      </div>
    </>
  );
}
