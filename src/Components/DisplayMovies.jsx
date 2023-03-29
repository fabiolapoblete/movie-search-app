import MovieCard from "./MovieCard";
import "./DisplayMovies.css";
import { useContext } from "react";
import { ResultContext } from "../App";

function DisplayMovies() {
  const result = useContext(ResultContext);

  return (
    <section className="displayMovies">
      {result ? (
        result.map((movie, i) => <MovieCard key={i} movie={movie} />)
      ) : (
        <p>No search results, try again</p>
      )}
    </section>
  );
}

export default DisplayMovies;
