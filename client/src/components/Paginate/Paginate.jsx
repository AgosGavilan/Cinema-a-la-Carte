import styles from "./Paginate.module.css";

const Paginate = ({ moviesPerPage, allMovies, paginate, handlePrev, handleNext }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.containerPaginado}>
      <button className={styles.passButton} onClick={handlePrev}>
        {"«"}
      </button>
      <div className={styles.paginado}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div className="number" key={number}>
              <button className={styles.numberButton} onClick={() => paginate(number)}>
                {" "}
                {number}{" "}
              </button>
            </div>
          ))}
      </div>
      <button className={styles.passButton} onClick={handleNext}>
        {"»"}
      </button>
    </div>
  );
};

export default Paginate;
