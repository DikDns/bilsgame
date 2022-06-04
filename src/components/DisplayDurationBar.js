import React from "react";

function DisplayDurationClicked(props) {
  const barStyle = {
    width: "95%",
  };

  return (
    <div className="duration-box w-100">
      <div style={barStyle} className="duration-bar bg-secondary"></div>
    </div>
  );
}

export default DisplayDurationClicked;
