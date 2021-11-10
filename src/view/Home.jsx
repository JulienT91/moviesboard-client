import React, {useState,useEffect} from "react";
import axios from "axios";
import SingleMovies from "../component/SingleMovies";
import FormFilter from "../component/FormFilter";

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
    console.log(allMovies);
    },[allMovies])



    return (
      <div>
        <div className="form__container">
          {allMovies.map((film,index) => <FormFilter  film={film} key={index} />)}  
        </div>
        <div className="movie__container">
          {allMovies.map((film,index) => <SingleMovies  film={film} key={index} />)} 
        </div>
      </div>
    )
}

export default Home

