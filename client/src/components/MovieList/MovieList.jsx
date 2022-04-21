import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";
import EachMovie from "./EachMovie";
import styles from "./MovieList.module.css";
import NavBar from "../NavBar/NavBar";

const MovieList = () => {
  const allMovies = useSelector((state) => state.movies);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <NavBar />
      <table className={styles.movieList}>
        <thead className={styles.headers}>
          <tr>
            <th className={styles.eachMovie}>ID</th>
            <th className={styles.eachMovie}>Title</th>
            <th className={styles.eachMovie}>Rating</th>
            <th className={styles.eachMovie}>Release Date</th>
            <th className={styles.eachMovie}>Price</th>
            <th className={styles.eachMovie}>Play</th>
            <th className={styles.eachMovie}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allMovies?.map((e) => {
            return (
              <EachMovie
                id={e.id}
                title={e.title}
                release_date={e.release_date}
                rating={e.vote_average}
                price={e.price}
                movie={e.urlMovie}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
