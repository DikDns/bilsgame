import React from "react";

const DisplayBils = (props) => {
  const className = `bils ${
    props.selected ? `info text-white shake` : `shake`
  }`;

  return (
    <div className={className} id={props.id}>
      {props.name}
    </div>
  );
};

export default DisplayBils;
