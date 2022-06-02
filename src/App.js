import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./css/main.css";

function App() {
  return (
    <main>
      <h1>Hello World</h1>
      <FontAwesomeIcon icon={brands("twitter")}></FontAwesomeIcon>
    </main>
  );
}

export default App;
