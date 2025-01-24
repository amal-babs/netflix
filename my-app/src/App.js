import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import {action,comedy,originals} from './urls'
import "./App.css"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={originals} title="Netflix Originals" />
     <Rowpost url={action} title="Action" isSmall />
     <Rowpost url={comedy} title="comdey" isSmall />
    </div>
  );
}

export default App;

