import { useContext } from "react";
import DisplayMovies from "./DisplayMovies";
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
}

export default SearchMovies;
