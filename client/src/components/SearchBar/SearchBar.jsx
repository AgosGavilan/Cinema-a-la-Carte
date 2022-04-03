import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByTitle } from "../../redux/actions/index" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 1) {
      alert("Field is empty");
    }
    dispatch(getMovieByTitle(title));
    console.log(title);
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Ej: 'The Godfather'"
        value={title}
        onChange={(e) => handleInput(e)}
        className="input"
      ></input>
      <button className="btnSearch"  type="submit" onClick={(e) => handleSubmit(e)}><FontAwesomeIcon icon={faSearch} />
      </button>
    
    </div>
  );
}