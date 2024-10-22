import React from "react";
import "./ErrorBox.css";
export default function ErrorBox({ onClick }) {
  return (
    <div className="ErrorBox">
      <h1>Location Not Found</h1>
      <br />
      <button className="searchBtn" onClick={onClick}> Search Again</button>
    </div>
  );
}
