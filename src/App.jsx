import "./App.css";
import SearchMovies from "./Components/SearchMovies";
import { useEffect, useState } from "react";
import DisplayMovies from "./Components/DisplayMovies";

const API_URL = "http://www.omdbapi.com";
const API_KEY = "37fe945a";

function App() {
  const [searchResult, setSearchResult] = useState([]);
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
    <div className="App">
      <main>
        <SearchMovies result={resultList} handleClick={setSearchTerm} />
      </main>
    </div>
  );
}

export default App;
