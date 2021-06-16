import React, { useState, useEffect } from 'react'
import "./row.css"
import axios from "axios"
import { useMovie } from "./MovieContext/movieContext"
import { useHistory } from 'react-router-dom'



export default function Row({ title, baseUrl, url, isLargePosters, imageBase }) {
  const [movies, setMovies] = useState([])
  const { setMovieDetails } = useMovie()
  const history = useHistory()
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${url}`)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [baseUrl, url])

  const showDetails = (movie) => {
    setMovieDetails(movie)
    console.log(movie)
    history.push("/details")
  }

  return (
    <div className="row_poster_parent">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">

        {
          movies.map((movie, key) => {
            if (movie.poster_path === null) return null
            return <div className="row_poster" onClick={() => showDetails(movie)}>
              <img key={key}
                src={`${imageBase}${movie.poster_path}`}
                alt={movie.name || movie.title} />
              <h3 style={{ pointerEvents: "none" }}>{movie.title || movie.nme}</h3>
            </div>
          })
        }

      </div>
    </div>
  )
}
