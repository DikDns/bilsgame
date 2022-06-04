import React from "react";
import DisplayBils from "./components/DisplayBils.js";
import Bils from "./gameObjects/Bils.js";
import "./css/main.css";

import bilsClicked from "./assets/music/sfx/bils-clicked.wav";
import bilsActivated from "./assets/music/sfx/bils-activated.wav";
import bilsDuplicated from "./assets/music/sfx/bils-duplicated.wav";

const bilsSound = {
  clicked: new Audio(bilsClicked),
  activated: new Audio(bilsActivated),
  duplicated: new Audio(bilsDuplicated),
};

function App() {
  const [inGame, setInGame] = React.useState({
    durationClicked: 500,
    lastTimeClicked: 0,
  });

  const [bils, setBils] = React.useState([
    new Bils(0, "0", false, bilsSound),
    new Bils(1, "7", false, bilsSound),
    new Bils(2, "2", false, bilsSound),
    new Bils(3, "9", false, bilsSound),
    new Bils(4, "1", false, bilsSound),
    new Bils(5, "3", false, bilsSound),
    new Bils(6, "4", false, bilsSound),
  ]);

  const handleOnClick = async (event, gameObject) => {
    event.preventDefault();

    const time = new Date().getTime();
    const duration = inGame.durationClicked + inGame.lastTimeClicked;

    if (time > duration) {
      setInGame((prevInGame) => {
        console.log(prevInGame);
        return {
          ...prevInGame,
          lastTimeClicked: time,
        };
      });

      await gameObject.setSelected(!gameObject.selected);
      // Set the volume to the lowest (0.1)
      gameObject.getSound().clicked.volume = 0.1;
      // To reset if the click was too fast
      await gameObject.getSound().clicked.load();
      // Play the clicked effect
      await gameObject.getSound().clicked.play();

      setBils((prevBils) => {
        return prevBils.map((prevBil) => {
          return prevBil.id === gameObject.id ? gameObject : prevBil;
        });
      });
    }
  };

  const handleAnimationEnd = (event, gameObject) => {
    event.preventDefault();
    event.target.classList.remove("shake");
  };

  return (
    <main>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-center">Hello World</h1>
          {bils.map((bil, index) => (
            <DisplayBils
              key={index}
              gameObject={bil}
              handleOnClick={handleOnClick}
              handleAnimationEnd={handleAnimationEnd}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
