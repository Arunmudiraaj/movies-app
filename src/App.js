import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const fetchMoviesHandler = async ()=>{
    const rawData = await fetch('https://swapi.dev/api/films/')
    const response = await rawData.json()
    const myMoviesList = response.results.map(item=> {
      return {
        title : item.title,
        releaseDate : item.release_date,
        openingText : item.opening_crawl
      }
    })
    setMovies(myMoviesList)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
