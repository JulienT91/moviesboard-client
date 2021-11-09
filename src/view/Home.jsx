import React, {useState,useEffect} from "react";
import axios from "axios";
import SingleMovies from "../component/SingleMovies";

function Home() {
    const [allMovies,setAllMovies] = useState([]);
    const url = "http://localhost:3000/movies";
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
          <form name="search_form">
            <h2>Filtrer par:</h2>
            <input id="title" type="checkbox" value="title" name="title" />
            <label htmlFor="title">Titre</label>
            <input id="release" type="checkbox" value="release" name="release" />
            <label htmlFor="release">Date de sortie</label>
            <input id="category" type="checkbox" value="category" name="category" />
            <label htmlFor="category">Categories</label>
          </form>
          {allMovies.map((film,index) => <SingleMovies  film={film} key={index} />)}  
        </div>
    )
}

export default Home

