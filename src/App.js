import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchMoviesHandler = async ()=>{
    setIsLoading(true)
    
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
    setIsLoading(false)
  }

  return (
    <React.Fragment>
    
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length===0 && <p>No movies found</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
