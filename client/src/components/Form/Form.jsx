import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"

import { getActors, getGenres, postMovie } from "../../redux/actions";

/*
release_date 
title
image
description (overview)
generos
actors
rating: (vote_average)*/

const validate = (input) => {
  let errors = {};

  if (!input.title) {
    errors.title = "title is required";
  }

  if (!input.release_date) {
    errors.release_date = "Release date is required";
  }

  if (!input.description) {
    errors.description = "Description is required";
  }

  if (!input.rating) {
    errors.rating = "rating is required";
  } else if (input.rating <= 0) {
    errors.rating = "Rating should be greater than 0";
  }


  const regex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  if (input.image.length && !regex.test(input.image)) {
    errors.image = "Image is invalid, it must be an URL";
  }
//poster por defecto
  return errors;
}

const Form = () => {
  const [input, setInput] = useState({
    title: "",
    image: "",
    release_date: "",
    description: "",
    rating: "",
    genres: [],
    actors: [],
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const actors = useSelector((state) => state.actors);

  useEffect(() => {
    dispatch(getActors());
    dispatch(getGenres());
  }, [dispatch]);

  const handleSubmit = (e)  => {
    e.preventDefault();
    let error = Object.keys(validate(input));
    if (error.length !== 0 || !input.genres.length || !input.actors.length) {
      Swal.fire({
        title: "Some fields are wrong or empty",
        icon: "error",
        position: "center",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
return

    } else {
      dispatch(postMovie(input));
      setInput({
        title: "",
        image: "",
        release_date: "",
        description: "",
        rating: "",
        genres: [],
        actors: [],
      });
            Swal.fire({
        title: "Movie created successfully",
        icon: "success",
        position: "center",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
return
      }
  }

const  handleChange = (e) => {
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
  }

 const handleSelect = (e) => {
  e.preventDefault();
    if (!input.genres.includes(e.target.value)) {
      console.log(e.target.value);
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }
  }

  const handleList = (e) => {
    e.preventDefault();
    if (!input.actors.includes(e.target.value)) {
      console.log(e.target.value);
      setInput({
        ...input,
        actors: [...input.actors, e.target.value],
      });
    }
  }



  const handleDelete = (el) => {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== el),
      actors: input.actors.filter((a) => a !== el),
    });
  }

  // const handleDeleteActors = (t) => {
  //   setInput({
  //     ...input,
  //     genres: input.genres.filter((g) => g !== t),
  //   });
  // }

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label>Title: </label>
        <input
          type="text"
          value={input.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <strong className="errors">{errors.title}</strong>
        <label>Release date: </label>
        <input
          type="date"
          value={input.release_date}
          name="release_date"
          onChange={(e) => handleChange(e)}
        />
        <strong className="errors">{errors.release_date}</strong>
        <label>Description: </label>
        <input
          type="textarea"
          value={input.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <strong className="errors">{errors.description}</strong>
        <label className="inputLabel">Rating: </label>
        <input
          type="number"
          placeholder="Rating"
          value={input.rating}
          name="rating"
          onChange={(e) => handleChange(e)}
          min="0"
          max="10"
        />
        <strong className="errors">{errors.rating}</strong>
        <label className="inputLabel">Image URL: </label>
        <input
          type="url"
          value={input.image}
          name="image"
          onChange={(e) => handleChange(e)}
          autoComplete="off"
          maxLength="255"
        />
        <strong className="errors"> {errors.image}</strong>
        <img src={input.image} alt="poster" />

        <div>
          <label className="inputLabel">Genres: </label>
          <select
            defaultValue=""
            className="selectCreate"
            onChange={(e) => handleSelect(e)}
          >
            <option value="" disabled hidden>
              Select Genres...
            </option>
            {genres?.map((genres) => (
              <option value={genres.name} key={genres.id} name="genres">
                {genres}
              </option>
            ))}
          </select>
          <div>
            {input.genres.map((g) => (
              <div key={g}>
                <div>
                  <p>{g}</p>
                </div>
                <button onClick={() => handleDelete(g)} key={g} value={g}>
                  x
                </button>
              </div>
            ))}
          </div>
          <strong className="errors">{errors.genres}</strong>
        </div>

        <div>
          <label>
            Actors: <input type="text" list="actors" name="actors"  />
          </label>
          <datalist id="actors" onChange={(e) => handleList(e)}>        
{actors?.map((actors) => (
  <option value={actors.name} key={actors.id} name="actors">
    {actors}
  </option>
  ))}
          </datalist>
          <div>
            {input.actors.map((a) => (
              <div key={a}>
                <div>
                  <p>{a}</p>
                </div>
                <button onClick={() => handleDelete(a)} key={a} value={a}>
                  x
                </button>
              </div>
            ))}
          </div>
          <strong className="errors">{errors.actors}</strong>

            <div>
              <button               
                type="submit"               
              >
                Create
              </button>          
            </div>
          
        </div>
      </form>
    </div>
  );
}

export default Form