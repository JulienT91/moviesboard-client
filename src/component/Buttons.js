import axios from 'axios';
import React from 'react'
function Buttons({id}) {
    const handleEdit = () => {
    }

    const handleDelete = () => {
      axios.delete(`http://localhost:3000/movies/${id}`);
      window.location.reload()
    }
    return (
     <div className="btn__container">
        <button  onClick={handleEdit}>Modifier</button>
        <button  onClick={() => {
            if(window.confirm("voulez vous supprimez ce film")){
                handleDelete(); // importer pop in via react
            }
        }}>Supprimer</button>
    </div>
    )
}

export default Buttons
