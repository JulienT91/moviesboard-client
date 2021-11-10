import React, { useState } from 'react'
import axios from 'axios';



function Add() {
    const API_KEY = "4f85342b8749c4d0e6c0f36d0481cbea";
    const addNewMovie = axios.create({
        baseURL: "https://api.themoviedb.org/3"
    })
    const [value,setValue] = useState({
        title:"",
        date:"",
        categories:[],
        description:""
    });

    const handleChange = (e) =>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        console.log(value);
        alert("Le film à bien été ajouté");
        e.preventDefault();
    }
    return (
        <div className="form__container" >
            <form className="form__group" 
             onSubmit={handleSubmit}
            >
                <div className="inputs_group">
                    <div className="input_wrapper">
                        <label htmlFor="title">Titre:</label>
                        <input  value={value.title} onChange={handleChange} type="text" name="title" id="title" /></div>
                    <div className="input_wrapper">
                        <label htmlFor="categories">Catégories:</label>
                        <input value={value.categories} onChange={handleChange} name="categories" id="categories" /></div>
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor="date">Date:</label>
                        <input value={value.date} onChange={handleChange} type="date" name="date" id="date"  />
                    </div>
                    <div className="input_wrapper">
                        <textarea value={value.description} name="description" onChange={handleChange} id="description" cols="30" rows="10"></textarea>
                    </div>
                    <div className="input_wrapper">
                        <button className="form_btn_add" type="submit" value="Ajouter">Ajouter</button>
                    </div>
            </form>
        </div>
    )
}

export default Add
