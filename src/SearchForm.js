import React, { useRef, useState } from 'react'
import "./searchform.css"
import axios from "axios"


const fetchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=24e3fa79c3d9ef3de668bd674f99bc15&query='

export default function SearchForm({ imageBase }) {
  const SearchRef = useRef()
  const [searchMovie, setSearchMovie] = useState([])
  const onSearch = async (e) => {
    e.preventDefault()
    const request = await axios(`${fetchUrl}${SearchRef.current.value}`)
    try {
      setSearchMovie(request.data.results)
    } catch {
      console.log("Error:", Error)
    }
  }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }
  console.log(searchMovie)
  return (
    <div className="search_-container">
      <form className="search_form" onSubmit={onSearch}>
        <input placeholder="Search movies.." type="text" ref={SearchRef} />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
      {
        searchMovie.length ? <h3 className="search_result_title">Search Results..</h3> : ""
      }

      {
        searchMovie.map((movie, index) => {
          if (movie.backdrop_path === null) return null
          return <div key={index} className="column_search_result" >
            <img className="column_search_image" src={`${imageBase}${movie.backdrop_path}`} alt={movie.name || movie.title} />
            <div className="movie_info">
              <h1 className="movie_title">{movie.name || movie.title}</h1>
              <p className="movie_description"> {truncate(movie.overview, 200)}</p>
            </div>
          </div>

        })
      }

    </div>
  )
}
