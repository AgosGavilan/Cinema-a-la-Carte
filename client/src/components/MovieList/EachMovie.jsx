import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getMovies, deleteMovie } from "../../redux/actions";
import styles from "./MovieList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlay } from "@fortawesome/free-solid-svg-icons";
import Player from "./Player"

const EachMovie = ({ id, title, release_date, rating, price, movie }) => {
  const allMovies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    let chosenMovie = allMovies.find((e) => e.id === id);
    if (chosenMovie) {
      Swal.fire({
        title: `Are you sure you want to delete ${chosenMovie.title}?`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Delete",
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteMovie(id)).then(() => dispatch(getMovies()));
        } else if (result.isDenied) {
          return;
        }
      });
    }
  };

  return (
    <tr key={id} className={styles.eachMovie}>
      <td className={styles.eachMovie}>{id}</td>
      <td className={styles.eachMovie}>{title}</td>
      <td className={styles.eachMovie}>{rating}</td>
      <td className={styles.eachMovie}>{release_date}</td>
      <td className={styles.eachMovie}>US$ {price}</td>
      <td className={styles.eachMovie}>
        <Player movie={movie ? movie : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}/>
      </td>
      <td className={styles.eachMovie}>
        <button type="button" onClick={handleDelete} className={styles.trash}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
};

export default EachMovie;
