import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousels from "./Carousels";
import MovieList from "./MovieList";

const apiKey = "35eeada46fa5728ceb64a7168a04636a";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey
        );
        console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const handleSearch = async (term) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
  return (
    <div>
      <h2>Welcome to the Cinema Cinepolis</h2>
      <Carousels />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
