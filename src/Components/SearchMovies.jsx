import DisplayMovies from "./DisplayMovies";

function SearchMovies({ result, handleClick }) {
  function getInputValue() {
    let inputValue = document.getElementById("search").value;
    return inputValue;
  }

  return (
    <section>
      <input id="search" type="text" placeholder="search..." />
      <button type="button" onClick={() => handleClick(getInputValue)}>
        Sök
      </button>

      <DisplayMovies result={result} />
    </section>
  );
}

export default SearchMovies;
