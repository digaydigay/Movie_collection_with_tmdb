import React from 'react'
import "./details.css"
import { useMovie } from "./MovieContext/movieContext"
import request from "./request"
import { useHistory } from "react-router-dom"

export default function Details() {
  const { movieDetails } = useMovie()
  const history = useHistory()
  console.log(movieDetails.poster_path)
  return (
    <div className="movie_details_main">
      <div className="movie_details">
        <div className="movie_details_poster">
          <img src={`${request.images}${movieDetails.poster_path}`} alt="img" />
        </div>
        <div className="movie_title_decription">
          <h3>{movieDetails.title || movieDetails.name}</h3>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
      <button style={{
        background: "teal",
        width: "100px",
        height: "50px",
        position: "relative",
        left: "92%"
      }} onClick={() => history.push("/")}>Back</button>
    </div>


  )
}
