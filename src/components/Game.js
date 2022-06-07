import React from "react";
import "../css/main.css";

const Game = () => {
  const handlePlay = (event) => {
    event.preventDefault();
    console.log("hello play");
  };

  return (
    <main>
      <div className={`py-5`}>
        <h1 className="mb-5 title">Prototype Dn-1</h1>
        <div className="mb-4 justify-content-center">
          <button
            type="button"
            className="menuBtn menuBtn-primary"
            onClick={handlePlay}
          >
            Play
          </button>
        </div>
      </div>
    </main>
  );
};

export default Game;
