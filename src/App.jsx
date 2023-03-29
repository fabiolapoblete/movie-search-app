import "./App.css";
import SearchMovies from "./Components/SearchMovies";
import { createContext, useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com";
const API_KEY = "37fe945a";
let page = 1;

export const ResultContext = createContext();

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let URL =
    API_URL + "/?apikey=" + API_KEY + "&s=" + searchTerm + "&page=" + page;

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
    <ResultContext.Provider value={resultList}>
      <div className="App">
        <header className="header">
          <h1>MOVIE SEARCH</h1>
        </header>
        <main>
          <SearchMovies handleClick={setSearchTerm} />
        </main>
      </div>
    </ResultContext.Provider>
  );
}

export default App;
