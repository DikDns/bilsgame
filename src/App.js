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
  // const [game, setGame] = React.useState({
  //   player: {
  //     highscore: 0,
  //   },
  // });
  const [bils, setBils] = React.useState([
    new Bils(0, "0", false, bilsSound),
    new Bils(1, "7", false, bilsSound),
    new Bils(2, "2", false, bilsSound),
    new Bils(3, "9", false, bilsSound),
  ]);

  const handleOnClick = async (event, gameObject) => {
    event.preventDefault();

    await gameObject.setSelected(!gameObject.selected);
    // Set the volume to the lowest (0.1)
    gameObject.getSound().clicked.volume = 0.1;
    // To reset if the click was too fast
    await gameObject.getSound().clicked.load();
    // Play the clicked effect
    await gameObject.getSound().clicked.play();

    await setBils((prevBils) => {
      return prevBils.map((prevBil) => {
        return prevBil.id === gameObject.id ? gameObject : prevBil;
      });
    });
  };

  const handleAnimationEnd = (event, gameObject) => {
    event.preventDefault();
  };

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
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
