import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



export default function App(){

  const [movies,setMovies]=useState([]);
  const [searchQuery,setSearchQuery]=useState("");

      const  fetching= async()=>{
            await axios
            .get('http://localhost:3002/movies')
            .then((response) => {
                const data = response.data
                setMovies(data);   
            });
                            
      }

      useEffect(()=>{
        fetching();  
      },[]);     


      //AXIOS API
      const deleteMovie =async (movie)=> {
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        
        const NewMovieList =movies.filter(
          m=> m.id !==movie.id
        );
        setMovies(NewMovieList);
      }
      
        

      const  searchMovie =(event)=>{
        setSearchQuery({searchQuery:event.target.value.toLowerCase()})
        
      }
      

    // ADD MOVIE
    const addMovie=async (movie)=>{
      
      await axios.post('http://localhost:3002/movies/',movie);
      setMovies(movies.concat([movie]));
   
    }

          return(
            <div> 
            <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<div className="container">
                  <div className="row mb-2 mt-3">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={searchMovie} />
                    </div>
                  </div>
                  <MovieList
                    movies={!searchQuery ?movies:movies.filter(movie=>movie.name.toLowerCase().includes(searchQuery.searchQuery))}
                    deleteMovieProp={deleteMovie}
                  />
              
            </div>}/>
            <Route path="/add" element={<AddMovie addMovieProp={addMovie} />  }/>
             
            
          </Routes>
          </BrowserRouter>
          </div>
          )
  
      
     
  }
  
  
  
