import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import MusicPage from "./MusicPage/MusicPage";
import MoviesPage from "./MoviesPage/MoviesPage";
import BooksPage from "./BooksPage/BooksPage";
import VideosPage from "./VideosPage/VideosPage";

const App = ({userId}) => (
  <Router>
    <Header></Header>
    <Routes>
      {userId ?
        <>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/music" element={<MusicPage/>} />
          <Route path="/movies" element={<MoviesPage/>} />
          <Route path="/books" element={<BooksPage/>} />
          <Route path="/videos" element={<VideosPage/>} />
        </>
      :
        <>
          {["/", "/music", "/movies", "/books", "/videos"].map(r => <Route key={r} path={r} element={<LandingPage/>} />)}
        </>
      }
    </Routes>
  </Router>
);

const mapStateToProps = state => ({ userId: state.auth.userId, showError: state.auth.showError })

export default connect(
  mapStateToProps
)(App);
