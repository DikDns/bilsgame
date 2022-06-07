import React from "react";
import "../css/main.css";

import DisplayBils from "./DisplayBils.js";
import { BilsObj } from "./Bils.js";

class GameSettings {
  constructor() {
    this.playState = false;
  }

  setPlayState(play = true) {
    this.playState = play;
  }

  getPlayState() {
    return this.playState;
  }
}

const GAME_SETTINGS = new GameSettings();
const GAME_OBJECT = { bilsObj: undefined };

const Game = () => {
  const [game, setGame] = React.useState({
    gameObj: GAME_OBJECT,
    settings: GAME_SETTINGS,
  });

  const checkBils = () => {
    if (game.gameObj.bilsObj === undefined) {
      return ``;
    } else {
      return game.gameObj.bilsObj.bils.map((bil, i) => {
        return (
          <DisplayBils
            key={i}
            gameObj={bil}
            onClick={handleOnClick}
            onAnimationEnd={handleOnAnimationEnd}
          />
        );
      });
    }
  };

  const handlePlay = (event) => {
    event.preventDefault();

    GAME_SETTINGS.setPlayState(!GAME_SETTINGS.playState);
    setGame((prevGame) => ({ settings: GAME_SETTINGS, ...prevGame }));

    if (game.settings.playState) {
      console.log("started");
      GAME_OBJECT.bilsObj = new BilsObj(3);
      setGame((prevGame) => ({ gameObj: GAME_OBJECT, ...prevGame }));
    } else {
      GAME_OBJECT.bilsObj = undefined;
      setGame((prevGame) => ({ gameObj: GAME_OBJECT, ...prevGame }));
    }
  };

  React.useEffect(() => {
    console.log(game);
  }, [game]);

  const handleOnClick = (event, localGameObj) => {
    console.log("clicked", localGameObj);

    const bil = GAME_OBJECT.bilsObj.bils.at(localGameObj.id);
    bil.selected = !bil.selected;
    setGame((prevGame) => ({ gameObj: GAME_OBJECT, ...prevGame }));
  };

  const handleOnAnimationEnd = (event) => {
    event.target.classList.remove("shake");
  };

  return (
    <main>
      <div className={`d-flex flex-column align-items-center py-5`}>
        <h1 className="mb-5 title">Prototype Dn-1</h1>
        <div className="mb-4 justify-content-center">
          <button
            type="button"
            className="menuBtn menuBtn-primary"
            onClick={handlePlay}
          >
            {game.settings.playState ? "Stop" : "Start"}
          </button>
        </div>
        {checkBils()}
      </div>
    </main>
  );
};

export default Game;
