import './App.css';
import request from "./request"

// Components 
import Header from "./Header"
import Banner from "./Banner"
import SearchForm from "./SearchForm"
import Row from "./Row"
import Footer from "./Footer"
function App() {


  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner baseUrl={request.baseUrl} url={request.mostPopular} imageBase={request.images} />
      {/* Search Form */}
      <SearchForm allMovie={request.allMovie} imageBase={request.images} />
      {/* Rows */}
      <Row title="Most Popular" imageBase={request.images} baseUrl={request.baseUrl} url={request.mostPopular} isLargePosters />
      <Row title="Trending Now" imageBase={request.images} baseUrl={request.baseUrl} url={request.trending} />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
