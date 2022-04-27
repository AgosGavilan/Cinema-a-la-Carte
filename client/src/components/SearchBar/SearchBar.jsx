import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByTitle, getMovies } from "../../redux/actions/index";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

export default function SearchBar({ currentPage }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setTitle(value);
    if (value.length > 1) {
      dispatch(getMovieByTitle(title))
      .then(() => currentPage(1))
    } else if (value.length < 1) {
      dispatch(getMovies())
      .then(() => currentPage(1))
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search by movie or cast..."
        value={title}
        onChange={handleInput}
        className={styles.inputSearch}
      ></input>
    </div>
  );
}
