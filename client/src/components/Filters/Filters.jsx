import {useDispatch, useSelector} from "react-redux"
import {filterGenres, filterYears} from "../../redux/actions/index"

const Filters = () => {

  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const handleYears = (e) => {
    e.preventDefault();
    dispatch(filterYears(e.target.value));
    //   dispatch(changePage(1));  Agregar aqui el paginado
  };

  const handleGenres = (e) => {
    e.preventDefault();
    dispatch(filterGenres(e.target.value));
    //   dispatch(changePage(1));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getMovies());
  };

  return (
    <div>
      <p>Filter by</p>
      <div>
        <select onChange={handleGenres}>
          <option value="Genres">All Genres</option>
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
        <select onChange={handleYears}>
          <option value="Years" hidden>
            All Years
          </option>
          {movies?.map((e) => {
            return (
              <option key={e.id} value={e.year}>
                {e.year}
              </option>
              // array.filter((element, index, arr) => {
              //   return arr.indexOf(element) === index;
              // });
            );
          })}
        </select>
      </div>

      <button onClick={handleClick}>All Movies!</button>
    </div>
  );
};

export default Filters;
