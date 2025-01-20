import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import "./App.css"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost/>
    </div>
  );
}

export default App;

