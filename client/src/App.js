import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "../src/components/Home/Home"
import Details from "./components/Details/Details"
import Form from "../src/components/Form/Form";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Slider from "../src/components/Slider/Slider"
import AdminPanel from "../src/components/AdminPanel/AdminPanel"
import Modify from "../src/components/Form/Modify"
import User from "./components/User/User";
import MovieList from "./components/MovieList/MovieList"
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="*" element={<Slider/>}/>
        <Route exact path="/" element={<Slider/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/movies/:id" element={<Details/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/home" element={<Slider/>}/>
        <Route exact path="/user" element={<User/>}/>
        <Route exact path="/modify" element={<Modify/>}/>
        <Route exact path="/movielist" element={<MovieList/>}/>
        <Route exact path="/userlist" element={<UserList/>} />
      </Routes>
    </div>
  );
}

export default App;
