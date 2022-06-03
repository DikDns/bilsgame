import React from "react";
import DisplayBils from "./components/DisplayBils.js";
import "./css/main.css";

function App() {
  const [game, setGame] = React.useState({
    player: {
      highscore: 0,
    },
    bils: [
      {
        id: 1,
        name: "4",
        selected: false,
      },
      {
        id: 2,
        name: "1",
        selected: false,
      },
      {
        id: 3,
        name: "8",
        selected: false,
      },
    ],
  });

  function handleBilsClicked(event, id) {
    event.preventDefault();
    setGame((prevGame) => {
      prevGame.bils = prevGame.bils.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : { ...item }
      );
      return prevGame;
    });
  }

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          {game.bils.map((item, index) => (
            <DisplayBils key={index} id={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
