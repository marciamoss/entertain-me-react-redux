import React from "react";
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import "./MoviesPage.css";

const MoviesPage = () => (
  <>
  <div className="ui container music-page-content">
    <div className="home-button">
      <Link className="link" to="/">Return to <Icon name='home' size='small' /></Link>
    </div>
    <div>
    <Icon name='film' size='small' />Movies Page Coming Soon...
    </div>
  </div>
  </>
)

export default MoviesPage;