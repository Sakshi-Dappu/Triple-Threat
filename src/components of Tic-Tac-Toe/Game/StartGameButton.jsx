import React from "react";

export default function StartGameButton({ onClick }) {
  return (
    <div>
      <button className="Start_Btn" onClick={onClick}>
        Start Game
      </button>
    </div>
  );
}
