import MovieCard from "./MovieCard";
import "./DisplayMovies.css";

function DisplayMovies({ result }) {
  return (
    <section className="displayMovies">
      {result
        ? result.map((movie, i) => <MovieCard key={i} movie={movie} />)
        : null}
    </section>
  );
}

export default DisplayMovies;
