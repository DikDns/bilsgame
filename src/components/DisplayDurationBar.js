import React from "react";

function DisplayDurationClicked(props) {
  return (
    <div className="duration-box w-100">
      <div style={props.style} className="duration-bar bg-secondary"></div>
    </div>
  );
}

export default DisplayDurationClicked;
