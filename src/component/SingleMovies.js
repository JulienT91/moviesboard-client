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
        <div>
             <Link to={`details/${id}`}>
                <h1>{film.title}</h1>
                <h2>{DateFunction.DateForm(film.release_date)}</h2>
                <figure>
                    <img src={film.backdrop} alt={film.title} />
                    <figcaption>
                    {film.description}
                    </figcaption>
                </figure>
            </Link>
            <button onClick={handleEdit}>Modifier</button>
            <button onClick={handleDelete}>Supprimer</button>
        </div>
    )
}

export default SingleMovies