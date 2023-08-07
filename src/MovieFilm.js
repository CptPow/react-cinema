import React, { useState, useEffect } from 'react';
import './css/style.css';

const Film = () => {
  const [film, setFilm] = useState([]);
  const [movieFilm, setMovieFilm] = useState([]); 
  const [seriesFilm, setSeriesFilm] = useState([]); 

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://www.omdbapi.com/?apikey=20b864c3&s=movies");
        const data = await response.json();
        setFilm(data.Search); 

        // filter
        const movieFilms = data.Search.filter(item => item.Type === "movie");
        const seriesFilms = data.Search.filter(item => item.Type === "series");
        setMovieFilm(movieFilms);
        setSeriesFilm(seriesFilms);
      } catch (error) {
        console.error("Errore durante la chiamata API.", error);
      }
    };
    fetchFilms();
  }, []);

  return (
    
    <div className='container'>
      <h2>Movie Film</h2>
        <div className='container-movie'>
        {movieFilm.map(movie => (
            <div className='card'>
         <img src={movie.Poster} alt='Poster' />
         <p style={{fontWeight: "bolder"}}>Title: {movie.Title}</p>
         <p>Year: {movie.Year}</p>
            </div>
        ))}
        </div>

      <h2>Series Film</h2>
      <div className='container-series'>
      
        {seriesFilm.map(movie => (
          <div className='card'>
          <img src={movie.Poster} alt='Poster' />
          <p style={{fontWeight: "bolder"}}>Title: {movie.Title}</p>
          <p>Year: {movie.Year}</p>
             </div>
        ))}
        </div>
      </div>
    
  );
};


export default Film;
