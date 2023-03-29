import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <article className="movieCard">
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="" />
            <h5>
                {movie.Type} from {movie.Year}
            </h5>
        </article>
    );
}

export default MovieCard;
