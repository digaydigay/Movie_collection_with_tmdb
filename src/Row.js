import React, { useState, useEffect } from 'react'
import "./row.css"
import axios from "axios"




export default function Row({ title, baseUrl, url, isLargePosters, imageBase }) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${url}`)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [`${baseUrl}${url}`])


  return (
    <div className="row_poster_parent">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {
          movies.map((movie, key) => {
            if (movie.poster_path === undefined) return null
            return <img key={key}
              className={`row_poster ${isLargePosters && "row_large_poster"}`}
              src={`${imageBase}${isLargePosters ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name || movie.title} />

          })
        }
      </div>

    </div>
  )
}
