import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import image from "../../assets/poster.jpg"
// import styles from "./Form.module.css"
import "./Form.css"


import { getActors, getGenres, postMovie } from "../../redux/actions";

/*release_date 
title
img
description (overview)
generos
actors
rating: (vote_average)*/

const validate = (input) => {
  let errors = {};

  if (!input.title) {
    errors.title = "Title is required";
  }

  if (!input.release_date) {
    errors.release_date = "Release date is required";
  }

  if (!input.overview) {
    errors.overview = "Description is required";
  }

  if (!input.vote_average) {
    errors.vote_average = "Rating is required";
  } else if (input.vote_average <= 0) {
    errors.vote_average = "Rating should be greater than 0";
  } else if (input.vote_average >= 10) {
    errors.vote_average = "Rating must be between 0 and 10";
  }

  if (!input.price) {
    errors.price = "Price is required";
  } else if (input.price <= 0) {
    errors.price = "Price should be greater than 0";
  } else if (input.price >= 5) {
    errors.price = "Price must be between $0.49 and $4.99";
  }

  const regex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  if (input.img.length && !regex.test(input.img)) {
    errors.img = "img is invalid, it must be an URL";
  }

  return errors;
};


/* className={styles.title} */


const Form = () => {
  const [input, setInput] = useState({
    title: "",
    img: "",
    release_date: "",
    overview: "",
    vote_average: "",
    original_language: "",
    price: "",
    genres: [],
    actors: [],
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);
  const allActors = useSelector((state) => state.actors);

  useEffect(() => {
    dispatch(getActors());
    dispatch(getGenres());
  }, [dispatch]);


/* id,title,adult (true o false), img (url), overview (descripcion de la pelicula), release_date (fecha de lanzamiento), original_language ("en" si es en ingles o "es" si es en español), vote_average (numero del 1 al 10),price (numero entre 0,5 y 4,99)] */

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = Object.keys(validate(input));
    if (error.length !== 0 || !input.genres.length || !input.actors.length) {
      Swal.fire({
        title: "Some fields are wrong or empty",
        icon: "error",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    } else {
      dispatch(postMovie(input));
      setInput({
        title: "",
        img: "" || image,
        release_date: "",
        Overview: "",
        vote_average: "",
        adult: false,
        original_language: "en",
        price: "",
        genres: [],
        actors: [],
      });
      Swal.fire({
        title: "Movie created successfully",
        icon: "success",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    if (!input.genres.includes(e.target.value)) {
      console.log(e.target.value);
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }
  };

  const handleList = (e) => {
    e.preventDefault();
    let found = allActors.find((a) => a.name === e.target.value )
    if (found) {
      if (!input.actors.includes(e.target.value)) {
        console.log(e.target.value);
        setInput({
          ...input,
          actors: [...input.actors, e.target.value],
        });
        e.target.value = ""
      }
    }
  };

  const handleDeleteGenres = (el) => {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== el),
    });
  };

  const handleDeleteActors = (el) => {
    setInput({
      ...input,
      actors: input.actors.filter((a) => a !== el),
    });
  };

  return (
    <div className="bodyForm"> 
    {/* <div className="container_left"> </div> */}

      <form className="form"  action="" onSubmit={(e) => handleSubmit(e)}> 
      <h1 className="title">Add Movie</h1>
    <div className="containerform"> 
    <div className="group">
        <label className="inputLabel">Title: </label>
        <input
           className="inputForm"
          type="text"
          value={input.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <strong className="errors">{errors.title}</strong>
      </div>

      <div className="group">
        <label className="inputLabel">Release date: </label>
        <input
           className="inputForm"
          type="date"
          value={input.release_date}
          name="release_date"
          onChange={(e) => handleChange(e)}
        />
        <strong className="errors">{errors.release_date}</strong>
        </div>

        <div className="group">
        <label className="inputLabel">Description: </label>
        <textarea autoCapitalize="sentences" autoComplete="off"
          maxLength="255" className="textarea" id="" cols="30" rows="10"  value={input.overview}
          name="overview"
          onChange={(e) => handleChange(e)}></textarea>     
        <strong className="errors">{errors.overview}</strong>
        </div>
    
        <div className="group">
        <label className="inputLabel">Rating: </label>
        <input
        className="inputForm"
          type="number"
          value={input.vote_average}
          name="vote_average"
          onChange={(e) => handleChange(e)}
          step="0.1"
          min="0"
          max="10"
          placeholder="1.7"
        />
        <strong className="errors">{errors.vote_average}</strong>

        </div>
        <div className="group">
        <label className="inputLabel">Price: </label>
        <input
        className="inputForm"
          type="number"
          name="price"
          placeholder="1.99"
          step=".01"
          min="0.49"
          max="4.00"          
          value={input.price === 0 ? "" : input.price}
          onChange={(e) => handleChange(e)}
        />
        <strong className="errors">{errors.price}</strong>
        </div>
        <div className="group">
        <label className="inputLabel">Image URL: </label>
        <input
        className="inputForm"
          type="url"
          value={input.img}
          name="img"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          maxLength="255"
        />
        <br />
        <div className="container_image">
        <img src={input.img || image } alt="poster" width="auto" height="300px" />
        </div>
        <strong className="errors"> {errors.img}</strong>
    </div>

        <div className="group">
          <label className="inputLabel">
            Actors:{" "}
            </label>
            <input
            className="inputForm"
              type="text"
              list="actors"
              name="actors"
              onChange={(e) => handleList(e)}
            />
         
          <datalist className="selectCreate" id="actors">
            {allActors?.map((allActors) => (
              <option className="box_opcion" value={allActors.name} key={allActors.id} name="actors">
                {allActors.name}
              </option>
            ))}
          </datalist>
          <div className="options" >
            {input.actors.map((a) => (
              <div className="box_opcion"  key={a}>
                <div className="opcion_title">
                  <p>{a}</p>
                </div>
                {" "}
                <button className="btn_remove" onClick={() => handleDeleteActors(a)} key={a} value={a}>
                  X
                </button>
              </div>
            ))}
          </div>
          <strong className="errors">{errors.actors}</strong>
<br /><br />
        <div className="group" >
          <label className="inputLabel">Genres: </label>
          <select
            defaultValue=""
            className="selectCreate"
            onChange={(e) => handleSelect(e)}
          >
            <option value="" disabled hidden>
              Select Genres...
            </option>
            {allGenres?.map((allGenres) => (
              <option value={allGenres.name} key={allGenres.id} name="genres">
                {allGenres.name}
              </option>
            ))}
          </select>
          <div className="options" >
            {input.genres.map((g) => (
              <div className="box_opcion" key={g}>
                <div className="opcion_title">
                  <p>{g}</p>
                </div>
                <button  className="btn_remove"  onClick={() => handleDeleteGenres(g)} key={g} value={g}>
                  X
                </button>
              </div>
            ))}
          </div>
          <strong className="errors">{errors.genres}</strong>
        </div>
<br />
          <div  className="containerButtons">
            <button className="buttonCreate" type="submit">Create</button>
          </div>
        </div>
      </div>     
      </form>
    </div>
  );
};

export default Form;
