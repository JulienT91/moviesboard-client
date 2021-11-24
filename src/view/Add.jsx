
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

  const [actorValue, setActorValue] = useState({
    name: "",
    photo:"",
    character: ""
  });

  const [similarValue, setSimilarValue] = useState({
    title: "",
    poster:"",
    release_date: ""
  });


  const [inputTitle, setInputTitle] = useState({
    typing: false,
    inputTimeout: 0
  })
  const [moviesList, setMoviesList] = useState([]);
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const [showForm,setShowForm] = useState(false);
  const [isInputEmpty,setIsImputEmpty] = useState(true);


  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });

    

    setActorValue({
      ...actorValue,
      [e.target.name]: e.target.value
    })
    setSimilarValue({
      ...similarValue,
      [e.target.name]: e.target.value
    })
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

  const handleShowForm = (e) => {
    if(value.title != "" && value.release_date != ""){
    setIsImputEmpty(!isInputEmpty);
    e.preventDefault();
    setShowForm(!showForm);
    }
  }

  return (
    <>
      <div className="searchBar_container">
        <div className="content-section">
          <form  className="form_sb" onSubmit={handleSubmit}>
            <select id="catagorie" className="select_sb" name="categories" onChange={{handleChange}}>
              <option value="action">Action</option>
              <option value="animation">Animation</option>
              <option value="horreur">Horreur</option>
              <option value="drame">Drame</option>
            </select>
            <div className="title-wrapper">
              <input 
                  type="text"
                  onFocus={() => setOptionsOpen(true)} value={value.title} 
                  name="title" className="search_sb form_input"
                  placeholder="Tapez votre mot de recherche"  
                  onChange={handleChange}/>
              <ul className={`autocomplete_options ${isOptionsOpen ? "open" : ""}`}>
                {moviesList.map((movie, i) => (
                  <li key={i} data-id={movie.id} onClick={(e) => {
                    // Movies description
                    axios.get(`https://api.themoviedb.org/3/movie/${e.target.dataset.id}?api_key=${API_KEY}`).then((res) => {
                      const newMovie = {
                        title: res.data.title,
                        release_date: res.data.release_date,
                        description: res.data.overview,
                        backdrop: IMG_PATH + res.data.backdrop_path,
                        poster: IMG_PATH + res.data.poster_path,
                      }
                    setValue({ ...value, ...newMovie });
                    })
                    // Actors list
                    axios.get(`https://api.themoviedb.org/3/movie/${e.target.dataset.id}/credits?api_key=${API_KEY}`).then((res) => {
                      // need to add useState before this ..
                      console.log(res.data);
                      const newActorList = {
                        name:res.data.cast.name,
                        photo:IMG_PATH + res.data.cast.profile_path,
                        character:res.data.cast.character
                      }
                    setActorValue({...actorValue,...newActorList})
                    })
                    // Similar Movies list 
                    axios.get(`https://api.themoviedb.org/3/movie/${e.target.dataset.id}/similar?api_key=${API_KEY}`).then((res) => {
                      console.log(res.data);
                      const similarMovieList = {
                        // title:res.data.cast.name,
                        // poster:IMG_PATH + res.data.cast.profile_path,
                        // release_date:res.data.cast.character
                      }
                    setSimilarValue({...similarValue,...similarMovieList})
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
            <button  className="largebtn" type="submit" onClick={handleShowForm}>
              Valider
            </button>
          </form>
        </div>
      </div>
      <div>
      <div className="container__card">
      {showForm && (
        <>
        <form>
          <h1>Movie description</h1>
          <div className="movie__part">
            <div className="title__movie">
              <input type="text" required onChange={handleChange} value={value.title} />
            </div>
            <div className="release__date__movie">
              <input type="date" required onChange={handleChange} value={value.release_date} />
            </div>
            <div className="img__movie">
              <figure>
                <img src={value.backdrop} name="backdrop__movie" alt={value.title} />
              </figure>
              <figure>
                <img src={value.poster} name="poster__movie" alt={value.title} />
              </figure>
            </div>
            <div className="description__movie">
              <textarea name="" id="" cols="30" rows="10" required onChange={handleChange} value={value.description}></textarea>
            </div>
          </div>
          {/* Actors Part */}
          <div className="actors__part">
            <div className="actor__name">
                <input type="text" onChange={handleChange} value={actorValue.name} />
              </div>
          </div>
          <button type="submit">
            Ajouter un film
          </button>
        </form>
        </>
      )}
      </div>
    </div>

    </>

  )
}

export default Add
