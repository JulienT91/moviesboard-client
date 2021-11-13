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
    
   
    if(!movieDetails) return <p>error, nothing found..</p>
    return (    // image,title,overview
      <>
      <div className="details__wrapper">
        <div className="details__header">
          <h1>{movieDetails.title}</h1>
        </div>
        <div className="details__card">
          <figure className="thumbnail">
            <img className="thumbnail__img" src={movieDetails.poster} alt={movieDetails.title} />
          </figure>
          <div className="meta">
            <div className="meta__body">
              <div className="meta__body__info__release">
                <p><span className="grey_text">sortie le : </span>{DateFunction.DateForm(movieDetails.release_date)}</p>
              </div>
              <div className="meta__body__info__categories">
                <p><span className="grey_text">Catégories : </span>{movieDetails.categories.join()}</p>
              </div>
              <span>Avec :</span>
              <div className="actors__details">
                {movieDetails && movieDetails.actors.map(({name},index) => (
                <div key={index} className="meta__body__actors">
                  <a href="#actors">{name}</a>
                </div>
                ))}
              </div>
              <div className="meta__body__button">
                <Buttons />
              </div>
            </div>
          </div>
        </div>
        <section className="details__synposis">
          <div className="titleBar">
            <h2>synposis</h2>
          </div>
          <div className="synopsis__text">
            {movieDetails.description}
          </div>
        </section>
        <section className="details__actors" id="actors">
          <div className="titleBar">
            <h2>
            acteurs et actrices
            </h2>
          </div>
          <div className="card__actor__container row">
          {movieDetails && movieDetails.actors.map(({name,photo,character},index) => (
            <div key={index} className="card__actors column">
              <figure className="thumbnail">
                <img className="thumbnail__img" src={photo} alt={name} />
              </figure>
              <div className="meta">
                <div className="meta__title">
                  <h3>
                    {name}
                  </h3>
                </div>
                <div className="meta__role">
                  <p className="grey_text">Rôle : {character}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>
        <section className="details__similar">
          <div className="titleBar">
            <h2>Films Similaires</h2>
          </div>
          <div className="card__similar__container row">
           {movieDetails && movieDetails.similar_movies.map(({title,poster,release_date},index) => (
             <div key={index} className="card__similar column">
                <figure className="thumbnail">
                <img className="thumbnail__img" src={poster} alt={title} />
              </figure>
              <div className="meta">
                <div className="meta__title">
                  <h3>
                    {title}
                  </h3>
                </div>
                <div className="meta__release_date">
                  <p>{DateFunction.DateForm(release_date)}</p>
                </div>
              </div>
             </div>        
            ))}
          </div>
        </section>
      </div>
      </>  
  )
    }
export default Details;
 