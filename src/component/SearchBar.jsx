import React from 'react';
function SearchBar() {
    return (
        <div className="searchBar_container">
            <div className="content-section">
            <form className="form_sb" onSubmit={null}>
              <select id="catagorie" className="select_sb" name="categorie" onChange={null}>
                <option value="action">Action</option>
                <option value="animation">Animation</option>
                <option value="horreur">Horreur</option>
                <option value="drame">Drame</option>
              </select>
              <input type="text" className="search_sb" placeholder="Tapez votre mot de recherche" onChange={null}></input>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                className="date_sb"
                onChange={null}
              />
              <button className="largebtn" type="submit">
                Valider
              </button>
            </form>
          </div>
        </div>
    )
}

export default SearchBar
