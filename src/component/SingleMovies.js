import React from 'react';
import DateFunction from '../service/DateFunction';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

function SingleMovies({film}) {
    const id = film.id;
    return ( 
        <div className="movie">
             <Link to={`details/${id}`}>
                <div className="zoom__img">
                  <img className="card-img-transition" src={film.poster} alt={film.title} />
                </div>
                <div className="movie__info">
                    <h2>{film.title}</h2>
                 </div>
                 <div className="over__desc">
                    <h3>{DateFunction.DateForm(film.release_date)}</h3>
                     <p>{film.description}</p>
                 </div>
            </Link>
            <Buttons />
        </div>
    )
}

export default SingleMovies
