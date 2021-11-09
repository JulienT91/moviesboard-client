import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


function Details() {
    const id = useParams().id;
    console.log(id);
    const [movieDetails, setMovieDetails] = useState("");
    useEffect(() => {
      const movieResults = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
            console.log(res.data);
            setMovieDetails(res.data);
  
        })
      };
    movieResults();
    },[]);
    if(!movieDetails) return <p>Loading..</p>
    return (
        <div>
            <h1>{movieDetails.title}</h1>  
        </div>
    )
}

export default Details
