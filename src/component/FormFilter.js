import React from 'react'

function formFilter({film,index}) {
    return (
        <form name="search_form">
            <h2>Filtrer par:</h2>
            <input id="title" type="checkbox" value="title" name="title" />
            <label htmlFor="title">Titre</label>
            <input id="release" type="checkbox" value="release" name="release" />
            <label htmlFor="release">Date de sortie</label>
            <input id="category" type="checkbox" value="category" name="category" />
            <label htmlFor="category">Categories</label>
      </form>
    )
}

export default formFilter
