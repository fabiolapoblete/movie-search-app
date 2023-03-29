import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <article className="movieCard">
      <img src={movie.Poster} alt="" />
      <section>
        <h2>{movie.Title}</h2>
        <h5>
          {movie.Type} from {movie.Year}
        </h5>
      </section>
    </article>
  );
}

export default MovieCard;
