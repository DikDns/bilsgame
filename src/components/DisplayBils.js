import React from "react";

function DisplayBils(props) {
  return (
    <div className="bils">
      <span className="bils-number">{props.number}</span>
    </div>
  );
}

export default DisplayBils;
