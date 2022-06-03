import React from "react";
import DisplayBils from "./components/DisplayBils";
import "./css/main.css";

function App() {
  const [selected, setSelected] = React.useState(false);

  function handleBilsSelected(event, props) {
    event.preventDefault();
    setSelected((prevSelected) => !prevSelected);
    console.log(props);
  }

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          <DisplayBils
            index="0"
            number="4"
            selected={selected}
            onClick={handleBilsSelected}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
