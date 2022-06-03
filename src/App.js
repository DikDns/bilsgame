import React from "react";
import DisplayBils from "./components/DisplayBils.js";
import "./css/main.css";

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
    {
      id: 3,
      name: "8",
    },
    {
      id: 4,
      name: "1",
    },
    {
      id: 5,
      name: "0",
    },
  ]);

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
