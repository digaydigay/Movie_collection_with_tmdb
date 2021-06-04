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
      <Banner url={request.originals} imageBase={request.images} />
      {/* Search Form */}
      <SearchForm />
      {/* Rows */}
      <Row title="Netflix Original" imageBase={request.images} url={request.originals} isLargePosters />
      <Row title="Trending Now" imageBase={request.images} url={request.trending} />
      <Row title="Top Related" imageBase={request.images} url={request.topRated} />
      <Row title="Comedy" imageBase={request.images} url={request.comedy} />
      <Row title="Horror" imageBase={request.images} url={request.horror} />
      <Row title="Romance" imageBase={request.images} url={request.romance} />
      <Row title="Actions" imageBase={request.images} url={request.actions} />
      <Row title="Documentaries" imageBase={request.images} url={request.documentaries} />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
