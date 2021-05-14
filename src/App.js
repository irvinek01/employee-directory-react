import React from "react";
import Nav from "./components/Nav";
import Searchform from "./components/Searchform";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Searchform/>
      <Results/>
    </div>
  );
}

export default App;
