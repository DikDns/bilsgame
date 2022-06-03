import React from "react";
import DisplayBils from "./components/DisplayBils";
import "./css/main.css";

function App() {
  const [game, setGame] = React.useState({
    player: {
      highscore: 0,
    },
    bils: [
      {
        name: "4",
        selected: false,
      },
      {
        name: "1",
        selected: false,
      },
      {
        name: "8",
        selected: false,
      },
    ],
  });

  function handleBilsClicked(event) {
    event.preventDefault();
    setGame((prevGame) => {
      console.log(prevGame);
      // return !prevGame.bils[0].selected;
    });
  }

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          {game.bils.map((bils, index) => {
            return (
              <DisplayBils
                index={index}
                number={bils.name}
                selected={bils.selected}
                onClick={handleBilsClicked}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
