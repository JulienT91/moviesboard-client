import React, {useState,useEffect} from "react";
import axios from "axios";
import SingleMovies from "../component/SingleMovies";
import SearchBar from "../component/SearchBar";
function Home() {
  // fetch all data part
  const [allMovies,setAllMovies] = useState([]); // to put all movies in empty array
  const url = "http://localhost:3000/movies"; // to get movies url
  useEffect(() => {
    axios.get(`${url}`)
    .then((res) => {
      setAllMovies(res.data);
    })
  },[]);
  useEffect(()=>{
    },[allMovies])


    return (
      <div className="main_content">
        <div className="main_container">
        <div className="home__titleBar">
           <h1>bienvenue sur l'application Movies Board</h1>
        </div>
          <SearchBar /> 
        <div className="movie__container">
          {allMovies && allMovies.map((film,index) => <SingleMovies  film={film} key={index}  />)} 
        </div>
        </div>
      </div>
    )
}

export default Home

