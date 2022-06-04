import React from "react";

function DisplayBils({ gameobject }) {
  const [state, setState] = React.useState({
    shake: false,
    selected: false,
  });

  function handleOnClick(event) {
    event.preventDefault();

    setState((prevState) => ({
      selected: !prevState.selected,
      shake: true,
    }));
  }

  function handleAnimationEnd(event) {
    event.preventDefault();
    setState((prevState) => ({
      selected: prevState.selected,
      shake: false,
    }));
  }

  React.useState(() => {}, [state]);

  return (
    <div
      id={gameobject.id}
      className={`${state.shake ? `shake` : ``} bils my-2 ${
        state.selected ? `bg-info text-white` : ``
      }`}
      onClick={(event) => handleOnClick(event)}
      onAnimationEnd={(event) => handleAnimationEnd(event)}
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
