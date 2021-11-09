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
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </form>
          {allMovies.map((film,index) => <SingleMovies  film={film} key={index} />)}  
        </div>
    )
}

export default Home

