import React from "react";

function DisplayBils(props) {
  return (
    <div className="bils">
      <span className="h-100 fw-bold d-flex justify-content-center align-items-center">
        {props.number}
      </span>
    </div>
  );
}

export default DisplayBils;
