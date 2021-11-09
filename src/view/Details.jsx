import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import DateFunction from '../service/DateFunction';
import Button from '../component/Button';

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
    if(!movieDetails) return <p>Error, nothing found..</p>
    return (
             <div className="movie__details">
                <div className="zoom__img">
                  <img className="card-img-transition" src={movieDetails.poster} alt={movieDetails.title} />
                </div>
                <div className="movie__info">
                    <h2>{movieDetails.title}</h2>
                 </div>
                 <div className="over__desc">
                    <h3>{DateFunction.DateForm(movieDetails.release_date)}</h3>
                     <p>{movieDetails.description}</p>
                 </div>
                 <Button />
        </div> 
    )
}

export default Details
