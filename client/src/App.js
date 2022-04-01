import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home"
import Details from "../src/components/Details/Details"
import Form from "../src/components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/movies/:id" element={<Details/>} />
      </Routes>

    </div>
  );
}

export default App;
