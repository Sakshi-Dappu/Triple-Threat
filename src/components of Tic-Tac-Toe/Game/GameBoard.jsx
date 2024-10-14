
import React from "react";
import GameBoard from "./Game/GameBoard.jsx";




export default function GameBoard({ board, handlePlayerMove }) {
  return (
    <div className="gameBoard">
      <div className="row">
        {board.map((value, index) => (
          <GameButton key={index} value={value} onClick={() => handlePlayerMove(index)} />
        ))}
      </div>
    </div>
  );
}
