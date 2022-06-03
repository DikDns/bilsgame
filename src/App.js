import DisplayBils from "./components/DisplayBils";
import "./css/main.css";

function App() {
  return (
    <main>
      <h1>Hello World</h1>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <DisplayBils number="0" />
        </div>
      </div>
    </main>
  );
}

export default App;
