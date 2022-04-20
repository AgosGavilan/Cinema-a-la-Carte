import React , { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getAllReviews, postReview } from "../../redux/actions";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const PostReview = ({movieDetail, setOpen}) => {

  const [currentValue, setCurrentValue] = useState(0); //este es el voto
  const [hoverValue, setHoverValue] = useState(undefined);
  const [input, setInput] = useState({
    vote: 0,
    text: "",
    movieId: movieDetail.id
  })

  const stars = Array(5).fill(0) // [0,0,0,0,0]
  const dispatch = useDispatch()
  const idUser = useSelector(state => state.user)
  console.log(idUser.id)

  const handleText = () => {
    switch (currentValue || hoverValue) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handleClick = value => {
    setCurrentValue(value)
    setInput({
      ...input,
      vote: value
    })
    console.log(input)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      text: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.vote < 1) {
      Swal.fire({
        title: "Vote is required",
        icon: "warning",
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    } else {
        dispatch(postReview(input, idUser.id)).then(dispatch(getAllReviews(movieDetail.id)))
        console.log(idUser.id)
        setInput({
          vote: 0,
          text: "",
          movieId: movieDetail.id
        })
        setOpen(false)
        Swal.fire({
          title: "Thanks for you review",
          icon: "success",
          position: "center",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
    }
  }




  return (
    <div style={styles.container}>
      <div style={styles.movie}>
            <img
              style={{ width: 80, objectFit: "cover" }}
              src={movieDetail.img}
              alt="name"
            />
            <div style={styles.title}>
              <h3>{movieDetail.title}</h3>
            </div>
      </div>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={30}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <div style={styles.reaction}>
        <p>{handleText()}</p>
      </div>
      <textarea
        value={input.text}
        onChange={handleChange}
        placeholder="Did you enjoy this movie?"
        name="text"
        style={styles.textarea}
      />

      <button
        onClick={handleSubmit}
        style={styles.button}
      >
        Submit
      </button>
      
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    background: "#181818",
    color: "#999"
  },
  button: {
    marginTop: 10,
    width: 300,
    borderRadius: 6,
    padding: 10,
    fontWeight: "bolder",
    cursor: "pointer",
    background: "#181818",
    border: "0.5px solid aliceblue",
    color: "antiquewhite"
  },
  movie: {
    display: "flex",
    alignItems: "center",
    width: 300,
    height: 120,
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 7,
    height: 140.11,
    color: "aliceblue"
  },
  reaction: {
    color: "#FFBA5A"
  }

};




export default PostReview;