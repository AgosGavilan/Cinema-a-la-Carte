import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home"
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
