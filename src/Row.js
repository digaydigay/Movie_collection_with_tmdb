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
  }, [baseUrl, url])

  console.log(movies[0])
  return (
    <div className="row_poster_parent">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">

        {
          movies.map((movie, key) => {
            if (movie.poster_path === null) return null
            return <div className="row_poster">
              <img key={key}
                src={`${imageBase}${movie.poster_path}`}
                alt={movie.name || movie.title} />
              <h3>{movie.title || movie.nme}</h3>
            </div>
          })
        }

      </div>
    </div>
  )
}
