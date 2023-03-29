import { useContext } from "react";
import DisplayMovies from "./DisplayMovies";
<<<<<<< HEAD
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
=======
import { SearchTermContext } from "../App";

function SearchMovies({ result }) {
    let inputValue;

    const { setSearchTerm } = useContext(SearchTermContext);

    return (
        <section>
            <input
                onChange={(e) => {
                    inputValue = e.target.value;
                }}
                type="text"
                placeholder="search..."
            />
            <button type="button" onClick={() => setSearchTerm(inputValue)}>
                Sök
            </button>

            <DisplayMovies />
        </section>
    );
>>>>>>> 31534d63ee559724b191040f94d14da25d9bd322
}

export default SearchMovies;
