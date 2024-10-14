
import React from "react";

export default function CreateBtn({ onClick, index, value}) {
  return (
    <div>
      <button onClick={() => onClick(index)} className="GBtn">
        {value}
      </button>
    </div>
  );
}
