import React from "react";

const Game = () => {
  return (
    <main>
      <div className="main-menu container">
        <div className="play row my-4">
          <button type="button" className="btn btn-primary">
            Play
          </button>
        </div>
        <div className="setting row my-3">
          <button type="button" className="btn btn-secondary">
            Setting
          </button>
        </div>
        <div className="credit row my-3">
          <button type="button" className="btn btn-secondary">
            Credit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Game;
