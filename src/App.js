import React from "react";
import { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const addMovieHandler = async (data)=>{
    const moviesData = await fetch('https://movies-4c771-default-rtdb.firebaseio.com/movies.json', {method:'POST',body: JSON.stringify(data)})
    console.log(moviesData)
    fetchMoviesHandler()
    
  }
  useEffect(()=>{
    fetchMoviesHandler()
  },[])
  const fetchMoviesHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const rawData = await fetch("https://movies-4c771-default-rtdb.firebaseio.com/movies.json");
      if (!rawData.ok) {
        setError("Something went wrong!");
        throw new Error("Something went wrong!");
      }
      
      const response = await rawData.json();
      const allmovies = []
      for (const key in response){
        allmovies.push(response[key])
      }
      console.log(allmovies)
      setMovies(allmovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <InputForm onAddMovie={addMovieHandler}/>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && !error && <p>No movies found</p>}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
