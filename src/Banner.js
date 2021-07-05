import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./banner.css"
import { useMovie } from "./MovieContext/movieContext"
import { useHistory } from "react-router-dom"

export default function Banner({ baseUrl, url, imageBase }) {
  const [movie, setMovie] = useState([])
  const { setMovieDetails } = useMovie()
  const history = useHistory()
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${url}`)
      console.log(request.data.results)
      return setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 0)])
    }
    fetchData()
  }, [baseUrl, url])



  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  function ShowDetails(movie) {
    setMovieDetails(movie)
    history.push("/details")
  }
  return (
    <>
      <div className="banner_container"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          objectPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${imageBase}${movie.poster_path})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="banner_contents">
          {/* Banner Title */}
          <h1 className="banner_title">{movie.name || movie.title}</h1>
          {/* Action Btn */}
          <button className="banner_button" onClick={() => { ShowDetails(movie) }}>Show Details</button>
          {/* Description */}
          <h1 className="banner_description">{truncate(movie?.overview, 180)}</h1>
        </div>
        <div className="banner_overlay"></div>
      </div>
    </>
  )
}
