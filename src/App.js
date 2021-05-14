import React from "react";
import Nav from "./components/Nav";
import Searchform from "./components/Searchform";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Searchform/>
      <Table/>
    </div>
  );
}

export default App;
