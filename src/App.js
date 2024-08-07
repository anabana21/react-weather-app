import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />

      <footer>
        This project was coded by
        <a href="https://github.com/anabana21" target="_blank" rel="noopener noreferrer"> Ana Vogt</a> and is 
        <a href="https://github.com/anabana21/react-weather-app" target="_blank" rel="noopener noreferrer"> open-sourced on Github</a> and hosted on 
        <a href="https://willowy-dusk-b8e010.netlify.app/" target="_blank" rel="noopener noreferrer"> Netlify</a>
        </footer>
        </div>
    </div>
    );
    }