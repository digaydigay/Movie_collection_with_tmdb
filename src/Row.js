import axios from './axios'
import React, { useState, useEffect } from 'react'
import "./row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"


export default function Row({ title, url, isLargePosters, imageBase }) {
  const [movies, setMovies] = useState([])
  const [isTrailerUrl, setIsTrailerUrl] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [url])
  console.log(movies)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlay = (movie) => {
    if (isTrailerUrl) {
      setIsTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setIsTrailerUrl(urlParams.get("v"))
        }).catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div className="row_poster_parent">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {
          movies.map((movie, key) => {
            return <img key={key} onClick={() => onPlay(movie)}
              className={`row_poster ${isLargePosters && "row_large_poster"}`}
              src={`${imageBase}${isLargePosters ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name} />
          })
        }
      </div>
      { isTrailerUrl && <Youtube videoId={isTrailerUrl} opts={opts} />}
    </div>
  )
}
