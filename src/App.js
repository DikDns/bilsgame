import React from "react";
import DisplayBils from "./components/DisplayBils.js";
import Bils from "./gameObjects/Bils.js";
import "./css/main.css";

import bilsClicked from "./assets/music/sfx/bils-clicked.wav";
import bilsActivated from "./assets/music/sfx/bils-activated.wav";
import bilsDuplicated from "./assets/music/sfx/bils-duplicated.wav";

function App() {
  const [game, setGame] = React.useState({
    player: {
      highscore: 0,
    },
  });
  const [bils, setBils] = React.useState([
    {
      id: 1,
      name: "4",
    },
    {
      id: 2,
      name: "1",
    },
  ]);

  const bilsSound = {
    clicked: new Audio(bilsClicked),
    activated: new Audio(bilsActivated),
    duplicated: new Audio(bilsDuplicated),
  };

  const testBils = new Bils(4, "7", false, bilsSound);

  console.log(testBils);
  console.log(testBils.get.name());
  console.log(testBils.set.name("1"));
  console.log(testBils.get.name());

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          {bils.map((item, index) => (
            <DisplayBils key={index} id={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
