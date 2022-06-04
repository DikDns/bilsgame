import React from "react";

function DisplayBils({ gameObject, handleOnClick, handleAnimationEnd }) {
  return (
    <div
      id={gameObject.id}
      className={`bils my-2 ${
        gameObject.selected ? `shake bg-info text-white` : `shake`
      }`}
      onClick={(event) => handleOnClick(event, gameObject)}
      onAnimationEnd={(event) => handleAnimationEnd(event, gameObject)}
    >
      <span
        className={`h-100 fw-bold d-flex justify-content-center align-items-center`}
      >
        {gameObject.name}
      </span>
    </div>
  );
}

export default DisplayBils;
