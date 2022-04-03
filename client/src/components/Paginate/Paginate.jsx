
import "./Paginate.css"

const Paginate = ({moviesPerPage, allMovies, paginate}) => {

      const pageNumbers = [];
    
      for (let i = 1; i <= Math.ceil(allMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
      }
    
      return (  
        
        <div className="containerPaginado">
          <div className="paginado">
    
    
            {pageNumbers &&
              pageNumbers.map((number) => (
                <div className="number" key={number}>
                  <button className="numberButton" onClick={() => paginate(number)}>
                    {" "}
                    {number}{" "}
                  </button>
                </div>
              ))}
          </div>
        </div>
      );
    }








export default Paginate