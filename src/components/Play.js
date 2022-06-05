import React from "react";
import { Bils, spawnBils, DisplayBils } from "./Bils.js";
import Timer from "./Timer.js";

const scaleBetween = (unscaledNum, minAllowed, maxAllowed, min, max) =>
  ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed;

const randomize = (game, setBils) => {
  if (game.timer % 2 === 0) {
    setBils((prevBils) => {
      return prevBils.map((bil) => {
        let random = Math.round(Math.random() * 10);
        random = random === 10 ? --random : random;
        if (!bil.selected) {
          bil.setName(random);
        }
        return bil;
      });
    });
  }
};

// Play Components
const Play = (props) => {
  // Play State
  const [player, setPlayer] = React.useState({
    clickedDuration: 1000,
    lastTimeClicked: 0,
  });

  const [game, setGame] = React.useState({
    maxBils: 100,
    play: props.play,
    score: 0,
    timer: 0,
  });

  const [bils, setBils] = React.useState(spawnBils(10));

  React.useState(() => {
    const timer = new Timer();
    timer.start();
    setInterval(() => {
      const timeInSeconds = Math.round(timer.getTime() / 1000);
      setGame((prevGame) => ({
        ...prevGame,
        timer: timeInSeconds,
      }));
    }, 100);
    setInterval(() => {
      randomize(game, setBils);
    }, 2000);
  }, []);

  const handleOnClick = (event, gameObject) => {
    event.preventDefault();

    gameObject.setSelected(!gameObject.selected);
    // Set the volume to the lowest (0.1)
    gameObject.getSound().clicked.volume = 0.1;
    // To reset if the click was too fast
    gameObject.getSound().clicked.load();
    // Play the clicked effect
    gameObject.getSound().clicked.play();

    setBils((prevBils) => {
      return prevBils.map((prevBil) => {
        return prevBil.id === gameObject.id ? gameObject : prevBil;
      });
    });

    console.log(bils);
  };

  const handleOnAnimationEnd = (event, gameObject) => {
    event.preventDefault();
    event.target.classList.remove("shake");
  };

  return (
    <div className="play">
      <div className="container py-5">
        <div className="row py-2">
          <h1 className="text-center">Timer {`${game.timer}`}</h1>
        </div>
        <div className="play-field row d-flex justify-content-center align-items-center flex-column">
          {bils.map((bil, i) => (
            <DisplayBils
              key={i}
              gameObject={bil}
              handleClick={handleOnClick}
              handleAnimationEnd={handleOnAnimationEnd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Play;
