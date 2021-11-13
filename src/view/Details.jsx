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
    return (    // image,title,overview
                <div className="details_container">
                  <div className="movie__cont">
                    <div className="zoom__img">
                    <div className="details__info">
                      <h2>Catégories:{movieDetails.categories.join()}</h2>
                      <h3>{movieDetails.title}</h3>
                      <h3>{DateFunction.DateForm(movieDetails.release_date)}</h3>
                    </div>
                      <img className="card-img-transition" src={movieDetails.poster} alt={movieDetails.title} />
                    </div>
                      <Buttons id={movieDetails.id}  />
                    <div className="details__desc">
                       <h4>Synopsis:</h4>
                      <p>{movieDetails.description}</p>
                    </div>
                  </div>
                  <h2 className="similar_title">Acteurs:</h2>
                  <div className="actor__container">
                     {movieDetails && movieDetails.actors.map(({name,photo,character},index) => (
                       <div  key={index} className="details_group">
                        <div className="details_wrapper">
                          <h3>Acteur:{name}</h3>
                          <h4>Rôle:{character}</h4>
                          <img className="card-img-transition" src={photo} alt={name} />
                        </div>
                       </div>
                     ))}
                    </div>
                    <h2 className="similar_title">Film Similaires:</h2>
                    <div className="similar__container">
                      {movieDetails && movieDetails.similar_movies.map(({title,poster,release_date},index) => (
                       <div  key={index} className="details_group">
                        <div className="details_wrapper">
                          <img className="card-img-transition" src={poster} alt={title} />
                          <h3>Titre:{title}</h3>
                          <h3>Date de sortie:{DateFunction.DateForm(release_date)}</h3>
                        </div>
                       </div>
                     ))}
                     </div>
                   </div>
      
    )
}

export default Details
 