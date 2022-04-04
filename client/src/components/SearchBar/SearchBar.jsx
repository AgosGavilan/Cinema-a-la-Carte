import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByTitle } from "../../redux/actions/index" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

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
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Ej: 'The Godfather'"
        value={title}
        onChange={(e) => handleInput(e)}
        className={styles.inputSearch}
      ></input>
      <button className={styles.btnSearch}  type="submit" onClick={(e) => handleSubmit(e)}><FontAwesomeIcon icon={faSearch} />
      </button>
    
    </div>
  );
}