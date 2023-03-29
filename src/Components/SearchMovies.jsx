import DisplayMovies from "./DisplayMovies";
import "./SearchMovie.css";

function SearchMovies({ handleClick }) {
  let inputValue;

  return (
    <section className="searchMovie">
      <input
        className="inputField"
        onChange={(e) => {
          inputValue = e.target.value;
        }}
        id="search"
        type="text"
        placeholder="search..."
      />
      <button
        className="searchButton"
        type="button"
        onClick={() => handleClick(inputValue)}
      >
        SEARCH
      </button>

      <DisplayMovies />
    </section>
  );
}

export default SearchMovies;
