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
  const [bils, setBils] = React.useState([new Bils(0, "0", false, bilsSound)]);

  function handleOnClick(event, gameObject) {
    event.preventDefault();

    console.log(gameObject);
    gameObject.setSelected(!gameObject.selected);
  }

  function handleAnimationEnd(event, gameObject) {
    event.preventDefault();
  }

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          {bils.map((bil, index) => (
            <DisplayBils
              key={index}
              gameobject={bil}
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
