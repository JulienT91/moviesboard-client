import React,{useState} from 'react';
import DateFunction from '../service/DateFunction';
import { Link } from 'react-router-dom';

function SingleMovies({film}) {
    const [update, setUpdate] = useState("");
    const id = film.id;
    const handleEdit = () => {
      setUpdate(alert("Edit"));
    }

    const handleDelete = () => {
        setUpdate(alert("Delete"));
    }
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
            <button  onClick={handleEdit}>Modifier</button>
            <button  onClick={handleDelete}>Supprimer</button>
        </div>
    )
}

export default SingleMovies
