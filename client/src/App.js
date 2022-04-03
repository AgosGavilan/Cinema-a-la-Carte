import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home.jsx"

import Form from "../src/components/Form/Form";

import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
