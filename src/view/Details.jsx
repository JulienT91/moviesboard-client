import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import DateFunction from '../service/DateFunction';
import Buttons from '../component/Buttons';

function Details() {
    const id = useParams().id;
    console.log(id);
    const [movieDetails, setMovieDetails] = useState(null);
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
                    <h3>Catégorie:{movieDetails.categories.join()}</h3>
                 </div>
                 <div className="over__desc">
                    <h3>{DateFunction.DateForm(movieDetails.release_date)}</h3>
                     <p>{movieDetails.description}</p>
                    <div className="details_container">
                     {movieDetails && movieDetails.actors.map(({name,photo,character},index) => (
                       <div  key={index} className="details_group">
                        <div className="details_wrapper">
                          <h3>Nom:{name}</h3>
                          <h3>Personnage:{character}</h3>
                          <img src={photo} alt={name} />
                        </div>
                       </div>
                     ))}
                      {movieDetails && movieDetails.similar_movies.map(({title,poster,release_date},index) => (
                       <div  key={index} className="details_group">
                        <div className="details_wrapper">
                          <h3>Titre:{title}</h3>
                          <h3>Date de sortie:{DateFunction.DateForm(release_date)}</h3>
                          <img src={poster} alt={title} />
                        </div>
                       </div>
                     ))}
                     </div>
                 </div>
                 <Buttons id={movieDetails.id}  />
        </div> 
    )
}

export default Details
 