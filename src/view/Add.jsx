
import React, { useState,useEffect } from 'react';
import axios from 'axios';



function Add() {
    const [value,setValue] = useState({
        title:"",
        release_date:""
       
    });
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        });
    }
    
    
    const handleSubmit = (e) => {
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=4f85342b8749c4d0e6c0f36d0481cbea&language=en-US&page=1&include_adult=false&query=${value.title}}`;
        axios.get(`${URL}`).then((res) => {
          console.log(res.data.results);
          res.data.results.map((result) => {
            const newMovie = {
              
            }
          })
          }
        )
        console.log(value.title);
        console.log(value.release_date);
        e.preventDefault();
    }
    return (
        <>
        <div className="searchBar_container">
        <div className="content-section">
        <form className="form_sb" onSubmit={handleSubmit}>
          <select id="catagorie"  className="select_sb" name="categories" onChange={handleChange}>
            <option value="action">Action</option>
            <option value="animation">Animation</option>
            <option value="horreur">Horreur</option>
            <option value="drame">Drame</option>
          </select>
          <input type="text" name="title" className="search_sb" placeholder="Tapez votre mot de recherche" onChange={handleChange}></input>

          <input
            type="date"
            name="release_date"
            value={value.release_date}
            className="date_sb"
            onChange={handleChange}
          />
          <button className="largebtn" type="submit">
            Valider
          </button>
        </form>
      </div>
    </div>
    <div>
        
    </div>
    </>

    )
}

export default Add
