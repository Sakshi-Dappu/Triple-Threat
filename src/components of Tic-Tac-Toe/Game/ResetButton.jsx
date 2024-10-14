import React from "react";

export default function ResetButton({ onClick }) {
  return (
    <div>
      <button className="ResetBTN" onClick={onClick}>
        RESET GAME
      </button>
    </div>
  );
}
