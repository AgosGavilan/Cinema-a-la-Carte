import {useSelector} from "react-redux"
// import {filterGenres, filterYears, getMovies} from "../../redux/actions/index"

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
    <div>
      <h4>Filter by</h4>
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
