import React from "react";
import DisplayBils from "./components/DisplayBils.js";
import DisplayDurationBar from "./components/DisplayDurationBar.js";
import Bils from "./gameObjects/Bils.js";
import "./css/main.css";

function App() {
  const [inGame, setInGame] = React.useState({
    clickedDuration: 1000,
    lastTimeClicked: 0,
  });

  const [bils, setBils] = React.useState([
    new Bils(0, "0", false, bilsSound),
    new Bils(1, "7", false, bilsSound),
    new Bils(2, "2", false, bilsSound),
    new Bils(3, "9", false, bilsSound),
  ]);

  const [durationBarWidth, setDurationBarWidth] = React.useState({
    width: "0%",
  });

  const handleOnClick = async (event, gameObject) => {
    event.preventDefault();

    const time = new Date().getTime();
    const duration = inGame.clickedDuration + inGame.lastTimeClicked;

    if (time > duration) {
      durationBar(setDurationBarWidth, inGame.clickedDuration);
      setInGame((prevInGame) => {
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
    } else {
      event.target.classList.add("shake");
    }
  };

  const handleAnimationEnd = (event, gameObject) => {
    event.preventDefault();
    event.target.classList.remove("shake");
  };

  return (
    <main>
      <DisplayDurationBar style={durationBarWidth} />
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
