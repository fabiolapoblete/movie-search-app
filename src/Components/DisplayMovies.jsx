import MovieCard from "./MovieCard";
import "./DisplayMovies.css";
import { SearchTermContext } from "../App";
import { useContext } from "react";

function DisplayMovies() {
    const { resultList } = useContext(SearchTermContext);

    return (
        <section className="displayMovies">
            {resultList ? (
                resultList.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))
            ) : (
                <p>No search results, try again</p>
            )}
        </section>
    );
}

export default DisplayMovies;
