import React from "react";

function DisplayBils(props) {
  return (
    <div
      id={props.index}
      className={`bils my-2 ${props.selected ? `bg-info text-white` : ``}`}
      onClick={(event) => props.onClick(event, props.index)}
    >
      <span
        className={`h-100 fw-bold  d-flex justify-content-center align-items-center`}
      >
        {props.number}
      </span>
    </div>
  );
}

export default DisplayBils;
