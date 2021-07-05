import React, { useEffect, useState } from 'react'
import "./details.css"
import { useMovie } from "./MovieContext/movieContext"
import request from "./request"
import { useHistory } from "react-router-dom"
import axios from 'axios'
import ReactLoading from "react-loading"

export default function Details() {
  const { movieDetails } = useMovie()
  const [loading, setLoading] = useState(true)
  const [trailerKeyv1, setTrailerv1] = useState()
  let trailerKeyv2 = sessionStorage.getItem("trailer")
  let details = JSON.parse(sessionStorage.getItem("details"))
  const history = useHistory()

  useEffect(() => {
    async function trailer() {
      const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=24e3fa79c3d9ef3de668bd674f99bc15&language=en-US`)
      const key = await trailer.data.results
      setLoading(false)
      sessionStorage.setItem("details", JSON.stringify(movieDetails, null, 2))
      if (key[0] === undefined) return null
      setTrailerv1(key[0].key)
      sessionStorage.setItem("trailer", key[0].key)
      return trailer
    }
    setLoading(false)
    trailer()
  }, [movieDetails])


  console.log(details.id)

  return (
    <>
      {
        <div className="movie_details_main">
          {

            loading ?
              <ReactLoading style={{
                width: "50px", height: "50px", fill: "maroon",
                positiom: "relative",
                top: "50%", left: "50%", transform: "tranlate(-50%,-50%)"
              }} type="bars" color="red" />
              : (
                movieDetails.poster_path ?
                  <>
                    <div className="movie_details">
                      <img src={`${request.images}${movieDetails.poster_path}`} alt="img" />
                      <div className="description">
                        <div className="title_des">
                          <h3>{movieDetails.title || movieDetails.name}</h3>
                          <p>{movieDetails.overview}</p>
                        </div>
                        <div className="iframe_wrapper">
                          <iframe title="trailer" allowFullScreen src={`https://www.youtube.com/embed/${trailerKeyv1 !== undefined ? trailerKeyv1 : ""}?playlist=YdAIBlPVe9s=1`}></iframe>
                        </div>
                      </div>

                    </div>
                    <button className="back" onClick={() => history.push("/")}> <i className="fas fa-angle-left"></i> Back</button>
                  </>
                  :
                  <>
                    <div className="movie_details">
                      <img src={`${request.images}${details.poster_path}`} alt="img" />
                      <div className="description">
                        <div className="title_des">
                          <h3>{details.title || details.name}</h3>
                          <p>{details.overview}</p>
                        </div>
                        <div className="iframe_wrapper">
                          <iframe title="trailer" allowFullScreen src={`https://www.youtube.com/embed/${trailerKeyv2 !== undefined ? trailerKeyv2 : ""}?playlist=YdAIBlPVe9s=1`}></iframe>
                        </div>
                      </div>

                    </div>
                    <button className="back" onClick={() => history.push("/")}> <i className="fas fa-angle-left"></i> Back</button>
                  </>
              )

          }
        </div>
      }
    </>
  )
}
