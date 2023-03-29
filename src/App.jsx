import "./App.css";
import SearchMovies from "./Components/SearchMovies";
import { createContext, useContext, useEffect, useState } from "react";
import DisplayMovies from "./Components/DisplayMovies";

const API_URL = "http://www.omdbapi.com";
const API_KEY = "37fe945a";

export const SearchTermContext = createContext(null);

function App() {
    const [searchResult, setSearchResult] = useState({});
    const [searchTerm, setSearchTerm] = useState("Emma");

    let URL = API_URL + "/?apikey=" + API_KEY + "&s=" + searchTerm;

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data);
                console.log(data);
            });
    }, [searchTerm]);

    let resultList = searchResult.Search;

    return (
        <SearchTermContext.Provider value={{ setSearchTerm, resultList }}>
            <div className="App">
                <main>
                    <SearchMovies />
                </main>
            </div>
        </SearchTermContext.Provider>
    );
}

export default App;
