import { Route, Routes, Navigate } from "react-router-dom"
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
import Verify from "./components/Mailing/Verify";
import { useSelector } from "react-redux";

function App() {
  const userLogged = useSelector((state) => state.user)
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Slider />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/movies/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/verify" element={<Verify />} />
        <Route exact path="/form" element={userLogged && userLogged.role !== "USER_ROLE" ? <Form /> : <Navigate to="/" />} />
        <Route exact path="/modify" element={userLogged && userLogged.role !== "USER_ROLE" ? <Modify /> : <Navigate to="/" />} />
        <Route exact path="/movielist" element={userLogged && userLogged.role !== "USER_ROLE" ? <MovieList /> : <Navigate to="/" />} />
        <Route exact path="/userlist" element={userLogged && userLogged.role === "SUPER_ROLE" ? <UserList /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;