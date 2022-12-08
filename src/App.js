import React from "react";
import { useState ,useEffect } from "react";

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';


const App = () => {

    const [movies,setmovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    const searchmovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search); 
    }

    useEffect(() =>{
        searchmovie("spiderman");
    },[]);

    return(
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchmovie(searchTerm)}
                />
            </div>

            {
                movies?.length>0
                ?
                (   <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))
                        }
                    </div>):
                (
                    <div className="empty">
                        <h2>No Movies Found!</h2>
                    </div>
                )
            }

            
        </div>
        
    );
}

export default App;