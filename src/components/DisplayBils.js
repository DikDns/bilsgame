import React from "react";

const DisplayBils = (props) => {
  const className = `bils ${
    props.gameObj.selected ? `bg-info text-white shake` : `shake`
  }`;

  return (
    <div
      className={className}
      id={props.gameObj.id}
      onClick={(event) => props.onClick(event, props.gameObj)}
      onAnimationEnd={(event) => props.onAnimationEnd(event)}
    >
      {props.gameObj.name}
    </div>
  );
};

export default DisplayBils;
