import React from 'react';
import axios from 'axios';

function Edit() {

    return (
        <div className="edit__page">
            <main>
                <h2>Modifier le film</h2>
                <section>
                    <form className="Edit__movie">
                        <div className="edit__movie__filters">
                            <div className="edit__movie__filter">
                                <label htmlFor="title">Titre</label>
                                <input type="text" 
                                       name="title"
                                       defaultValue="Titre du film"
                                       required />
                            </div>
                            <div className="edit__movie__filter">
                                <label htmlFor="date">Date de sortie</label>
                                <input type="date" 
                                       name="date"
                                       defaultValue="Date de sortie"
                                       required />
                            </div>
                            <div className="edit__movie__filter">
                                <label htmlFor="categories">Catégories</label>
                                <input type="text"
                                       name="categories" 
                                       placeholder="Action, Aventure, Science-Fiction, etc."
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="description">Description</label>
                                <input type="textarea" 
                                       name="description" 
                                       defaultValue="Description du film"
                                       required />
                            </div>
                            <div className="edit__movie__filter">
                                <label htmlFor="poster">Affiche</label>
                                <input type="url" 
                                       name="poster" 
                                       defaultValue="Url de l'affiche du film"
                                       required />
                            </div>
                            <div className="edit__movie__filter">
                                <label htmlFor="backdrop">Backdrop</label>
                                <input type="url" 
                                       name="backdrop" 
                                       defaultValue="Url de l'image d'arrière plan"
                                       pattern="http://*"
                                       required />
                            </div>
                            <div className="add__movie__filter">
                                <p>Casting :</p>
                                <div className="form-actor">
                                    <div className="filter">
                                        <label htmlFor="actor">Acteur / Actrice</label>
                                        <input type="text" 
                                            name="actor"
                                            placeholder="Nom de l'acteur / actrice"
                                            required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="poster">Photo</label>
                                        <input type="url" 
                                                name="poster" 
                                                placeholder="http://exemple-photo.jpg"
                                                pattern="http://*"
                                                required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="actor">Rôle</label>
                                        <input type="text" 
                                            name="actor"
                                            placeholder="Rôle"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="add__movie__filter">
                                <p>Films similaires :</p>
                                <div className="form-similar-movies">
                                    <div className="filter">
                                        <label htmlFor="title-similar-movie">Titre</label>
                                        <input type="text" 
                                            name="title-similar-movie"
                                            placeholder="Titre du film"
                                            required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="poster-similar-movie">Affiche</label>
                                        <input type="url" 
                                                name="poster-similar-movie" 
                                                placeholder="http://exemple-poster.jpg"
                                                pattern="http://*"
                                                required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="date-similar-movie">Date de sortie</label>
                                        <input type="date" 
                                            name="date-similar-movie"
                                            required />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="form__edit__movie__validate">Modifier</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Edit
