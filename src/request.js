const API_KEY = "24e3fa79c3d9ef3de668bd674f99bc15"

const request = {
  images: `http://image.tmdb.org/t/p/original`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actions: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`

}
export default request