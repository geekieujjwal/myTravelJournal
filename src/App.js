import "./App.css";
import Header from "./Header";
import Section from "./Section";
import data from "./data.js";
import { useState } from "react";

function App() {
  const dataElements = data.map((place) => {
    return <Section key={place.id} item={place} />;
  });

  return (
    <div className="app">
      <Header />
      {dataElements}
    </div>
  );
}

export default App;
