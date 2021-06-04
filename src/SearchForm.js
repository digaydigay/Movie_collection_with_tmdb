import React from 'react'
import "./searchform.css"

export default function SearchForm() {
  return (
    <div className="search_form-container">
      <form className="search_form">
        <input placeholder="Search movies.." type="text" />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}
