import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import image from "../../assets/poster.jpg";
import NavBar from "../NavBar/NavBar";
import "./Form.css";
import LoadScreen from "../Loading/LoadScreen";
import { getActors, getGenres, postMovie } from "../../redux/actions";

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
    errors.img = "Image is invalid, it must be a valid URL";
  } else if (input.urlMovie.length && !regex.test(input.urlMovie)) {
    errors.urlMovie = "Link is invalid, it must be a valid URL";
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
    adult: false,
    original_language: "en",
    price: "",
    urlMovie: "",
    genres: [],
    actors: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);
  const allActors = useSelector((state) => state.actors);

  useEffect(() => {
    dispatch(getActors());
    dispatch(getGenres());
    setLoading(false);
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
        img: "",
        release_date: "",
        overview: "",
        vote_average: "",
        adult: false,
        original_language: "en",
        price: "",
        urlMovie: "",
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
      e.target.value = "";
    }
  };

  const handleList = (e) => {
    e.preventDefault();
    let found = allActors.find((a) => a.name === e.target.value);
    if (found) {
      if (!input.actors.includes(e.target.value)) {
        console.log(e.target.value);
        setInput({
          ...input,
          actors: [...input.actors, e.target.value],
        });
        e.target.value = "";
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

  if (loading) return <LoadScreen />;
  return (
    <div>
      <NavBar />
      <div className="bodyForm">
        <div className="posterBack">
          <img src={input.img || image} className="posterImg" alt="Poster" />
        </div>
        <form className="form" action="" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="title">Add Movie</h1>
          <div className="containerform">
            <div className="group">
              <div className="first">
                <input
                  className={errors.title ? "errorForm" : "inputForm"}
                  type="text"
                  value={input.title}
                  name="title"
                  placeholder="Title..."
                  onChange={(e) => handleChange(e)}
                />
                <strong className="errors">{errors.title}</strong>

                <input
                  className={errors.release_date ? "errorForm" : "inputForm"}
                  type="date"
                  value={input.release_date}
                  name="release_date"
                  placeholder="Release Date..."
                  onChange={(e) => handleChange(e)}
                />
                <strong className="errors">{errors.release_date}</strong>

                <input
                  className={errors.vote_average ? "errorForm" : "inputForm"}
                  type="number"
                  value={input.vote_average}
                  name="vote_average"
                  onChange={(e) => handleChange(e)}
                  step="0.1"
                  min="0"
                  max="10"
                  placeholder="Rating..."
                />
                <strong className="errors">{errors.vote_average}</strong>
              </div>
              <div className="second">
                <input
                  className={errors.price ? "errorForm" : "inputForm"}
                  type="number"
                  name="price"
                  placeholder="Price..."
                  step=".01"
                  min="0.49"
                  max="4.99"
                  value={input.price === 0 ? "" : input.price}
                  onChange={(e) => handleChange(e)}
                />
                <strong className="errors">{errors.price}</strong>

                <input
                  className={errors.img ? "errorForm" : "inputForm"}
                  type="url"
                  value={input.img}
                  name="img"
                  placeholder="Image URL..."
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  maxLength="255"
                />
                <strong className="errors"> {errors.img}</strong>
                <br />
                <input
                  className={errors.urlMovie ? "errorForm" : "inputForm"}
                  type="url"
                  value={input.urlMovie}
                  name="urlMovie"
                  placeholder="Movie URL..."
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  maxLength="255"
                />
                <strong className="errors"> {errors.urlMovie}</strong>
                <input
                  className={errors.actors ? "errorForm" : "inputForm"}
                  type="text"
                  list="actors"
                  name="actors"
                  placeholder="Cast..."
                  onChange={(e) => handleList(e)}
                />

                <datalist className="selectCreate" id="actors">
                  {allActors?.map((allActors) => (
                    <option
                      className="box_opcion"
                      value={allActors.name}
                      key={allActors.id}
                      name="actors"
                    >
                      {allActors.name}
                    </option>
                  ))}
                </datalist>
              </div>
              <div className="options">
                {input.actors.map((a) => (
                  <div className="box_opcion" key={a}>
                    <div className="opcion_title">
                      <p>{a}</p>
                    </div>{" "}
                    <button
                      className="btn_remove"
                      onClick={() => handleDeleteActors(a)}
                      key={a}
                      value={a}
                    >
                      X
                    </button>
                  </div>
                ))}
                <strong className="errors">{errors.actors}</strong>
              </div>

              <div className="groupB">
                <textarea
                  autoCapitalize="sentences"
                  autoComplete="off"
                  maxLength="255"
                  className={errors.overview ? "errorarea" : "textarea"}
                  id=""
                  cols="30"
                  rows="10"
                  value={input.overview}
                  name="overview"
                  placeholder="Description..."
                  onChange={(e) => handleChange(e)}
                ></textarea>
                <strong className="errors">{errors.overview}</strong>
              </div>

              <div className="groupB">
                <select
                  defaultValue=""
                  className="selectCreate"
                  onChange={(e) => handleSelect(e)}
                >
                  <option value="" disabled hidden>
                    Select Genres...
                  </option>
                  {allGenres?.map((allGenres) => (
                    <option
                      value={allGenres.name}
                      key={allGenres.id}
                      name="genres"
                    >
                      {allGenres.name}
                    </option>
                  ))}
                </select>
                <div className="options">
                  {input.genres.map((g) => (
                    <div className="box_opcion" key={g}>
                      <div className="opcion_title">
                        <p>{g}</p>
                      </div>
                      <button
                        className="btn_remove"
                        onClick={() => handleDeleteGenres(g)}
                        key={g}
                        value={g}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
                <strong className="errors">{errors.genres}</strong>
              </div>
              <br />
              <div className="containerButtons">
                <button className="buttonCreate" type="submit">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
