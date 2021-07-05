import { useState } from 'react';
import './App.css';
import request from "./request"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Header from "./Header"
import Banner from "./Banner"
import SearchForm from "./SearchForm"
import Row from "./Row"
import Footer from "./Footer"
import Details from "./Details"
function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={!dark ? "App" : "app_dark"}>
      <Header dark={dark} setDark={setDark} />
      <Router>
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/" exact >
            {/* Header */}
            {/* Banner */}
            <Banner baseUrl={request.baseUrl} url={request.mostPopular} imageBase={request.images} />
            {/* Search Form */}
            <SearchForm imageBase={request.images} />
            {/* Rows */}
            <Row title="Most Popular" imageBase={request.images} baseUrl={request.baseUrl} url={request.mostPopular} isLargePosters />
            <Row title="Trending Now" imageBase={request.images} baseUrl={request.baseUrl} url={request.trending} />
            {/* Footer */}
            <Footer />
            {/* Movie Details */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
