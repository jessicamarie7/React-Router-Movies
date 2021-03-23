import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [savedList, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div className="App">   
      <Switch>
        {/* <SavedList list={[savedList]} /> */}

        <Route path='/' >
          <MovieList movies={movieList}/>  
        </Route>
        <Route path='/movies/:id' >
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}

