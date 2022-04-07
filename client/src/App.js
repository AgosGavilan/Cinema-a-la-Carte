import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home"
import Details from "./components/Details/Details"
import Form from "../src/components/Form/Form";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/*  <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/movies/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
