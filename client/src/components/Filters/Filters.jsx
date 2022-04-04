import {useSelector} from "react-redux"
// import {filterGenres, filterYears, getMovies} from "../../redux/actions/index"
import styles from "./Filters.module.css"

const Filters = ({handleGenres, handleYears, handleClick}) => {

  const movies = useSelector((state) => state.moviesBackUp);
  const genres = useSelector((state) => state.genres);
  // const dispatch = useDispatch();
  let list = []

  movies?.map((e) => {
    let year = e.release_date.split("-")[0]
    list.push(year)
    return list
  })

  let filterlist = list.filter((element, index, arr) => {
    return arr.indexOf(element) === index;
  });

  return (
    <div className={styles.filters}>
      <h4 className={styles.text}>Filter by</h4>
      <div>
        <select onChange={handleGenres} className={styles.selectGenre}>
          <option value="">Genre</option>
          {genres?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <select onChange={handleYears} className={styles.selectGenre}>
          <option value="">
            Year
          </option>
          {filterlist?.map(f => {
            return (
              <option key={f} value={f}>
                {f}
              </option>
            )})}
        </select>
      </div>

      {/* <button onClick={handleClick} className={styles.btnMovies}>All Movies!</button> */}
    </div>
  );
};

export default Filters;
