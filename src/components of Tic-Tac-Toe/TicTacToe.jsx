import React, { useState } from "react";
import StartGameButton from "./Game/StartGameButton";
import ResetButton from "./Game/ResetButton";
import CreateBtn from "./Game/GameButton";
import CheckWinner from "./utils/CheckWinner";
import "./TicTacToe.css";
export default function TicTacToe() {
  const [player, setPlayer] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const [startGame, setStartGame] = useState(false); // start game

  const handlePlayer = (index) => {
    const newBoard = [...board];
    if (newBoard[index] == null) {
      newBoard[index] = player ? "X" : "O";
      setBoard(newBoard);
      setPlayer(!player);
    }

    const isWinner = CheckWinner(newBoard);
    if (isWinner) {
      setWinner(newBoard[isWinner[0]]);
    }
  };

  // start game
  const handleGame = () => {
    setStartGame(true);
  };
  ///

  //Reset Game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setPlayer(true);
  };
  //

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <hr />

      {!winner && startGame && <p>{player ? "X turn" : "O turn"}</p>}
      {!startGame && <StartGameButton onClick={handleGame} />}

      {winner && (
        <>
          <h4>{winner} is the winner.</h4>
        </>
      )}

      <hr />

      <div className="gameBoard">
        <div className="row_one">
          {board.map((value, index) => (
            <CreateBtn
              key={index}
              index={index}
              value={value}
              onClick={handlePlayer}
            />
          ))}
        </div>
      </div>

      {winner && <ResetButton onClick={handleReset} />}
    </div>
  );
}
