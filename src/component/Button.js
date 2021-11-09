import React from 'react'
import { useState } from 'react';
function Button() {
    const [update, setUpdate] = useState("");

    const handleEdit = () => {
      setUpdate(alert("Edit"));
    }

    const handleDelete = () => {
        setUpdate(alert("Delete"));
    }
    return (
     <div className="btn__container">
        <button  onClick={handleEdit}>Modifier</button>
        <button  onClick={handleDelete}>Supprimer</button>
    </div>
    )
}

export default Button
