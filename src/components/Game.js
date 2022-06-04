import React from "react";
import "../css/main.css";

const Game = () => {
  const handlePlay = (e) => {
    e.preventDefault();
    console.log("Play");
  };
  const handleSettings = (e) => {
    e.preventDefault();
    console.log("Settings");
  };
  const handleCredits = (e) => {
    e.preventDefault();
    console.log("Credits");
  };

  return (
    <main>
      <div className="main-menu py-5">
        <div className="play row mb-4 justify-content-center">
          <button
            type="button"
            className="menuBtn menuBtn-primary"
            onClick={handlePlay}
          >
            Play
          </button>
        </div>
        <div className="settings row mb-3 justify-content-center">
          <button
            type="button"
            className="menuBtn menuBtn-secondary"
            onClick={handleSettings}
          >
            Settings
          </button>
        </div>
        <div className="credits row mb-3 justify-content-center">
          <button
            type="button"
            className="menuBtn menuBtn-secondary"
            onClick={handleCredits}
          >
            Credits
          </button>
        </div>
      </div>
    </main>
  );
};

export default Game;
