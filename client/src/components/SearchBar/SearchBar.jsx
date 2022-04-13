import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByTitle, getMovies } from "../../redux/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setTitle(value);
    if (value.length > 1) {
      dispatch(getMovieByTitle(title));
    } else if (value.length < 1) {
      dispatch(getMovies());
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Ej: 'The Godfather'"
        value={title}
        onChange={handleInput}
        className={styles.inputSearch}
      ></input>
      {/* <button className={styles.btnSearch}  type="submit" onClick={(e) => handleSubmit(e)}><FontAwesomeIcon icon={faSearch} />
      </button> */}
    </div>
  );
}
