import {useDispatch, useSelector} from "react-redux"
import {filterGenres, filterYears, getMovies} from "../../redux/actions/index"

const Filters = () => {

  const movies = useSelector((state) => state.moviesBackUp);
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  let list = []

  movies?.map((e) => {
    let year = e.release_date.split("-")[0]
    list.push(year)
    return
  })

  let filterlist = list.filter((element, index, arr) => {
    return arr.indexOf(element) === index;
  });

  const handleYears = (e) => {
    e.preventDefault();
    if(e.target.value === "Years") {
      dispatch(getMovies())
    }
    else {
      dispatch(filterYears(e.target.value));
      //   dispatch(changePage(1));  Agregar aqui el paginado
    }
  };

  const handleGenres = (e) => {
    e.preventDefault();
    if(e.target.value === "Genres") {
      dispatch(getMovies())
    }
    else {
    dispatch(filterGenres(e.target.value));
    //   dispatch(changePage(1));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getMovies());
  };

  return (
    <div>
      <p>Sort by</p>
      <div>
        <select onChange={handleGenres}>
          <option value="Genres">Genre</option>
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
          <option value="Years">
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

      <button onClick={handleClick}>All Movies!</button>
    </div>
  );
};

export default Filters;
