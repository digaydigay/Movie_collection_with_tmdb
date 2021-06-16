import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./banner.css"

export default function Banner({ baseUrl, url, imageBase }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(`${baseUrl}${url}`)
      setMovies(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ])
    }
    fetchData()

  }, [baseUrl, url])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }
  return (
    <>
      <div className="banner_container"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          objectPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${imageBase}${movies.poster_path})`,
        }}
      >
        <div className="banner_contents">
          {/* Banner Title */}
          <h1 className="banner_title">{movies.name || movies.title}</h1>
          {/* Action Btn */}
          <button className="banner_button">Show Details</button>
          {/* Description */}
          <h1 className="banner_description">{truncate(movies?.overview, 180)}</h1>
        </div>
        <div className="banner_overlay"></div>
      </div>
    </>
  )
}
