import React, { useState, useEffect } from 'react'
import "./row.css"
import axios from "axios"
import { useMovie } from "./MovieContext/movieContext"
import { useHistory } from 'react-router-dom'
import ReactLoading from "react-loading"



export default function Row({ title, baseUrl, url, imageBase }) {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const { setMovieDetails } = useMovie()
  const history = useHistory()
  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(`${baseUrl}${url}`)
      setTimeout(() => {
        setLoading(true)
      }, 2000)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [baseUrl, url])

  const showDetails = (movie) => {
    setMovieDetails(movie)
    history.push("/details")
  }
  return (
    <div className="row_poster_parent">
      <h2 className="row_title">{title}</h2>


      <div className="row_posters">
        {
          !loading ? <ReactLoading style={{
            width: "50px", height: "50px", fill: "maroon",
            positiom: "absolute",
            top: "50%", left: "50%", transform: "tranlate(-50%,-50%)"
          }} className="loader" type="bars" color="red" />
            : ""
        }
        {
          movies.map((movie, key) => {
            if (movie.poster_path === null) return null
            return <div key={key}> <div className="row_poster" onClick={() => showDetails(movie)} key={key}>
              <img
                src={`${imageBase}${movie.poster_path}`}
                alt={movie.name || movie.title} />
              <h5 style={{ pointerEvents: "none" }}>{movie.title || movie.name}</h5>
            </div>
            </div>
          })
        }

      </div>
    </div>
  )
}
