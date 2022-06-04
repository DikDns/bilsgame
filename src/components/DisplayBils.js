import React from "react";

function DisplayBils({ gameobject, handleOnClick, handleAnimationEnd }) {
  return (
    <div
      id={gameobject.id}
      className={`bils my-2 ${
        gameobject.selected ? `shake bg-info text-white` : `shake`
      }`}
      onClick={(event) => handleOnClick(event, gameobject)}
      onAnimationEnd={(event) => handleAnimationEnd(event, gameobject)}
    >
      <span
        className={`h-100 fw-bold d-flex justify-content-center align-items-center`}
      >
        {gameobject.name}
      </span>
    </div>
  );
}

export default DisplayBils;
