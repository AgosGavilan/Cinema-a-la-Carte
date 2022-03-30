import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
