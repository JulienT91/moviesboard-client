import React, {useState} from 'react';
import axios from 'axios';

function Buttons({id}) {

    const handleUpdate = () => {
       
    }
    const handleDelete = () => {
      axios.delete(`http://localhost:3000/movies/${id}`);
      window.location.reload()
    }
    return (
        <div className="btn__container">
         <button onClick={handleUpdate}>Modifier</button> 
           <button  onClick={() => {
         if(window.confirm("voulez vous supprimez ce film")){
             handleDelete(); 
         }
          }}>Supprimer</button>
    </div>
    )
}

export default Buttons
