import DisplayBils from "./components/DisplayBils";
import "./css/main.css";

function App() {
  function handleBilsSelected(event, index) {
    event.preventDefault();
    console.log("Clicked index-" + index);
  }

  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          <DisplayBils index="0" number="4" onClick={handleBilsSelected} />
          <DisplayBils index="1" number="3" onClick={handleBilsSelected} />
          <DisplayBils index="2" number="9" onClick={handleBilsSelected} />
          <DisplayBils index="3" number="0" onClick={handleBilsSelected} />
          <DisplayBils index="4" number="7" onClick={handleBilsSelected} />
        </div>
      </div>
    </main>
  );
}

export default App;
