import { useContext, useState, createContext } from "react";


const Movie = createContext([])
export const useMovie = () => {
  return useContext(Movie)
}
export function MovieProvider({ children }) {
  const [movieDetails, setMovieDetails] = useState([])
  return (
    <Movie.Provider value={{ movieDetails, setMovieDetails}}>
      {children}
    </Movie.Provider>

  )
}
