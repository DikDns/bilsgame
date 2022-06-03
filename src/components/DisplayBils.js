import React from "react";

function DisplayBils(props) {
  const [shake, setShake] = React.useState(true);

  function handleAnimationEnd(event) {
    event.preventDefault();
    setShake(() => false);
  }

  React.useEffect(() => {
    setShake(() => true);
  }, [props.selected]);

  return (
    <div
      id={props.index}
      className={`${shake ? `shake` : ``} bils my-2 ${
        props.selected ? `bg-info text-white` : ``
      }`}
      onClick={(event) => props.onClick(event, props)}
      onAnimationEnd={(event) => handleAnimationEnd(event)}
    >
      <span
        className={`h-100 fw-bold d-flex justify-content-center align-items-center`}
      >
        {props.number}
      </span>
    </div>
  );
}

export default DisplayBils;
