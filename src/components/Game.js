import React from "react";
import "../css/main.css";
import btnClickedSfx from "../assets/music/sfx/btn-clicked.wav";

import Play from "./Play.js";

const btnClicked = (target, sfx) => {
  sfx.load();
  sfx.play();
  target.classList.add("btn-clicked");
  setTimeout(() => {
    target.classList.remove("btn-clicked");
  }, 100);
};

const Game = () => {
  const [game, setGame] = React.useState({
    btnSfx: "",
    play: false,
  });
  React.useEffect(() => {
    setGame((prevGame) => {
      return {
        ...prevGame,
        btnSfx: new Audio(btnClickedSfx),
      };
    });
  }, []);

  const handlePlay = (e) => {
    e.preventDefault();

    btnClicked(e.target, game.btnSfx);

    setTimeout(() => {
      setGame((prevGame) => ({
        ...prevGame,
        play: !prevGame.play,
      }));
    }, 500);
  };

  return (
    <main>
      <div className={`${game.play ? `hide` : ``} main-menu py-5`}>
        <h1 className="mb-5 title">Prototype Dn-1</h1>
        <div className="play mb-4 justify-content-center">
          <button
            type="button"
            className="menuBtn menuBtn-primary"
            onClick={handlePlay}
          >
            Play
          </button>
        </div>
      </div>
      {game.play ? <Play play={game.play} /> : ""}
    </main>
  );
};

export default Game;
