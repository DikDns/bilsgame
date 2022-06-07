import React from "react";

const DisplayBils = (props) => {
  return (
    <div className="bils" id={props.id}>
      {props.name}
    </div>
  );
};

export default DisplayBils;
