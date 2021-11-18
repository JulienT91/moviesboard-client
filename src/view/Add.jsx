
import React, { useState } from 'react';
import axios from 'axios';
const IMG_PATH = `https://image.tmdb.org/t/p/original`;
const API_KEY = `4f85342b8749c4d0e6c0f36d0481cbea`;


function Add() {
  const [value, setValue] = useState({
    title: "",
    release_date: "",
    description: "",
    backdrop: "",
    poster: ""
  });
  const [inputTitle, setInputTitle] = useState({
    typing: false,
    inputTimeout: 0
  })
  const [moviesList, setMoviesList] = useState([]);
  const [isOptionsOpen, setOptionsOpen] = useState(false);


  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
    if (inputTitle.inputTimeout) clearTimeout(inputTitle.inputTimeout);

    setInputTitle({
      typing: false,
      inputTimeout: setTimeout(() => {
        const URL_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value.title}`;
        axios.get(`${URL_MOVIE}`).then((res) => {
          setMoviesList(res.data.results);
        })
      }, 500)
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="searchBar_container">
        <div className="content-section">
          <form className="form_sb" onSubmit={handleSubmit}>
            <select id="catagorie" className="select_sb" name="categories" onChange={handleChange}>
              <option value="action">Action</option>
              <option value="animation">Animation</option>
              <option value="horreur">Horreur</option>
              <option value="drame">Drame</option>
            </select>
            <div className="title-wrapper">
              <input type="text" onFocus={() => setOptionsOpen(true)} value={value.title} name="title" className="search_sb form_input" placeholder="Tapez votre mot de recherche" onChange={handleChange}></input>
              <ul className={`autocomplete_options ${isOptionsOpen ? "open" : ""}`}>
                {moviesList.map((movie, i) => (
                  <li key={i} data-id={movie.id} onClick={(e) => {

                    axios.get(`https://api.themoviedb.org/3/movie/${e.target.dataset.id}?api_key=${API_KEY}`).then((res) => {
                      const newMovie = {
                        title: res.data.title,
                        release_date: res.data.release_date,
                        description: res.data.overview,
                        backdrop: IMG_PATH + res.data.backdrop_path,
                        poster: IMG_PATH + res.data.poster_path,
                        // actors:{
                        //   name:,
                        //   photo:,
                        //   character:,
                        // }
                        // similar_movies:{
                        //   title:,
                        //   poster:,
                        //   release_date:
                        // }
                      }
                      setValue({ ...value, ...newMovie });
                    })
                  }}>
                    {movie.title}
                  </li>
                ))}
              </ul>
            </div>
            <input
              type="date"
              name="release_date"
              value={value.release_date}
              className="date_sb form_input"
              onChange={handleChange}
            />
            <button className="largebtn" type="submit">
              Valider
            </button>
          </form>
        </div>
      </div>
      <div>
    <form action="">
        <input type="text" name={value.title} value={value.title} />
         <input type="date" value={value.release_date} />
      <div className="img__container__card">
        <figure>
          <img src={value.backdrop} alt={null} />
        </figure>
      </div>
    </form>
    </div>

    </>

  )
}

export default Add
