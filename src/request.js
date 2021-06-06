const API_KEY = "24e3fa79c3d9ef3de668bd674f99bc15"

const request = {
  baseUrl: `https://api.themoviedb.org/3`,
  images: `http://image.tmdb.org/t/p/original/`,
  mostPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
}
export default request