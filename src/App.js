import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchMoviesHandler = async ()=>{
    

    
    setError(null)
    setIsLoading(true)
    try{
     
      const rawData = await fetch('https://swapi.dev/api/film/') 
    if (!rawData.ok){
      setError("Something went wrong!")
      throw new Error('Something went wrong!')
    }
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
    catch(err){
      setError(err.message)
  
    }
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
        {!isLoading && movies.length===0 && !error && <p>No movies found</p>}
        {error&& <p>{error}</p>}
       
        
      </section>
    </React.Fragment>
  );
}

export default App;
