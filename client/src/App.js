import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home"

import Form from "../src/components/Form/Form";

import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
