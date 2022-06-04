import React from "react";
import "../css/main.css";
import btnClickedSfx from "../assets/music/sfx/btn-clicked.wav";

const btnClicked = (target, sfx) => {
  sfx.load();
  sfx.play();
  target.classList.add("btn-clicked");
  setTimeout(() => {
    target.classList.remove("btn-clicked");
  }, 250);
};

const Game = () => {
  const btnSfx = new Audio(btnClickedSfx);

  const handlePlay = (e) => {
    e.preventDefault();
    btnClicked(e.target, btnSfx);
    console.log("Play");
  };
  const handleSettings = (e) => {
    e.preventDefault();
    btnClicked(e.target, btnSfx);
    console.log("Settings");
  };
  const handleCredits = (e) => {
    e.preventDefault();
    btnClicked(e.target, btnSfx);
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
