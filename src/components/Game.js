import React from "react";
import "../css/main.css";

const Game = () => {
  return (
    <main>
      <div className="main-menu py-5">
        <div className="play row mb-4 justify-content-center">
          <button type="button" className="menuBtn menuBtn-primary">
            Play
          </button>
        </div>
        <div className="settings row mb-3 justify-content-center">
          <button type="button" className="menuBtn menuBtn-secondary">
            Settings
          </button>
        </div>
        <div className="credits row mb-3 justify-content-center">
          <button type="button" className="menuBtn menuBtn-secondary">
            Credits
          </button>
        </div>
      </div>
    </main>
  );
};

export default Game;
