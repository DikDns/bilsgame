import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Game from "./components/Game.js";
import "./assets/fonts/SplineSans-Light.ttf";
import "./assets/fonts/SplineSans-Medium.ttf";
import "./assets/fonts/SplineSans-Regular.ttf";
import "./assets/fonts/SplineSans-SemiBold.ttf";
import "./assets/fonts/SplineSans-Bold.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
